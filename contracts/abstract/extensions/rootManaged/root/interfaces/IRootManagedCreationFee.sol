pragma ton-solidity ^0.47.0;

interface IRootManagedCreationFee {
    /***************************
     * EXTERNAL * ONLY MANAGER *
     ***************************/
    /**
     * Manager can change values, which are needed to create a token.
     * minCreationFee ... The minimum value that needs to be sent to the root to create a token.
     * fee ........ Payment for the work of the contract, plus money for the developers.
     */
    function setCreationParameters(uint128 minCreationFee, uint128 fee) external;


    /*************
     * RECEIVERS *
     *************/
    /**
     * Returns values, which are needed to create a token.
     * minCreationFee ... The minimum value that needs to be sent to the root to create a token.
     * fee ........ Payment for the work of the contract, plus money for the developers.
     */
    function receiveCreationFee() external view responsible returns(uint128 minCreationFee, uint128 fee);
}