pragma ton-solidity ^0.47.0;

import "../../../TokenAddress2.sol";

abstract contract TokenChangeOwnerAddressEvent2 is TokenAddress2 {
    /**********
     * EVENTS *
     **********/
    event ChangeOwnerEvent(
        uint128 id,
        address previousOwner,
        address owner
    );

    /**
     * Call after change of address of token owner.
     */
    function _onChangeOwner(address previousOwner, address owner) override internal {
        emit ChangeOwnerEvent(_id, previousOwner, owner);
    }
}