pragma ton-solidity >=0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../libraries/SwiftAddress.sol";
import "ForeverToken.sol";

contract ForeverRoot  {

    address _manager;
    uint128 _creationFixIncome;
    uint128 _minCreationFee;
    string _name;
    string _symbol;
    TvmCell _tokenCode;
    uint64 _totalSupply;

    uint128 _delForeverCost;

    event TK_CT_nifi_for1_1(uint64 id);

    modifier validCreatorFees(uint32 fees) {
        require(fees < 2401, 277);
        _;
    }

    /***************
     * CONSTRUCTOR *
     ***************/
    constructor(
        address manager,
        uint128 minCreationFee,
        uint128 creationFixIncome,
        string  name,
        string  symbol,
        TvmCell tokenCode
    )
        public
    {
        require(msg.pubkey() == tvm.pubkey(),101);
        tvm.accept();
        _manager = manager;
        _minCreationFee = minCreationFee;
        _creationFixIncome = creationFixIncome;
        _name = name;
        _symbol = symbol;
        _tokenCode = tokenCode;
        _delForeverCost = 0.1 ever;
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
        uint32  creatorPercentReward,
        uint256 hash
    )
        public
        validCreatorFees(creatorPercentReward)
        returns(
            address addr
        )
    {
        require(msg.value >= _minCreationFee,278);
        uint128 value = msg.value - _creationFixIncome;
        _totalSupply++;
        addr = new ForeverToken{
            code: _tokenCode,
            value: value,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }(owner, manager, managerUnlockTime, creator, creatorPercentReward, hash, _delForeverCost);
        emit TK_CT_nifi_for1_1{dest: SwiftAddress.value()}(_totalSupply);
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

    function setCreationParameters(uint128 minCreationFee, uint128 creationFixIncome) public {
        require(msg.sender == _manager,102);
        tvm.accept();
        _minCreationFee = minCreationFee;
        _creationFixIncome = creationFixIncome;
    }

    function getCreationParameters() public returns(uint128 minCreationFee, uint128 creationFixIncome) {
        minCreationFee = _minCreationFee;
        creationFixIncome = _creationFixIncome;
    }


    function setForeverParameters(uint128 delForeverCost) public {
        require(msg.sender == _manager,102);
        tvm.accept();
        _delForeverCost = delForeverCost;
    }

    function getForeverParameters() public view returns(uint128 delForeverCost) {
        delForeverCost = _delForeverCost;
    }
}