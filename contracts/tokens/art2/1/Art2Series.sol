pragma ton-solidity ^0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../libraries/SwiftAddress.sol";
import "Art2Token.sol";

contract Art2Series {

    address static _root;
    uint64 static _id;
    address _manager;
    address _creator;
    string _name;
    string _symbol;
    TvmCell _tokenCode;
    uint64 _totalSupply;
    uint64 _limit;
    uint256 _hash;
    uint32 _creatorPercentReward;
    uint128 _mintTopup;


    event TK_MT_nifi_art2_1(uint64 seriesId, uint64 id);

    modifier onlyRoot() {
        require(msg.sender == _root, 101, "Method for the root only");
        _;
    }

    /***************
     * CONSTRUCTOR *
     ***************/
    constructor(
        address manager,
        string  name,
        string  symbol,
        uint64 limit,
        TvmCell tokenCode,
        uint256 hash,
        uint32 creatorPercentReward,
        uint128 mintTopup
    )
        public onlyRoot
    {
        _creator = manager;
        _manager = manager;
        _name = name;
        _symbol = symbol;
        _tokenCode = tokenCode;
        _limit = limit;
        _hash = hash;
        _creatorPercentReward = creatorPercentReward;
        _mintTopup = mintTopup;
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
     * creatorPercentReward ......... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash ................ Hash of data that associated with token.
     */
    function create(
        address manager,
        uint32  managerUnlockTime
    )
        public
        internalMsg
        returns(
            address addr
        )
    {
        require(_totalSupply<_limit,103);
        require(msg.sender == _manager,102);
        require(msg.value >= 0.25 ton,105);
        _totalSupply++;

        addr = new Art2Token{
            code: _tokenCode,
            value: _mintTopup,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: _root,
                _series: address(this),
                _seriesId: _id,
                _id: _totalSupply
            }
        }(_manager, manager, managerUnlockTime, _creator, _creatorPercentReward, _hash);
        emit TK_MT_nifi_art2_1{dest: SwiftAddress.value()}(_id,_totalSupply);

    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Receive the address of the token contract calculated by id.
     * id ..... Id of token.
     * addr ... Address of the token contract.
     */
    function receiveTokenAddress(uint64 id) external view responsible returns(address addr) {
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
    function getTokenAddress(uint64 id) public view returns(address addr) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: Art2Token,
            varInit: {
                _root: _root,
                _series: address(this),
                _seriesId: _id,
                _id: id
            },
            pubkey: tvm.pubkey(),
            code: _tokenCode
        });
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

    function getInfo() public view returns(uint64 id, string  name, string  symbol, uint64 totalSupply, uint64 limit, uint256 hash, address creator, uint32 creatorPercentReward){
        id = _id;
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply;
        limit = _limit;
        hash = _hash;
        creator = _creator;
        creatorPercentReward = _creatorPercentReward;
    }

    function withdraw(address addr, uint128 value, bool bounce) public view {
        require(msg.sender == _manager,102);
        tvm.accept();
        addr.transfer(value, bounce);
    }

}