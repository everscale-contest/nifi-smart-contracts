pragma ton-solidity ^0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../libraries/SwiftAddress.sol";
import "Art2Token.sol";

contract Art2Series {
    
    address static _root;
    uint128 static _id;
    address _manager;
    address _creator;
    string _name;
    string _symbol;
    TvmCell _tokenCode;
    uint128 _totalSupply;
    uint128 _limit;
    uint256 _hash;
    uint32 _creatorFees;


    event TK_MT_nifi_art2_1(uint128 seriesId, uint128 id);

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
        uint128 limit,
        TvmCell tokenCode,
        uint256 hash,
        uint32 creatorFees
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
        _creatorFees = creatorFees;
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
        require(msg.value > 0.2 ton,105);
        _totalSupply++;
        uint128 value = msg.value;
        addr = new Art2Token{
            code: _tokenCode,
            value: value,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: _root,
                _serie: address(this),
                _id: _totalSupply
            }
        }(_manager, manager, managerUnlockTime, _creator, _creatorFees, _hash);
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
    function receiveTokenAddress(uint128 id) external view responsible returns(address addr) {
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
    function getTokenAddress(uint128 id) public view returns(address addr) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: Art2Token,
            varInit: {
                _root: _root,
                _serie: address(this),
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

    function getInfo() public view returns(uint128 id, string  name, string  symbol, uint128 totalSupply, uint128 limit, uint256 hash, address creator, uint32 creatorFees){
        id = _id;
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply;
        limit = _limit;
        hash = _hash;
        creator = _creator;
        creatorFees = _creatorFees;
    }

    function withdraw(address addr, uint128 value, bool bounce) public view {
        require(msg.sender == _manager,102);
        tvm.accept();
        addr.transfer(value, bounce);
    }

}