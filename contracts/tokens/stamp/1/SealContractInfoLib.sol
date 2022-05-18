pragma ton-solidity >=0.47.0; 

    library SealContractInfo {
        function SEAL_ROOT() internal inline returns(address){
            return address(0x56715072b21a06500f7d988c4ec19a0fb7b241530642e6b54ca6d8987bc43d9a);
        }
        uint256 constant SEAL_ROOT_PUBKEY = 0x55962e2e4919c254145e11f1ca2cdfc1302f74c0c719bb6355de26f4a5dd5276;
        uint256 constant SEAL_CODEHASH = 0x61fca91c459bd9c725b0ab0f53885d00cd344b0ef509c266d471a8e538abe754;
        uint16 constant  SEAL_CODEDEPTH = 8;
    }