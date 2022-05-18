pragma ton-solidity >=0.47.0; 

    library StampContractInfo {
        function STAMP_ROOT() internal inline returns(address){
            return address(0xc604539b34d24180aae03b73e78ae4de11ed3144029f646b2fd811591d85e093);
        }
        uint256 constant STAMP_ROOT_PUBKEY = 0x36bb4eb1e1d5426412f0b390c91c54bf861177571d74e79e08fea47db6974cdb;
        uint256 constant STAMP_CODEHASH = 0x711839c1cfb8ed5945c9491bf5b6a387226f0a763e32a388bd3d475f1e38ac7a;
        uint16 constant  STAMP_CODEDEPTH = 9;
    }