pragma ton-solidity >=0.47.0; 

    library StampContractInfo {
        function STAMP_ROOT() internal inline returns(address){
            return address(0x2eb0e94575f9751ba0415c67f884fe3867adbba1f216181504cf0e12ac5ebc92);
        }
        uint256 constant STAMP_ROOT_PUBKEY = 0xffaa2ac04ba946072fa5a0d08b267650671c214acf1ce819f22d451302191212;
        uint256 constant STAMP_CODEHASH = 0xef13a9acab739619041f3aa4c68a505bb5ee116c4ef67f3d4f53b8469c4c61cc;
        uint16 constant  STAMP_CODEDEPTH = 9;
    }