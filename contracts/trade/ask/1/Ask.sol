pragma ton-solidity >= 0.44.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../abstract/interfaces/IToken.sol";
import "../../../abstract/interfaces/ITokenAddress.sol";
import "../../../abstract/modifiers/Accept.sol";
import "../../../libraries/SwiftAddress.sol";


contract Ask is Accept {
    /**********
     * EVENTS *
     **********/
    event ASK_AC_nifi_ask_1(uint64 id, address newOwner);
    event ASK_CN_nifi_ask_1(uint64 id);
    event ASK_EX_nifi_ask_1(uint64 id);
    event ASK_PC_nifi_ask_1(uint64 id, uint128 newPrice);

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
    uint32 private _showCaseFee;
    uint32  private _endTime;
    uint128 private _price;

    /*************
     * MODIFIERS *
     *************/
    modifier onlyRoot() {
        require(msg.sender == _root, 100, "Method for the root only");
        _;
    }

    modifier onlyCreator() {
        require(msg.sender == _creator, 101, "Method for the creator only");
        _;
    }

    modifier onlyInnerMsg() {
        require(msg.value != 0, 102, "Recive only inner message");
        _;
    }

    modifier validTime() {
        require(now < _endTime-30, 103, "Offer already finished");
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
        uint32  endTime,
        uint32 showcaseFee
    )
        public onlyRoot accept
    {
        _creator = creator;
        _token = token;
        _price = price;
        _endTime = endTime;
        _showCaseFee = showcaseFee;
    }



    /**********
     * PUBLIC *
     **********/
    /**
     * Everyone can call this method by internal message.
     */
    function acceptAsk() public onlyInnerMsg validTime {
        require(msg.value > _price, 105, "Not enougth money");
        uint128 fee;
        if (_showCaseFee>0) {
            fee = math.muldiv(_price,_showCaseFee,10000);
            if (fee>0)
                _root.transfer({value: fee, flag: 1, bounce: true});
        }

        ITokenAddress(_token).changeOwner(msg.sender);
        IToken(_token).unlock();

        uint128 rootFee;
        rootFee = math.muldiv(_price,500,10000);

        _creator.transfer({value: _price-(fee+rootFee), flag: 1, bounce: true});

        emit ASK_AC_nifi_ask_1{dest: SwiftAddress.value()}(_id, msg.sender);
        selfdestruct(_root);
    }

    /**
     * Everyone can call this method by external message.
     */
    function cancel() public onlyCreator accept {
        IToken(_token).unlock();
        emit ASK_CN_nifi_ask_1{dest: SwiftAddress.value()}(_id);
        selfdestruct(_root);
    }

    function expired() public {
        require(now > _endTime, 104, "Offer not finished");
        tvm.accept();
        IToken(_token).unlock();
        emit ASK_EX_nifi_ask_1{dest: SwiftAddress.value()}(_id);
        selfdestruct(_root);
    }

    function changePrice(uint128 newPrice) public onlyCreator accept {
        require(address(this).balance>0.1 ton,103);
        _price = newPrice;
        emit ASK_PC_nifi_ask_1{dest: SwiftAddress.value()}(_id, newPrice);
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
            uint64 id,
            address creator,
            address token,
            uint128 price,
            uint32  endTime,
            uint32 showcaseFee
        )
    {
        root = _root;
        id = _id;
        creator = _creator;
        token = _token;
        price = _price;
        endTime = _endTime;
        showcaseFee = _showCaseFee;
    }
}