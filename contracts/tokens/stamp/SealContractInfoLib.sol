pragma ton-solidity >=0.47.0; 

    library SealContractInfo {
        function SEAL_ROOT() internal inline returns(address){
            return address(0x12345);
        }
        uint256 constant SEAL_ROOT_PUBKEY = 0x69ff846983c9069ca22c99981127be57ad99d451e56d15a4d100baae6ae59d5e;
        uint256 constant SEAL_CODEHASH = 0x825a1e8151cbfdae08349c19b37b0638fe2582242ef5a70dbce7cb48dd578d62;
        uint16 constant  SEAL_CODEDEPTH = 8;
    }