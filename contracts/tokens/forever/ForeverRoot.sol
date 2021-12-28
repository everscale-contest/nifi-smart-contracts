pragma ton-solidity >=0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../libraries/SwiftAddress.sol";
import "ForeverToken.sol";

contract ForeverRoot  {

    address _manager;
    uint128 _creationFee;
    uint128 _creationMinValue;
    string _name;
    string _symbol;
    TvmCell _tokenCode;
    uint64 _totalSupply;

    event FOR_CT_nifi_for1_1(uint64 id);

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
        addr = new ForeverToken{
            code: _tokenCode,
            value: value,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }(owner, manager, managerUnlockTime, creator, creatorFees, hash);
        emit FOR_CT_nifi_for1_1{dest: SwiftAddress.value()}(_totalSupply);
        //_totalSupply++;
    }


    function getTokenAddress(uint64 id) public view returns(address addr) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: ForeverToken,
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