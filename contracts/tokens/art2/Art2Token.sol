pragma ton-solidity ^0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../abstract/extensions/tokenChangeOwnerEvent/token/TokenChangeOwnerAddressEvent2.sol";
import "../../abstract/TokenAddress2.sol";
import "interfaces/IArtToken.sol";

/**
 * Error codes
 *     100 - Method for the owner only
 *     101 - Method for the manager only
 *     102 - Method for the owner or manager only
 *     103 - Method for the root only
 *     104 - Manager unlocked
 *     105 - Manager locked
 *     106 - Invalid lock time
 *
 *     201 - Address can't be null
 */
contract Art2Token is TokenAddress2, TokenChangeOwnerAddressEvent2, IArtToken {
    /*************
     * VARIABLES *
     *************/
    address static _serie;

    address   private _creator;
    uint32    private _creatorFees;
    uint256   private _hash;
 
    modifier validCreatorFees(uint32 fees) {
        require(fees < 2401, 277);
        _;
    } 

    modifier onlySeries() {
        require(msg.sender == _serie, 103, "Method for the series only");
        _;
    }


    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * owner ............... Address of token owner.
     * manager ............. Contract that governs this contract.
     * managerUnlockTime ... UNIX time. Time when the manager can be unlocked.
     * creator ............. Address of creator.
     * creatorFees ......... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash ................ Hash of data that associated with token.
     */
    constructor(
        address owner,
        address manager,
        uint32  managerUnlockTime,
        address creator,
        uint32  creatorFees,
        uint256 hash
    )
        public
        onlySeries
        validCreatorFees(creatorFees)
        TokenAddress2(
            owner,
            manager,
            managerUnlockTime
        )
    {
        _root.transfer({value: 0.1 ton, flag: 1, bounce: true});
        _creator = creator;
        _creatorFees = creatorFees;
        _hash = hash;
    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Returns art info.
     * creator ....... Address of creator.
     * creatorFees ... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash .......... Hash of data that associated with token.
     * hashesCount ... Total count of hashes.
     */
    function receiveArtInfo() override external view responsible returns(
            address creator,
            uint32  creatorFees,
            uint256 hash
        )
    {
        return{value: 0, bounce: false, flag: 64} getArtInfo();
    }



    /***********
     * GETTERS *
     ***********/
    /**
     * Returns art info.
     * creator ............. Address of creator.
     * creatorFees ......... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash ................ Hash of data that associated with token.
     * hashesCount ......... Total count of hashes.
     */
    function getArtInfo() public view returns(address creator, uint32 creatorFees, uint256 hash) {
        creator = _creator;
        creatorFees = _creatorFees;
        hash = _hash;
    }

     /************
     * INTERNAL *
     ************/
    /**
     * Revert() if owner or manager can't change owner address.
     */
    function _canChangeOwner() override internal {}

    function receiveTradeInfo() external view responsible returns(
            address owner,
            address creator,
            uint32  creatorFees,
            address manager,
            uint32  managerUnlockTime
        )
    {
        return{value: 0, bounce: false, flag: 64} getTradeInfo();
    }

    function getTradeInfo() public view returns(address owner, address creator, uint32 creatorFees, address manager, uint32 managerUnlockTime) {
        owner = _owner;
        creator = _creator;
        creatorFees = _creatorFees;
        manager = _manager;
        managerUnlockTime = _managerUnlockTime;
    }
}