pragma ton-solidity >= 0.47.0;

import "./RootManaged.sol";

/**
 * Error codes
 *     1100 - Need more money
 */
abstract contract RootManagedCreationTradeFee is RootManaged {
    /*************
     * VARIABLES *
     *************/

    uint128 internal _minCreationFee;
    uint128 internal _creationFixIncome;

    /*************
     * MODIFIERS *
     *************/
    modifier creationPaymentIsEnough() {
        require(msg.value >= _minCreationFee, 1100, "Need more money");
        _;
    }



    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * minCreationFee ... The minimum value that needs to be sent to the root to create a token.
     * creationFixIncome ........ Payment for the work of the contract, plus money for the developers.
     */
    constructor(
        uint128 minCreationFee,
        uint128 creationFixIncome
    ) public accept {
        _minCreationFee = minCreationFee;
        _creationFixIncome = creationFixIncome;
    }



    /***************************
     * EXTERNAL * ONLY MANAGER *
     ***************************/
    /**
     * Manager can change values, which are needed to create a token.
     * Be careful to set the correct values, otherwise the contract will not work.
     * minCreationFee ... The minimum value that needs to be sent to the root to create a token.
     * creationFixIncome ........ Payment for the work of the contract, plus money for the developers.
     */
    function setCreationParameters(
        uint128 minCreationFee,
        uint128 creationFixIncome
    ) external onlyManager accept {
        _minCreationFee = minCreationFee;
        _creationFixIncome = creationFixIncome;
    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Returns values, which are needed to create a token.
     * minCreationFee ... The minimum value that needs to be sent to the root to create a token.
     * creationFixIncome ........ Payment for the work of the contract, plus money for the developers.
     */
    function receiveCreationParameters() external view responsible returns(
        uint128 minCreationFee,
        uint128 creationFixIncome
    ) {
        return{value: 0, bounce: false, flag: 64} getCreationParameters();
    }



    /***********
     * GETTERS *
     ***********/
    /**
     * Returns values, which are needed to create a token.
     * minCreationFee ... The minimum value that needs to be sent to the root to create a token.
     * creationFixIncome ........ Payment for the work of the contract, plus money for the developers.
     */
    function getCreationParameters() public view returns(
        uint128 minCreationFee,
        uint128 creationFixIncome
    ) {
        minCreationFee = _minCreationFee;
        creationFixIncome = _creationFixIncome;
    }
}