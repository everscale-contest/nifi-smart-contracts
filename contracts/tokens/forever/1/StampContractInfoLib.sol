pragma ton-solidity >=0.47.0; 

    library StampContractInfo {
        function STAMP_ROOT() internal inline returns(address){
            return address(0x83acf01fcaeb298036fc8da66a1fbaf6d88e5607e1bcbcb0ed00ab3636d321ae);
        }
        uint256 constant STAMP_ROOT_PUBKEY = 0xade24dd697b9029fce302598258cff6a0d54bf36061bb5b706ab5c6c537e9512;
        uint256 constant STAMP_CODEHASH = 0xf67aa09abfcd020e1d1b53165977027dc49c93055662de308d32fcc8f8aee6f9;
        uint16 constant  STAMP_CODEDEPTH = 9;
    }