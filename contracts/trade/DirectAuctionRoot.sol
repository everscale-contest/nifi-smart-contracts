pragma ton-solidity ^0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../abstract/Root.sol";
import "../abstract/extensions/rootManaged/root/RootManaged.sol";
import "../abstract/extensions/rootManaged/root/RootManagedCreationFee.sol";
import "../abstract/extensions/rootManaged/root/RootManagedWithdraw.sol";
import "DirectAuction.sol";
import "../libraries/SwiftAddress.sol";

contract ArtRoot is Root, RootManaged, RootManagedCreationFee, RootManagedWithdraw {

    event AUC_CT_nifi_auc_1(uint64 id, address tokenAddress, uint128 startBid, uint128 stepBid, uint32 startTime, uint32 endTime, address auctionCreator);
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
        uint128 creationMinValue,
        uint128 creationFee,
        string  name,
        string  symbol,
        TvmCell tokenCode
    )
        public
        Root(name, symbol, tokenCode)
        RootManaged(manager)
        RootManagedCreationFee(creationMinValue, creationFee)
    {}



    /************
     * EXTERNAL *
     ************/
    /**
     * Create token contract and returns address. Accept 0.1 ton and more.
     */
    function create(
        address creator,
        address token,
        uint128 startBid,
        uint128 stepBid,
        uint128 feeBid,
        uint32 startTime,
        uint32 endTime,
        uint32 showcaseFees
    )
        external
        returns(
            address addr
        )
    {
        require(msg.value >= _creationMinValue,278);
	    require(showcaseFees<1001,279);//<=10%
        uint128 value = msg.value - _creationFee;
        _totalSupply++;
        addr = new DirectAuction{
            code: _tokenCode,
            value: value,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }( creator, token, startBid, stepBid, feeBid, startTime, endTime, showcaseFees);
        emit AUC_CT_nifi_auc_1{dest: SwiftAddress.value()}(_totalSupply,token,startBid,stepBid,startTime,endTime,creator);
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
            contr: DirectAuction,
            varInit: {
                _root: address(this),
                _id: id
            },
            pubkey: tvm.pubkey(),
            code: _tokenCode
        });
        return address(tvm.hash(stateInit));
    }
}