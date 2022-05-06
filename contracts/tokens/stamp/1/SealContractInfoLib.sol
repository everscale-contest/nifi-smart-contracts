pragma ton-solidity >=0.47.0; 

    library SealContractInfo {
        function SEAL_ROOT() internal inline returns(address){
            return address(0x0a7ea183d0def01079ea6ca4ac3d15ec6dee99fa3f12f49d82c80b899473a86d);
        }
        uint256 constant SEAL_ROOT_PUBKEY = 0xffaa2ac04ba946072fa5a0d08b267650671c214acf1ce819f22d451302191212;
        uint256 constant SEAL_CODEHASH = 0x2cd547ec15da50d95f462784f38abdb103d40d8581219398a8ea0aac33e4f8e3;
        uint16 constant  SEAL_CODEDEPTH = 8;
    }