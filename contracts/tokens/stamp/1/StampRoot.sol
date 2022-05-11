pragma ton-solidity >=0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../libraries/SwiftAddress.sol";
import "StampToken.sol";

contract StampRoot  {

    address _manager;
    uint128 _creationTopup;
    uint128 _minCreationFee;
    string _name;
    string _symbol;
    TvmCell _tokenCode;
    uint64 _totalSupply;

    uint128 _minSealFee;
    uint128 _minSealRxFee;
    uint128 _requestEndorseFixIncome;
    uint128 _minForAddFee;
    uint128 _forAddFixIncome;
    uint16 _endorsePercentFee;

    event TK_CT_nifi_stamp1_1(uint64 id);

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
        uint128 creationTopup,
        string  name,
        string  symbol,
        TvmCell tokenCode
    )
        public
    {
        require(msg.pubkey() == tvm.pubkey(),101);
        tvm.accept();
        _manager = manager;
        _name = name;
        _symbol = symbol;
        _tokenCode = tokenCode;

        _minSealFee = 0.05 ever;
        _minSealRxFee = 0.11 ever;
        _requestEndorseFixIncome = 0.1 ever;
        _minForAddFee = 0.21 ever;
        _forAddFixIncome = 0.1 ever;
        _endorsePercentFee = 500; // 5%
        //require (_minCreationFee>_creationTopup)
        _minCreationFee = minCreationFee;
        _creationTopup = creationTopup;
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

        _totalSupply++;

        addr = new StampToken{
            code: _tokenCode,
            value: _creationTopup,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }(owner, manager, managerUnlockTime, creator, creatorPercentReward, hash,_minSealFee,_minSealRxFee,_requestEndorseFixIncome,_minForAddFee,_forAddFixIncome,_endorsePercentFee);

        emit TK_CT_nifi_stamp1_1{dest: SwiftAddress.value()}(_totalSupply);
    }


    function getTokenAddress(uint64 id) public view returns(address addr) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: StampToken,
            varInit: {
                _root: address(this),
                _id: id
            },
            pubkey: tvm.pubkey(),
            code: _tokenCode
        });
        return address(tvm.hash(stateInit));
    }

    function setCreationParameters(
        uint128 minCreationFee,
        uint128 creationTopup
    ) public {
        require(msg.sender == _manager,102);
        require(minCreationFee > creationTopup,103);
        tvm.accept();
        _minCreationFee = minCreationFee;
        _creationTopup = creationTopup;
    }

    function getCreationParameters() public returns(
        uint128 minCreationFee,
        uint128 creationTopup
    ) {
        minCreationFee = _minCreationFee;
        creationTopup = _creationTopup;
    }

    function setStampParameters(uint128 minSealFee, uint128 minSealRxFee, uint128 requestEndorseFixIncome, uint128 minForAddFee, uint128 forAddFixIncome, uint16 endorsePercentIncome) public {
        require(msg.sender == _manager,102);
        require(endorsePercentIncome <= 10000,103);
        tvm.accept();
        _minSealFee = minSealFee;
        _minSealRxFee = minSealRxFee;
        _requestEndorseFixIncome = requestEndorseFixIncome;
        _minForAddFee = minForAddFee;
        _forAddFixIncome = forAddFixIncome;
        _endorsePercentFee = endorsePercentIncome;
    }

    function getStampParameters() public returns(uint128 minSealFee, uint128 minSealRxFee, uint128 requestEndorseFixIncome, uint128 minForAddFee, uint128 forAddFixIncome, uint16 endorsePercentIncome) {
        minSealFee = _minSealFee;
        minSealRxFee = _minSealRxFee;
        requestEndorseFixIncome = _requestEndorseFixIncome;
        minForAddFee = _minForAddFee;
        forAddFixIncome = _forAddFixIncome;
        endorsePercentIncome = _endorsePercentFee;
    }
}