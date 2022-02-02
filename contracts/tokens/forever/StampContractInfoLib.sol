pragma ton-solidity >=0.47.0;

library StampContractInfo {
    function STAMP_ROOT() internal inline returns(address){
        return address(0x953aaba17e8930ad29b1df0f682db6645f209208e4386d8bf94f0264e1555ac9);
    }
    uint256 constant STAMP_ROOT_PUBKEY = 0x038f8816b7fe64dff88fa9655c6ee29895e8ec00f222dfdb2de27fd74c44bc0e;
    uint256 constant STAMP_CODEHASH = 0xd3382a0bf5d7a65b50ef24a6bb3bd6a01d711544d3e8347a53334b4f3dfc2a2a;
    uint16 constant STAMP_CODEDEPTH = 8;
}
