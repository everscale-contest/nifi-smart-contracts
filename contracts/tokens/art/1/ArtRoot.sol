pragma ton-solidity >= 0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../abstract/Root.sol";
import "../../../abstract/extensions/rootManaged/root/RootManaged.sol";
import "../../../abstract/extensions/rootManaged/root/RootManagedCreationFee.sol";
import "../../../abstract/extensions/rootManaged/root/RootManagedWithdraw.sol";
import "ArtToken.sol";
import "interfaces/IArtRoot.sol";
import "../../../libraries/SwiftAddress.sol";

contract ArtRoot is Root, RootManaged, RootManagedCreationFee, RootManagedWithdraw, IArtRoot {

    event TK_CT_nifi_art1_1(uint64 id);

    modifier validCreatorFees(uint32 fees) {
        require(fees < 2401, 277);
        _;
    }

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
        uint128 minCreationValue,
        uint128 creationTopup,
        string  name,
        string  symbol,
        TvmCell tokenCode
    )
        public
        Root(name, symbol, tokenCode)
        RootManaged(manager)
        RootManagedCreationFee(minCreationValue, creationTopup)
    {}



    /************
     * EXTERNAL *
     ************/
    /**
     * Create token contract and returns address. Accept 0.1 ton and more.
     * owner ............... Address of token owner.
     * manager ............. Contract that governs token contract.
     *                       If you don't want to set the manager, use 0:000011112222...
     * managerUnlockTime ... UNIX time. Time when the manager can be unlocked.
     *                       If you don't want to set the manager, use 0.
     * addr ................ Address of the token contract.
     * creator ............. Address of creator.
     * creatorPercentReward ......... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash ................ Hash of data that associated with token.
     */
    function create(
        address owner,
        address manager,
        uint32  managerUnlockTime,
        address creator,
        uint32  creatorPercentReward,
        uint256 hash
    )
        override
        external
        validCreatorFees(creatorPercentReward)
        returns(
            address addr
        )
    {
        require(msg.value >= _minCreationFee,278);

        _totalSupply++;
        addr = new ArtToken{
            code: _tokenCode,
            value: _creationTopup,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }(owner, manager, managerUnlockTime, creator, creatorPercentReward, hash);
        emit TK_CT_nifi_art1_1{dest: SwiftAddress.value()}(_totalSupply);
        //_totalSupply++;
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
            contr: ArtToken,
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