pragma ton-solidity >=0.47.0; 

    library SealContractInfo {
        function SEAL_ROOT() internal inline returns(address){
            return address(0x8e99ccd929a37df6dc3e5d2ea4ac6176a2beaac91b03bf7c119cc7e66898da59);
        }
        uint256 constant SEAL_ROOT_PUBKEY = 0xade24dd697b9029fce302598258cff6a0d54bf36061bb5b706ab5c6c537e9512;
        uint256 constant SEAL_CODEHASH = 0x2cd547ec15da50d95f462784f38abdb103d40d8581219398a8ea0aac33e4f8e3;
        uint16 constant  SEAL_CODEDEPTH = 8;
    }