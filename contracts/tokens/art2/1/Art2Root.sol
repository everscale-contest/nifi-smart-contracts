pragma ton-solidity ^0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../libraries/SwiftAddress.sol";
import "Art2Token.sol";
import "Art2Series.sol";

contract Art2Root  {

    address _manager;
    uint128 _creationFixIncome;
    uint128 _minCreationFee;
    uint128 _creationTopup;
    uint128 _mintTopup;
    string _name;
    string _symbol;
    TvmCell _tokenCode;
    TvmCell _seriesCode;
    uint64 _totalSupply;

    event SR_CT_nifi_art2_1(uint64 id);

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
        uint128 creationTopup,
        string  name,
        string  symbol,
        TvmCell seriesCode,
        TvmCell tokenCode
    )
        public
    {
        require(msg.pubkey() == tvm.pubkey(),101);
        tvm.accept();
        _manager = manager;
        _minCreationFee = minCreationFee;
        _creationFixIncome = creationFixIncome;
        _creationTopup = creationTopup;
        _name = name;
        _symbol = symbol;
        _seriesCode = seriesCode;
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

    function createSerie(address manager, uint64 limit, uint256 hash, uint32 creatorPercentReward) public validCreatorFees(creatorPercentReward) internalMsg returns(address addr){
        require(msg.value >= _minCreationFee,278);

        _totalSupply++;
        addr = new Art2Series{
            code: _seriesCode,
            value: _creationTopup,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }(manager, _name, _symbol, limit, _tokenCode, hash, creatorPercentReward, _mintTopup);
        emit SR_CT_nifi_art2_1{dest: SwiftAddress.value()}(_totalSupply);

    }



    function getSeriesAddress(uint64 id) public view returns(address addr) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: Art2Series,
            varInit: {
                _root: address(this),
                _id: id
            },
            pubkey: tvm.pubkey(),
            code: _seriesCode
        });
        return address(tvm.hash(stateInit));
    }

    function getTokenAddress(uint64 serie, uint64 token) public view returns(address addr) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: Art2Series,
            varInit: {
                _root: address(this),
                _id: serie
            },
            pubkey: tvm.pubkey(),
            code: _seriesCode
        });

        TvmCell stateInit1 = tvm.buildStateInit({
            contr: Art2Token,
            varInit: {
                _root: address(this),
                _series: address(tvm.hash(stateInit)),
                _seriesId: serie,
                _id: token
            },
            pubkey: tvm.pubkey(),
            code: _tokenCode
        });

        return address(tvm.hash(stateInit1));
    }

    function setCreationParameters(
        uint128 minCreationFee,
        uint128 creationFixIncome,
        uint128 creationTopup,
        uint128 mintTopup
    ) public {
        require(msg.sender == _manager,102);
        tvm.accept();
        _minCreationFee = minCreationFee;
        _creationFixIncome = creationFixIncome;
        _creationTopup = creationTopup;
        _mintTopup = mintTopup;
    }

    function getCreationParameters() public returns(
        uint128 minCreationFee,
        uint128 creationFixIncome,
        uint128 creationTopup,
        uint128 mintTopup
    ) {
        minCreationFee = _minCreationFee;
        creationFixIncome = _creationFixIncome;
        creationTopup = _creationTopup;
        mintTopup = _mintTopup;
    }
}