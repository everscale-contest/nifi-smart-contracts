pragma ton-solidity >=0.47.0; 

    library StampContractInfo {
        function STAMP_ROOT() internal inline returns(address){
            return address(0xb048f07871320e1767f5e9ac4043e58c441b0ce20531f29bb2b4c544bd1f6634);
        }
        uint256 constant STAMP_ROOT_PUBKEY = 0x778af6d3d1f0208e3664ea92b3cdfda069047d8c708c246d250d9a85a60e41e7;
        uint256 constant STAMP_CODEHASH = 0x9f88364a63012c1e1784bfd2341228c7051c5c84e9a7afd31636bec1d1066f32;
        uint16 constant  STAMP_CODEDEPTH = 9;
    }