pragma ton-solidity >=0.47.0; 

    library SealContractInfo {
        function SEAL_ROOT() internal inline returns(address){
            return address(0xe745e997698c3c0b239b1b888632f5a93d0ba4e53c8b03fb6840919864a21926);
        }
        uint256 constant SEAL_ROOT_PUBKEY = 0x36bb4eb1e1d5426412f0b390c91c54bf861177571d74e79e08fea47db6974cdb;
        uint256 constant SEAL_CODEHASH = 0x61fca91c459bd9c725b0ab0f53885d00cd344b0ef509c266d471a8e538abe754;
        uint16 constant  SEAL_CODEDEPTH = 8;
    }