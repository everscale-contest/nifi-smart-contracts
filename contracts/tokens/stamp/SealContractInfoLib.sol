pragma ton-solidity >=0.47.0; 

    library SealContractInfo {
        function SEAL_ROOT() internal inline returns(address){
            return address(0x4d42a7cd179d4b749bdd8f5fa6171afd88889fd1a0ced7667ab8165561afd26a);
        }
        uint256 constant SEAL_ROOT_PUBKEY = 0xa32b6119b77e79ee370e173a3383e517d2d235c796bd38198af22b6673300cb8;
        uint256 constant SEAL_CODEHASH = 0x8c4b212dd4cf41304a0fcd0e461499c34d78121f8d556ee4c7eb4738b6eb28a0;
        uint16 constant  SEAL_CODEDEPTH = 8;
    }