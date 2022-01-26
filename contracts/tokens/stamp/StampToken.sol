pragma ton-solidity >=0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../libraries/SwiftAddress.sol";
import "IStampToken.sol";
import "../forever/IForeverToken.sol";

contract StampToken is IStampToken {

    uint8 constant CORNER_SW = 1;
    uint8 constant CORNER_SE = 2;
    uint8 constant CORNER_NW = 4;
    uint8 constant CORNER_NE = 8;

    uint128 constant SEAL_FEE = 0.05 ever;
    uint128 constant ROOT_FEE = 0.1 ever;


    event TK_CO_nifi_stamp1_1(uint64 id, address newOwner);
    event TK_MG_nifi_stamp1_1(uint64 id, address newManager, uint32 expirationTime);
    event TK_RQ_nifi_stamp1_1(uint64 id, address seal, uint8 sealPlaces, uint64 value);
    event TK_RX_nifi_stamp1_1(uint64 id);
    event TK_EN_nifi_stamp1_1(uint64 id, address seal, uint8 corner);
    event TK_FE_nifi_stamp1_1(uint64 id, address forever);
    event TK_FD_nifi_stamp1_1(uint64 id, address forever);

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

    uint8 _sealPlace;

    optional(address) _seal;
    uint128 _sealValue;
    uint8 _sealPosiblePlaces;

    optional(address) _forever;



    modifier onlyRoot() {
        require(msg.sender == _root, 101, "Method for the root only");
        _;
    }

    modifier onlyManager {
        require(!_forever.hasValue() && msg.sender == _manager, 102, "Method for the manager only");
        _;
    }

    modifier onlyLockedManager{
        require(!_forever.hasValue() && msg.sender == _manager && now < _managerUnlockTime, 103, "Method for locked manager only");
        _;
    }

    modifier onlyUnlockedOwnerOrLockedManager {
        require(!_forever.hasValue()&&(msg.sender == _owner && now >= _managerUnlockTime) ||
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
        require(!_forever.hasValue() && (msg.sender == _owner && now >= _managerUnlockTime) , 108, "Method for owner only");
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
        emit TK_CO_nifi_stamp1_1{dest: SwiftAddress.value()}(_id, _owner);
    }

    function receiveArtInfo() public view responsible returns(address creator, uint32  creatorFees, uint256 hash) {
        return{value: 0, bounce: false, flag: 64} getArtInfo();
    }

    function getArtInfo() public view returns(address creator, uint32  creatorFees, uint256 hash) {
        creator = _creator;
        creatorFees = _creatorFees;
        hash = _hash;
    }

    function getSeal() public view returns (optional(address) seal, uint8 corner) {
        seal = _seal;
        corner = _sealPlace;
    }

    function getForever() public view returns (optional(address) forever) {
        forever = _forever;
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
        emit TK_MG_nifi_stamp1_1{dest: SwiftAddress.value()}(_id, _manager, _managerUnlockTime);
    }

    function unlock() public onlyLockedManager accept {
        _managerUnlockTime = 0;
    }

    function requestEndorse(address seal, uint8 places, uint128 price) public onlyOwner {
        require(msg.value>=SEAL_FEE+ROOT_FEE+price, 109);
        require(_sealPlace == 0, 110);
        _seal.set(seal);
        _sealValue = price;
        _sealPosiblePlaces = places;
        _root.transfer({value: ROOT_FEE, flag: 1, bounce: true});
        emit TK_RQ_nifi_stamp1_1{dest: SwiftAddress.value()}(_id, _seal.get(), places, uint64(_sealValue));
    }

    function cancelEndrose() public  onlyOwner {
        require(_sealPlace == 0, 110);
        tvm.accept();
        _seal.reset();
        _owner.transfer(_sealValue,true);
        emit TK_RX_nifi_stamp1_1{dest: SwiftAddress.value()}(_id);
    }

    function endrose(uint8 place, address receiver) public override {
         require(_seal.hasValue() && msg.sender==_seal.get(), 111);
         require((place&_sealPosiblePlaces)!=0,113);
         require(place==CORNER_SW || place==CORNER_SE || place==CORNER_NW || place==CORNER_NE, 112 );
         tvm.accept();
         _sealPlace = place;
         receiver.transfer(_sealValue,true);
         emit TK_EN_nifi_stamp1_1{dest: SwiftAddress.value()}(_id,_seal.get(),_sealPlace);
    }

    function setForever(address forever) public onlyOwner accept {
        //todo check value
        require(!_forever.hasValue(),115);
        require(_seal.hasValue(),114);
        _forever.set(forever);
        IForeverToken(forever).addStamp{value: 0, flag: 64}(_owner,_seal.get(),_sealPlace);
        emit TK_FE_nifi_stamp1_1{dest: SwiftAddress.value()}(_id,forever);
    }

    function delForever() public override {
        require(_forever.hasValue() && (msg.sender == _forever.get()) , 118);
        _forever.reset();
        emit TK_FD_nifi_stamp1_1{dest: SwiftAddress.value()}(_id,msg.sender);
    }

}