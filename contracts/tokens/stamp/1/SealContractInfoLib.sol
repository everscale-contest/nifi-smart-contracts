pragma ton-solidity >=0.47.0; 

    library SealContractInfo {
        function SEAL_ROOT() internal inline returns(address){
            return address(0xafb34901e7be3891538ae4bf930cb469009d199e68ab3436463128286f86015e);
        }
        uint256 constant SEAL_ROOT_PUBKEY = 0x2d3b461017ff29ed30af561444660cbc37f5cb19df25a9910a63d8325200e717;
        uint256 constant SEAL_CODEHASH = 0x7385ca9748cf07d6a15ff390399ec00a1850edcf781aedfe49d23b7145ba0b9e;
        uint16 constant  SEAL_CODEDEPTH = 8;
    }