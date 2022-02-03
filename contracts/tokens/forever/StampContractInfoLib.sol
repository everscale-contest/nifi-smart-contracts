pragma ton-solidity >=0.47.0; 

    library StampContractInfo {
        function STAMP_ROOT() internal inline returns(address){
            return address(0x491dc2f5c9f9600286d472eb2f307818e1c76539e9ac06a4e83398ad5aa39baa);
        }
        uint256 constant STAMP_ROOT_PUBKEY = 0x34a7e61611c857c1189756834eb469e584ca692a0206023920e7327084772291;
        uint256 constant STAMP_CODEHASH = 0xf21a7b18c92241311db84c01e5de7f583816c897a0916a1e25d1fefb2afe1352;
        uint16 constant  STAMP_CODEDEPTH = 8;
    }