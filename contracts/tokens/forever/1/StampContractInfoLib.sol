pragma ton-solidity >=0.47.0; 

    library StampContractInfo {
        function STAMP_ROOT() internal inline returns(address){
            return address(0xcc6b40811b9e76186175247837651a60f0ee2708e8c196f7f87399f84f149eb4);
        }
        uint256 constant STAMP_ROOT_PUBKEY = 0x61a407233cbeb96ff96e96401cf148faf69045248c69817b304a57c500f01588;
        uint256 constant STAMP_CODEHASH = 0xc5e73e54ada16f4cc0f93660563884ef75b54da6904904c705a1d4fefef6e8a6;
        uint16 constant  STAMP_CODEDEPTH = 9;
    }