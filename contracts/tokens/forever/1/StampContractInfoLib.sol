pragma ton-solidity >=0.47.0; 

    library StampContractInfo {
        function STAMP_ROOT() internal inline returns(address){
            return address(0xc98e477a059af5aeaa544850df555a150ea3b47e51cf800d48ad9604babd7546);
        }
        uint256 constant STAMP_ROOT_PUBKEY = 0x2d3b461017ff29ed30af561444660cbc37f5cb19df25a9910a63d8325200e717;
        uint256 constant STAMP_CODEHASH = 0x71160ca59ae11697b65b309424346a3c080f36bcfa1370c9a8586966a1905541;
        uint16 constant  STAMP_CODEDEPTH = 9;
    }