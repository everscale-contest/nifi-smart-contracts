pragma ton-solidity >=0.47.0;

library SealContractInfo {
    function SEAL_ROOT() internal inline returns(address){
        return address(0x751152fdc202784b31101de031656d2e6ee396b8a067cfba97f167b87ace0777);
    }
    uint256 constant SEAL_ROOT_PUBKEY = 0x5c4e2691bd84acca584c8ebd158f3f6f91df5d12f6c8771a01a30b1d1fc836a2;
    uint256 constant SEAL_CODEHASH = 0x2d8cbe8aca40e5fa19a4dbeb7d8f869e831982198a7409eafd4cbeceb42187e9;
    uint16 constant  SEAL_CODEDEPTH = 8;
}
