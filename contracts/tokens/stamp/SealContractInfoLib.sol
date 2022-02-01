pragma ton-solidity >=0.47.0;

library SealContractInfo {
    function SEAL_ROOT() internal inline returns(address){
        return address(0x1d24d40b4987d0bec998fe7d6d24bd4e4baa87039be3376444e4409dc8f70e74);
    }
    uint256 constant SEAL_ROOT_PUBKEY = 0x5c4e2691bd84acca584c8ebd158f3f6f91df5d12f6c8771a01a30b1d1fc836a2;
    uint256 constant SEAL_CODEHASH = 0x86142001fc31780559b34c3e16b6595ccee9566c5280a498aab4c84aff8e8ac7;
    uint16 constant  SEAL_CODEDEPTH = 9;
}
