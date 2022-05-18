pragma ton-solidity >=0.47.0; 

    library StampContractInfo {
        function STAMP_ROOT() internal inline returns(address){
            return address(0xae342223a991ab6299531fa75e433cd068b6e20171b33c98f82c5997da5537c9);
        }
        uint256 constant STAMP_ROOT_PUBKEY = 0x55962e2e4919c254145e11f1ca2cdfc1302f74c0c719bb6355de26f4a5dd5276;
        uint256 constant STAMP_CODEHASH = 0xfb4db31e28cf308b1052d958eebd4ce0fa82796d566d6e969a5e660a810321a9;
        uint16 constant  STAMP_CODEDEPTH = 9;
    }