pragma ton-solidity >=0.47.0; 

    library SealContractInfo {
        function SEAL_ROOT() internal inline returns(address){
            return address(0xcf3aecc1b12d5600212a56884cc3e52b220083756b18c6f5eba94cd66d5257f2);
        }
        uint256 constant SEAL_ROOT_PUBKEY = 0xcafa85aa99a9fbd507567102a09adb57e1758fd352dfc8c77b1f9e035144a0c5;
        uint256 constant SEAL_CODEHASH = 0x61fca91c459bd9c725b0ab0f53885d00cd344b0ef509c266d471a8e538abe754;
        uint16 constant  SEAL_CODEDEPTH = 8;
    }