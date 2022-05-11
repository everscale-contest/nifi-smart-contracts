pragma ton-solidity >=0.47.0; 

    library StampContractInfo {
        function STAMP_ROOT() internal inline returns(address){
            return address(0xafcf7ede9e8c005b09767f5b48cbc3c62771d19eb223261ec0a09167ac62d5b5);
        }
        uint256 constant STAMP_ROOT_PUBKEY = 0x7a2b7c7069d37fcce69a97e48e0f75badee3cf4612ac9ae3b5f4ddfe54d097a7;
        uint256 constant STAMP_CODEHASH = 0x1bbcab266e740d4dc25a77e976f2c72263a1d47a552733f54c2b3abda439ac38;
        uint16 constant  STAMP_CODEDEPTH = 9;
    }