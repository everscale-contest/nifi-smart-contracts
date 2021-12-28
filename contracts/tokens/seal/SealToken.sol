pragma ton-solidity >=0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../libraries/SwiftAddress.sol";
import "../stamp/IStampToken.sol";

contract SealToken {

    uint128 constant ENDROSE_FEE = 0.1 ton;

    event TK_CO_nifi_seal_1(uint64 id, address newOwner);
    event TK_MG_nifi_seal_1(uint64 id, address newManager, uint32 expirationTime);

    /*************
     * VARIABLES *
     *************/
    address static _root;
    uint64 static _id;

    address _owner;
    address _manager;
    uint32  _managerUnlockTime;

    address _creator;
    uint32  _creatorFees;
    uint256 _hash;

    modifier onlyRoot() {
        require(msg.sender == _root, 101, "Method for the root only");
        _;
    }

    modifier onlyManager {
        require(msg.sender == _manager, 102, "Method for the manager only");
        _;
    }

    modifier onlyLockedManager{
        require(msg.sender == _manager && now < _managerUnlockTime, 103, "Method for locked manager only");
        _;
    }

    modifier onlyUnlockedOwnerOrLockedManager {
        require((msg.sender == _owner && now >= _managerUnlockTime) ||
                (msg.sender == _manager && now < _managerUnlockTime),
                104,
                "Method for the owner or manager only"
        );
        _;
    }

    modifier unlockTimeIsValid(uint32 unlockTime) {
        require(now < unlockTime, 105, "Invalid lock time");
        _;
    }

    modifier addressIsNotNull(address addr) {
        require(addr.value != 0, 106, "Address can't be null");
        _;
    }

    modifier validCreatorFees(uint32 fees) {
        require(fees < 2401, 107, "Unvalid creator fees");
        _;
    }

    modifier onlyOwner{
        require((msg.sender == _owner && now >= _managerUnlockTime) , 108, "Method for owner only");
        _;
    }


    modifier accept {
        tvm.accept();
        _;
    }

    constructor(
        address owner,
        address manager,
        uint32  managerUnlockTime,
        address creator,
        uint32  creatorFees,
        uint256 hash
    )
        public
        onlyRoot
        validCreatorFees(creatorFees)
        addressIsNotNull(creator)
        addressIsNotNull(owner)
        accept
    {
        _creator = creator;
        _creatorFees = creatorFees;
        _hash = hash;
        _owner = owner;
        _manager = manager;
        _managerUnlockTime = managerUnlockTime;
    }

    function changeOwner(address owner)
        public
        onlyUnlockedOwnerOrLockedManager
        addressIsNotNull(owner)
        accept
    {
        _owner = owner;
        emit TK_CO_nifi_seal_1{dest: SwiftAddress.value()}(_id, _owner);
    }

    function receiveArtInfo() public view responsible returns(address creator, uint32  creatorFees, uint256 hash) {
        return{value: 0, bounce: false, flag: 64} getArtInfo();
    }

    function getArtInfo() public view returns(address creator, uint32  creatorFees, uint256 hash) {
        creator = _creator;
        creatorFees = _creatorFees;
        hash = _hash;
    }

    function getInfo() public view returns(address root, uint64 id) {
        root = _root;
        id = _id;
    }

    function receiveTradeInfo() public view responsible returns(
            address owner,
            address creator,
            uint32  creatorFees,
            address manager,
            uint32  managerUnlockTime
        ) {
        return{value: 0, bounce: false, flag: 64} getTradeInfo();
    }

    function getTradeInfo() public view returns(address owner, address creator, uint32 creatorFees, address manager, uint32 managerUnlockTime) {
        owner = _owner;
        creator = _creator;
        creatorFees = _creatorFees;
        manager = _manager;
        managerUnlockTime = _managerUnlockTime;
    }

    function lockManager(address manager, uint32 unlockTime)
        public
        onlyUnlockedOwnerOrLockedManager
        addressIsNotNull(manager)
        unlockTimeIsValid(unlockTime)
        accept
    {
        _manager = manager;
        _managerUnlockTime = unlockTime;
        emit TK_MG_nifi_seal_1{dest: SwiftAddress.value()}(_id, _manager, _managerUnlockTime);
    }

    function unlock() public onlyLockedManager accept {
        _managerUnlockTime = 0;
    }

    function endrose(address stamp, uint8 place) public onlyOwner {
         require(msg.value>=ENDROSE_FEE, 111);
         tvm.accept();
         IStampToken(stamp).endrose(place,_owner);     
    }
    
}