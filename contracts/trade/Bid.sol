pragma ton-solidity >= 0.44.0;

import "../abstract/interfaces/IToken.sol";
import "../abstract/interfaces/ITokenAddress.sol";
import "../abstract/modifiers/Accept.sol";

interface ITradeToken {
    
    function receiveTradeInfo() external view responsible returns(
            address owner,
            address creator,
            uint32  creatorFees,
            address manager,
            uint32  managerUnlockTime
        );
}

/**
 * Error codes
 *     100 - Method for the root only
 *     101 - Method for the token only
 *     102 - Recive only inner message
 *     103 - Bid already finished
 *     104 - Bid not finished
 *     105 - Need more than 0.5 ton for operation
 *     106 - Wrong manager
 *     107 - Wrong manager unlock time
 */
contract Bid is Accept {
    /**********
     * EVENTS *
     **********/
    event BidCreated(uint128 id, address creator, address token, uint128 price, uint32 endTime);
    event BidAccepted(uint128 id, address creator, address token, uint128 price);
    event BidFinished(uint128 id, address creator, address token, uint128 price);
    

    /**********
     * STATIC *
     **********/
    address static _root;
    uint128 static _id;



    /*************
     * VARIABLES *
     *************/
    address private _creator;
    address private _token;

    uint32  private _endTime;

    uint128 private _price;
    uint128 private _fee;



    /*************
     * MODIFIERS *
     *************/
    modifier onlyRoot() {
        require(msg.sender == _root, 100, "Method for the root only");
        _;
    }

    modifier onlyToken() {
        require(msg.sender == _token, 101, "Method for the token only");
        _;
    }

    modifier onlyInnerMsg() {
        require(msg.value != 0, 102, "Recive only inner message");
        _;
    }

    modifier validTime() {
        require(now < _endTime, 103, "Offer already finished");
        _;
    }

    modifier bidFinished() {
        require(now >= _endTime+900, 104, "Offer not finished");
        _;
    }

    modifier checkValue() {
        require(msg.value > 0.3 ton, 105, "Need more than 0.5 ton for operation");
        _;
    }

    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * creator ..... Address of a buyer.
     * token ....... Address of token contract.
     * price ....... The value of offer.
     * stepBid ..... Minimum bet step.
     * fee ......... Commission for contract creatin and storage.
     * endTime ..... UNIX time. Offer end time.
     */
    constructor(
        address creator,
        address token,
        uint128 price,
        uint32  endTime
    )
        public onlyRoot accept
    {
        _creator = creator;
        _token = token;
        _price = price;
        _endTime = endTime;
        emit BidCreated(_id, _creator, _token, _price, _endTime);
    }



    /**********
     * PUBLIC *
     **********/
    /**
     * Everyone can call this method by internal message.
     */
    function acceptBid() public view onlyInnerMsg validTime checkValue {        
        ITradeToken(_token).receiveTradeInfo{value: 0, bounce: false, flag: 64, callback: Bid.onReceiveTradeInfo}();        
    }

    /**
     * Only token can call this method by internal message.
     */
    function onReceiveTradeInfo(
            address owner,
            address creator,
            uint32  creatorFees,
            address manager,
            uint32  managerUnlockTime
    ) public onlyToken {
        require(manager == address(this), 106, "Wrong manager");
        require(managerUnlockTime > _endTime+900, 107, "Wrong manager unlock time");

        uint128 balance = address(this).balance;

        if (creatorFees>0) {
            uint128 fee = math.muldiv(balance,creatorFees,10000);
            if (fee>0)
                creator.transfer({value: fee, flag: 1, bounce: true});
        }

        ITokenAddress(_token).changeOwner(_creator);
        IToken(_token).unlock();

        _root.transfer({value: balance/20, flag: 1, bounce: true});
        emit BidAccepted(_id, _creator, _token, _price);
        selfdestruct(owner);
    }

    /**
     * Everyone can call this method by external message.
     */
    function finish() public bidFinished accept {
        emit BidFinished(_id, _creator, _token, _price);
        selfdestruct(_creator);
    }



    /***********
     * GETTERS *
     ***********/
    /**
     * root ........ Address of auction root contract.
     * id .......... Id of auction.
     * creator ..... Address of a buyer.
     * token ....... Address of token contract.
     * price ....... The value of offer.
     * stepBid ..... Minimum bet step.
     * fee ......... Commission for contract creatin and storage.
     * endTime ..... UNIX time. Offer end time.
     */
    function getInfo() public view returns(
            address root,
            uint128 id,
            address creator,
            address token,
            uint128 price,
            uint32  endTime
        )
    {
        root = _root;
        id = _id;
        creator = _creator;
        token = _token;
        price = _price;
        endTime = _endTime;       
    }
}
