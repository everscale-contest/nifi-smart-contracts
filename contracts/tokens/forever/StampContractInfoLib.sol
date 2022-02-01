pragma ton-solidity >=0.47.0;

library StampContractInfo {
    function STAMP_ROOT() internal inline returns(address){
        return address(0x9ef174dfff1003c09e48e2c597fe769d3891b71dd3e956137167ced22842ae47);
    }
    uint256 constant STAMP_ROOT_PUBKEY = 0x038f8816b7fe64dff88fa9655c6ee29895e8ec00f222dfdb2de27fd74c44bc0e;
    uint256 constant STAMP_CODEHASH = 0xd336e8a2d7acabaa21c365179cc5f346012b5357f85a2851410bd4023bdff723;
    uint16 constant STAMP_CODEDEPTH = 9;
}
