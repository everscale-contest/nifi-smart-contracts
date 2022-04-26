pragma ton-solidity >=0.47.0; 

    library SealContractInfo {
        function SEAL_ROOT() internal inline returns(address){
            return address(0xb9ab8875cb747c3a13122df250172e8ab16717a9f9f0d7fa27949de55af801e5);
        }
        uint256 constant SEAL_ROOT_PUBKEY = 0x778af6d3d1f0208e3664ea92b3cdfda069047d8c708c246d250d9a85a60e41e7;
        uint256 constant SEAL_CODEHASH = 0xc060e4d4095310736570f55d39afac06cb5fd8fb3442b8ed8908ff2b50a3c85f;
        uint16 constant  SEAL_CODEDEPTH = 8;
    }