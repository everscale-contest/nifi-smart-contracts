pragma ton-solidity >=0.47.0; 

    library StampContractInfo {
        function STAMP_ROOT() internal inline returns(address){
            return address(0x122c2b007e86205ecafdb3fdaa0964a9db59fc7373d97d62469dc89d30c54105);
        }
        uint256 constant STAMP_ROOT_PUBKEY = 0xa32b6119b77e79ee370e173a3383e517d2d235c796bd38198af22b6673300cb8;
        uint256 constant STAMP_CODEHASH = 0x4a7f824eff2a1fe7e45d338cce0a288269a10851aa3b569755ec3c7fe40bc0e9;
        uint16 constant  STAMP_CODEDEPTH = 8;
    }