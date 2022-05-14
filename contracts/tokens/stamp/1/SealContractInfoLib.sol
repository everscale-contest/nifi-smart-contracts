pragma ton-solidity >=0.47.0; 

    library SealContractInfo {
        function SEAL_ROOT() internal inline returns(address){
            return address(0x866c728cfff2e57dfdaff1cd99d93b2a8fa8191271506aa69e5594232ce8f7ad);
        }
        uint256 constant SEAL_ROOT_PUBKEY = 0x7a2b7c7069d37fcce69a97e48e0f75badee3cf4612ac9ae3b5f4ddfe54d097a7;
        uint256 constant SEAL_CODEHASH = 0x61fca91c459bd9c725b0ab0f53885d00cd344b0ef509c266d471a8e538abe754;
        uint16 constant  SEAL_CODEDEPTH = 8;
    }