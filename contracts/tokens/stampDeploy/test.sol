pragma ton-solidity >=0.47.0; 

    library SealContractInfo {
        function SEAL_ROOT() internal inline returns(address){
            return address(0x12345);
        }
        uint256 constant SEAL_ROOT_PUBKEY = 0xc12850c95ef859e59dfd5b11e3711f3f0fcb6c8ee285d7e30566e43f7e4a0435;
        uint256 constant SEAL_CODEHASH = 0x825a1e8151cbfdae08349c19b37b0638fe2582242ef5a70dbce7cb48dd578d62;
        uint16 constant  SEAL_CODEDEPTH = 8;
    }