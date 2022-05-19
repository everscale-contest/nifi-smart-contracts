pragma ton-solidity >= 0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../abstract/Root.sol";
import "../../../abstract/extensions/rootManaged/root/RootManaged.sol";
import "../../../abstract/extensions/rootManaged/root/RootManagedCreationFee.sol";
import "../../../abstract/extensions/rootManaged/root/RootManagedWithdraw.sol";
import "Ask.sol";
import "../../../libraries/SwiftAddress.sol";

interface ITradeToken {

    function receiveTradeInfo() external view responsible returns(
            address owner,
            address creator,
            uint32  creatorPercent,
            address manager,
            uint32  managerUnlockTime
        );
}

contract AskRoot is Root, RootManaged, RootManagedCreationFee, RootManagedWithdraw {

    uint128 _minAcceptFee;
    uint128 _askIncomePercent;

    event ASK_CT_nifi_ask_1(uint64 id, address token, address creator, uint128 price, uint32 endTime, uint32 showcasePercent);

    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * name ........ UTF8-encoded name of token. e.g. "CryptoKitties"
     * symbol ...... UTF8-encoded symbol of token. e.g. "CK"
     * tokenCode ... Code of token contract.
     */
    constructor(
        address manager,
        uint128 minCreationFee,
        uint128 minAcceptFee,
        uint128 creationTopup,
        uint128 askIncomePercent,
        string  name,
        string  symbol,
        TvmCell tokenCode
    )
        public
        Root(name, symbol, tokenCode)
        RootManaged(manager)
        RootManagedCreationFee(minCreationFee, creationTopup)
    {
        _minAcceptFee = minAcceptFee;
        _creationTopup = creationTopup;
        _askIncomePercent = askIncomePercent;
    }

    /************
     * EXTERNAL *
     ************/
    /**
     * Create token contract and returns address. Accept 0.1 ton and more.
     */
    function create(
        address token,
        uint128 price,
        uint32  endTime,
        uint32 showcasePercent
    )
        external creationPaymentIsEnough
        returns(
            address addr
        )
    {
        (
            address owner,
            address creator,
            uint32 creatorPercent
        ) = await ITradeToken(token).receiveTradeInfo();

        require(msg.sender == owner,280,"Owner of token is not sender");

        _totalSupply++;

        addr = new Ask{
            code: _tokenCode,
            value: _creationTopup,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }( owner, creator, token, price, endTime, _minAcceptFee, creatorPercent, showcasePercent, _askIncomePercent);
        emit ASK_CT_nifi_ask_1{dest: SwiftAddress.value()}(_totalSupply, token, creator, price, endTime, showcasePercent);
    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Receive the address of the token contract calculated by id.
     * id ..... Id of token.
     * addr ... Address of the token contract.
     */
    function receiveTokenAddress(uint64 id) override external view responsible returns(address addr) {
        return{value: 0, bounce: false, flag: 64} getTokenAddress(id);
    }



    /***********
     * GETTERS *
     ***********/
     /**
     * Returns the address of the token contract calculated by id.
     * id ..... Id of token.
     * addr ... Address of the token contract.
     */
    function getTokenAddress(uint64 id) override public view returns(address addr) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: Ask,
            varInit: {
                _root: address(this),
                _id: id
            },
            pubkey: tvm.pubkey(),
            code: _tokenCode
        });
        return address(tvm.hash(stateInit));
    }

    function getAskParameters() public view returns(
        uint128 minAcceptFee,
        uint128 askIncomePercent
    ) {
        minAcceptFee = _minAcceptFee;
        askIncomePercent = _askIncomePercent;
    }

    function setAskParameters(uint128 minAcceptFee, uint128 askIncomePercent) public {
        require(msg.sender == _manager,280);
        _minAcceptFee = minAcceptFee;
        _askIncomePercent = askIncomePercent;
    }
}