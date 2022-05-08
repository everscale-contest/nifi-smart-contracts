pragma ton-solidity >=0.47.0; 

    library StampContractInfo {
        function STAMP_ROOT() internal inline returns(address){
            return address(0x71f9d1b71879b87c9f08ae59e33198648c2c424d90cf1ac1c2966a87c588462e);
        }
        uint256 constant STAMP_ROOT_PUBKEY = 0xcafa85aa99a9fbd507567102a09adb57e1758fd352dfc8c77b1f9e035144a0c5;
        uint256 constant STAMP_CODEHASH = 0x7a2d02568bb76b92a3dfe62d67ec55f27b76ede463220143c2f2310a06533246;
        uint16 constant  STAMP_CODEDEPTH = 9;
    }