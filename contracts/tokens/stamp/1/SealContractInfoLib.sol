pragma ton-solidity >=0.47.0; 

    library SealContractInfo {
        function SEAL_ROOT() internal inline returns(address){
            return address(0x4371da89ed0ff65c43b273445c09eb83588b2a50f58e45ebf1dc2453ca1a2f9b);
        }
        uint256 constant SEAL_ROOT_PUBKEY = 0x61a407233cbeb96ff96e96401cf148faf69045248c69817b304a57c500f01588;
        uint256 constant SEAL_CODEHASH = 0x7385ca9748cf07d6a15ff390399ec00a1850edcf781aedfe49d23b7145ba0b9e;
        uint16 constant  SEAL_CODEDEPTH = 8;
    }