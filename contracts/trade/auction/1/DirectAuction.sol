pragma ton-solidity >= 0.44.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../abstract/interfaces/IToken.sol";
import "../../../abstract/interfaces/ITokenAddress.sol";
import "../../../abstract/modifiers/Accept.sol";
import "../../../libraries/SwiftAddress.sol";

interface ITradeToken {
    function receiveTradeInfo() external view responsible returns(
            address owner,
            address creator,
            uint32  creatorPercentReward,
            address manager,
            uint32  managerUnlockTime
        );
}

/**
 * Error codes
 *     100 - Method for the root only
 *     101 - Too low bid
 *     102 - Auction not still started or already finished
 *     103 - Auction not finished
 */
contract DirectAuction is Accept {
    /**********
     * EVENTS *
     **********/
    event AUC_BS_nifi_auc_1(uint64 id, uint128 bidValue, address bidCreator);
    event AUC_SC_nifi_auc_1(uint64 id, uint128 finalBidValue, address bidCreator);
    event AUC_EX_nifi_auc_1(uint64 id);



    /**************
     * STRUCTURES *
     **************/
    struct Bid {
        address bider;
        uint128 value;
    }



    /**********
     * STATIC *
     **********/
    address static _root;
    uint64 static _id;



    /*************
     * VARIABLES *
     *************/
    address private _creator;
    address private _token;

    uint32  private _startTime;
    uint32  private _endTime;
    uint32  private _askFinish;

    uint128 private _startBid;
    uint128 private _stepBid;
    uint128 private _bidCost;
    Bid     private _curBid;

    uint32  _showcaseFees;



    /*************
     * MODIFIERS *
     *************/
    modifier onlyRoot() {
        require(msg.sender == _root, 100, "Method for the root only");
        _;
    }

    modifier validBid(uint128 price) {
        require(
            (price > _startBid) &&
            (msg.value > price + _bidCost) &&
            (price >= _curBid.value + _stepBid),
            101,
            "Too low bid");
        _;
    }

    modifier validTime() {
        require((now >= _startTime) && (now < _endTime), 102, "Auction not still started or already finished");
        _;
    }

    modifier auctionFinished() {
        require(now >= _endTime, 103, "Auction not finished");
        _;
    }

    modifier onlyToken() {
        require(msg.sender == _token, 104, "Method for the token only");
        _;
    }

    modifier canAskFinish() {
        require(now >= _askFinish, 105, "Try it in two minutes");
        _;
    }



    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * creator ..... Address of auction creator.
     * token ....... Address of token contract.
     * startBid .... The minimum bid at which the auction starts.
     * stepBid ..... Minimum bet step.
     * bidCost ...... Commission that participants add to each bid to make the contract work.
     * startTime ... UNIX time. Auction stat time.
     * endTime ..... UNIX time. Auction end time.
     */
    constructor(
        address creator,
        address token,
        uint128 startBid,
        uint128 stepBid,
        uint128 bidCost,
        uint32  startTime,
        uint32  endTime,
        uint32 showcaseFees
    )
        public onlyRoot accept
    {
        _creator = creator;
        _token = token;
        _startBid = startBid;
        _stepBid = stepBid;
        _bidCost = bidCost;
        _startTime = startTime;
        _endTime = endTime;
        _askFinish = endTime;
        _showcaseFees = showcaseFees;
    }



    /**********
     * PUBLIC *
     **********/
    /**
     * Everyone can call this method by internal message from own wallet contract.
     */
    function bid(uint128 price) public validTime validBid(price) {
         if (_curBid.bider != address(0))
            _curBid.bider.transfer({value: _curBid.value, flag: 1, bounce: true});

        _curBid.value = price;
        _curBid.bider = msg.sender;
        emit AUC_BS_nifi_auc_1{dest: SwiftAddress.value()}(_id,_curBid.value,_curBid.bider);
    }

    /**
     * Everyone can call this method by external message.
     */
    function finish() public auctionFinished canAskFinish accept {
        _askFinish = now+120;
        ITradeToken(_token).receiveTradeInfo{value: 0.06 ton, bounce: false, flag: 0, callback: DirectAuction.onReceiveTradeInfo}();
    }

    /**
     * Only token can call this method by internal message.
     */
    function onReceiveTradeInfo(
            address owner,
            address creator,
            uint32  creatorPercentReward,
            address manager,
            uint32  managerUnlockTime
    ) public onlyToken {
        if ((manager == address(this)) && (managerUnlockTime > now+60)){
            uint128 balance = address(this).balance;

            if (creatorPercentReward>0) {
                uint128 fee = math.muldiv(balance,creatorPercentReward,10000);
                if (fee>0)
                    creator.transfer({value: fee, flag: 1, bounce: true});
            }

            if (_showcaseFees>0) {
                uint128 sfee = math.muldiv(balance,_showcaseFees,10000);
                if (sfee>0)
                    _root.transfer({value: sfee, flag: 1, bounce: true});
            }

            if (_curBid.bider != address(0)) {
                emit AUC_SC_nifi_auc_1{dest: SwiftAddress.value()}(_id,_curBid.value,_curBid.bider);
                ITokenAddress(_token).changeOwner(_curBid.bider);
            }else {
                emit AUC_EX_nifi_auc_1{dest: SwiftAddress.value()}(_id);
            }

            IToken(_token).unlock();

            _root.transfer({value: balance/20, flag: 1, bounce: true});//send 5%
            selfdestruct(owner);
        }else{
            if (_curBid.bider != address(0)) {
                _curBid.bider.transfer({value: _curBid.value, flag: 1, bounce: true});
            }
            IToken(_token).unlock();
            emit AUC_EX_nifi_auc_1{dest: SwiftAddress.value()}(_id);
            selfdestruct(owner);
        }

    }



    /***********
     * GETTERS *
     ***********/
    /**
     * root ........ Address of auction root contract.
     * id .......... Id of auction.
     * creator ..... Address of auction creator.
     * token ....... Address of token contract.
     * startBid .... The minimum bid at which the auction starts.
     * stepBid ..... Minimum bet step.
     * bidCost ...... Commission that participants add to each bid to make the contract work.
     * startTime ... UNIX time. Auction stat time.
     * endTime ..... UNIX time. Auction end time.
     * curBid
     *   bider ..... Address of a participant.
     *   value ..... Bid value.
     */
    function getInfo() public view returns(
            address root,
            uint64 id,
            address creator,
            address token,
            uint128 startBid,
            uint128 stepBid,
            uint128 bidCost,
            uint32  startTime,
            uint32  endTime,
            Bid     curBid
        )
    {
        root = _root;
        id = _id;
        creator = _creator;
        token = _token;
        startTime = _startTime;
        endTime = _endTime;
        startBid = _startBid;
        stepBid = _stepBid;
        bidCost = _bidCost;
        curBid = _curBid;
    }
}
