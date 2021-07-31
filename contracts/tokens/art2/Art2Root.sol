pragma ton-solidity ^0.47.0;

import "Art2Token.sol";
import "Art2Series.sol";

contract Art2Root {

    address _manager;    
    uint128 _creationFee;
    uint128 _creationMinValue;
    string _name;
    string _symbol;
    TvmCell _tokenCode;
    TvmCell _seriesCode;
    uint128 _totalSupply;

    event newSerie(uint128 id, address serie);

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
        TvmCell seriesCode,
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

    function createSerie(address manager, uint128 limit, uint256 hash, uint32 creatorFees) public validCreatorFees(creatorFees) internalMsg returns(address addr){
        uint128 value = msg.value - _creationFee;
        _totalSupply++;
        addr = new Art2Series{
            code: _seriesCode,
            value: value,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }(manager, _name, _symbol, limit, _tokenCode, hash, creatorFees);
        emit newSerie(_totalSupply, addr);
        
    }
        

   
    function getSeriesAddress(uint128 id) public view returns(address addr) {
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

    function getTokenAddress(uint128 serie, uint128 token) public view returns(address addr) {
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
                _root: address(tvm.hash(stateInit)),
                _id: token
            },
            pubkey: tvm.pubkey(),
            code: _tokenCode
        });
        return address(tvm.hash(stateInit1));
    }
}