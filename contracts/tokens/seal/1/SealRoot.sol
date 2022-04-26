pragma ton-solidity >=0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../libraries/SwiftAddress.sol";
import "SealToken.sol";

contract SealRoot  {

    address _manager;
    uint128 _creationFee;
    uint128 _creationMinValue;
    string _name;
    string _symbol;
    TvmCell _tokenCode;
    uint64 _totalSupply;
    uint128 _feeEndroseStamp;
    uint128 _feeEndroseRoot;

    event TK_CT_nifi_seal_1(uint64 id);

    modifier validCreatorFees(uint32 fees) {
        require(fees < 2401, 277);
        _;
    }

    /***************
     * CONSTRUCTOR *
     ***************/
    constructor(
        address manager,
        uint128 creationMinValue,
        uint128 creationFee,
        string  name,
        string  symbol,
        TvmCell tokenCode
    )
        public
    {
        require(msg.pubkey() == tvm.pubkey(),101);
        tvm.accept();
        _manager = manager;
        _creationMinValue = creationMinValue;
        _creationFee = creationFee;
        _name = name;
        _symbol = symbol;
        _tokenCode = tokenCode;
        _feeEndroseStamp = 0.1 ever;
        _feeEndroseRoot = 0.1 ever;
    }

    function getManager() public view returns(address){
        return _manager;
    }

    function changeManager(address newManager) public {
        require(msg.sender == _manager,102);
        tvm.accept();
        _manager = newManager;
    }

    function getInfo() public view returns(string  name, string  symbol, uint128 totalSupply){
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply;
    }

    function withdraw(address addr, uint128 value, bool bounce) public view {
        require(msg.sender == _manager,102);
        tvm.accept();
        addr.transfer(value, bounce);
    }

    function create(
        address owner,
        address manager,
        uint32  managerUnlockTime,
        address creator,
        uint32  creatorFees,
        uint256 hash
    )
        public
        validCreatorFees(creatorFees)
        returns(
            address addr
        )
    {
        require(msg.value >= _creationMinValue,278);
        uint128 value = msg.value - _creationFee;
        _totalSupply++;
        addr = new SealToken{
            code: _tokenCode,
            value: value,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }(owner, manager, managerUnlockTime, creator, creatorFees, hash, _feeEndroseStamp, _feeEndroseRoot);
        emit TK_CT_nifi_seal_1{dest: SwiftAddress.value()}(_totalSupply);
        //_totalSupply++;
    }


    function getTokenAddress(uint64 id) public view returns(address addr) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: SealToken,
            varInit: {
                _root: address(this),
                _id: id
            },
            pubkey: tvm.pubkey(),
            code: _tokenCode
        });
        return address(tvm.hash(stateInit));
    }

    function setCreationFee(uint128 minValue, uint128 fee) public {
        require(msg.sender == _manager,102);
        tvm.accept();
        _creationMinValue = minValue;
        _creationFee = fee;
    }

    function getCreationFee() public returns(uint128 minValue, uint128 fee) {
        minValue = _creationMinValue;
        fee = _creationFee;
    }

    function setSealFee(uint128 feeEndroseStamp, uint128 feeEndroseRoot) public {
        require(msg.sender == _manager,102);
        tvm.accept();
        _feeEndroseStamp = feeEndroseStamp;
        _feeEndroseRoot = feeEndroseRoot;
    }
}