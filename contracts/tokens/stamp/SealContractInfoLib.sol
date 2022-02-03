pragma ton-solidity >=0.47.0; 

    library SealContractInfo {
        function SEAL_ROOT() internal inline returns(address){
            return address(0xc092d9b141da80f0adf4700edc84802d5ed8fa48357d0ff1110e287e0eccb8cc);
        }
        uint256 constant SEAL_ROOT_PUBKEY = 0x34a7e61611c857c1189756834eb469e584ca692a0206023920e7327084772291;
        uint256 constant SEAL_CODEHASH = 0x8576ca355c14a0f3a6af34a0e2a148f346f3d4afa60748bec1aeb9c77c92e32c;
        uint16 constant  SEAL_CODEDEPTH = 8;
    }