pragma ton-solidity >=0.47.0;

library StampContractInfo {
    function STAMP_ROOT() internal inline returns(address){
        return address(0x3f82435f2bd40915c28f56d3c2f07af4108931ae8bf1ca9403dcf77d96250827);
    }
    uint256 constant STAMP_ROOT_PUBKEY = 0x3f82435f2bd40915c28f56d3c2f07af4108931ae8bf1ca9403dcf77d96250827;
    uint256 constant STAMP_CODEHASH = 0x0;
    uint16 constant STAMP_CODEDEPTH = 2;
}
