pragma ton-solidity >=0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../libraries/NotificationAddress.sol";
import "CollectionToken.sol";

contract Collection {

    uint128 constant GAS = 0.1 ton;
    uint128 constant TOKEN_MINT_GAS = 0.2 ton;

    address static _root;
    uint64 static _id;
    address _creator;
    address _manager;//sdk msig
    string _name;
    string _symbol;
    TvmCell _tokenCode;
    uint32 _totalSupply;
    uint32 _ready2Mint;
    uint64 _limit;
    uint32 _creatorFees;
    uint128 _mintCost;

    string[] _level1;
    string[] _level2;
    string[] _level3;
    string[] _level4;
    string[] _level5;

    string _hash;

    event TK_MT_nifi_col1_1(uint64 collectionId, uint32 index, uint8 id1, uint8 id2, uint8 id3, uint8 id4, uint8 id5);
    event SRC_PY_nifi_col1_1(uint64 collectionId, uint32 futureId, uint128 value, address owner);

    modifier onlyRoot() {
        require(msg.sender == _root, 101, "Method for the root only");
        _;
    }

    modifier onlyManager() {
        require(msg.sender == _manager, 102, "Method for the manager only");
        _;
    }

    /***************
     * CONSTRUCTOR *
     ***************/
    constructor(
        address creator,
        address manager,
        string  name,
        string  symbol,
        uint64 limit,
        TvmCell tokenCode,
        uint32 creatorFees,
        uint128 mintCost,
        string[] level1,
        string[] level2,
        string[] level3,
        string[] level4,
        string[] level5,
        string hash
    )
        public onlyRoot
    {
        _creator = creator;
        _manager = manager;
        _name = name;
        _symbol = symbol;
        _tokenCode = tokenCode;
        _limit = limit;
        _creatorFees = creatorFees;
        _mintCost = mintCost;
        _level1 = level1;
        _level2 = level2;
        _level3 = level3;
        _level4 = level4;
        _level5 = level5;
        _hash = hash;
    }



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
     * creatorFees ......... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash ................ Hash of data that associated with token.
     */
    function mint(
        uint32 mintId,
        address owner,
        uint8 id1,
        uint8 id2,
        uint8 id3,
        uint8 id4,
        uint8 id5
    )
        public
    {

        require(_totalSupply<_limit,103);
        require(msg.sender == _manager,102);
        require(msg.value >= _mintCost,105);
        require(_totalSupply+1==mintId,106);
        _totalSupply++;
        //uint128 value = msg.value;
        /*TvmCell stateInit = tvm.buildStateInit({
            code: _tokenCode,
            contr: CollectionToken,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: _root,
                _collection: address(this),
                _collectionId: _id,
                _id1: id1,
                _id2: id2,
                _id3: id3,
                _id4: id4,
                _id5: id5
        }});*/

     new CollectionToken{
            code: _tokenCode,
            value: TOKEN_MINT_GAS,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: _root,
                _collection: address(this),
                _collectionId: _id,
                _id1: id1,
                _id2: id2,
                _id3: id3,
                _id4: id4,
                _id5: id5
            }
        }(owner,_creator,_creatorFees, mintId);
        //address addr = address(tvm.hash(stateInit));
        uint128 half = (msg.value-GAS-TOKEN_MINT_GAS)/2;
        _creator.transfer({value: half, bounce: true, flag: 0});
        _root.transfer({value: half, bounce: true, flag: 0});
        emit TK_MT_nifi_col1_1{dest: NotificationAddress.value()}(_id,_totalSupply,id1,id2,id3,id4,id5);

    }


    function mintToken() public {
        require(msg.value >= _mintCost,105);
        _manager.transfer(msg.value, false);
        _ready2Mint++;
        emit SRC_PY_nifi_col1_1{dest: NotificationAddress.value()}(_id, _ready2Mint, msg.value, msg.sender);
    }

    /***********
     * GETTERS *
     ***********/
    function getTokenAddress(uint8 id1, uint8 id2, uint8 id3, uint8 id4, uint8 id5) public view returns(address addr) {
        TvmCell stateInit = tvm.buildStateInit({
            code: _tokenCode,
            contr: CollectionToken,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: _root,
                _collection: address(this),
                _collectionId: _id,
                _id1: id1,
                _id2: id2,
                _id3: id3,
                _id4: id4,
                _id5: id5
        }});
        return address(tvm.hash(stateInit));
    }

    function getManager() public view returns(address){
        return _manager;
    }

    function changeManager(address newManager) public {
        require(msg.sender == _manager,102);
        tvm.accept();
        _manager = newManager;
    }

    function getInfo() public view returns(uint64 id, string  name, string  symbol, uint64 totalSupply, uint64 limit, address creator, uint32 creatorFees, string hash){
        id = _id;
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply;
        limit = _limit;
        creator = _creator;
        creatorFees = _creatorFees;
        hash = _hash;
    }

    function getLevels() public view returns(string[] level1,string[] level2,string[] level3,string[] level4,string[] level5) {
        level1 = _level1;
        level2 = _level2;
        level3 = _level3;
        level4 = _level4;
        level5 = _level5;
    }

    function withdraw(address addr, uint128 value, bool bounce) public view {
        require(msg.sender == _manager,102);
        tvm.accept();
        addr.transfer(value, bounce);
    }

}
