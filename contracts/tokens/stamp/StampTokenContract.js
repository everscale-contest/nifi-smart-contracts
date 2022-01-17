const StampTokenContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "changeOwner",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveArtInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getArtInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getSeal",
                "inputs": [],
                "outputs": [
                    {
                        "name": "seal",
                        "type": "optional(address)"
                    },
                    {
                        "name": "corner",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "getForever",
                "inputs": [],
                "outputs": [
                    {
                        "name": "forever",
                        "type": "optional(address)"
                    }
                ]
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ]
            },
            {
                "name": "receiveTradeInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "getTradeInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "lockManager",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "unlockTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "unlock",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "requestEndorse",
                "inputs": [
                    {
                        "name": "seal",
                        "type": "address"
                    },
                    {
                        "name": "places",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "cancelEndrose",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "endrose",
                "inputs": [
                    {
                        "name": "place",
                        "type": "uint8"
                    },
                    {
                        "name": "receiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setForever",
                "inputs": [
                    {
                        "name": "forever",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "delForever",
                "inputs": [],
                "outputs": []
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_root",
                "type": "address"
            },
            {
                "key": 2,
                "name": "_id",
                "type": "uint64"
            }
        ],
        "events": [
            {
                "name": "TK_CO_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_MG_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "newManager",
                        "type": "address"
                    },
                    {
                        "name": "expirationTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_RQ_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "seal",
                        "type": "address"
                    },
                    {
                        "name": "sealPlaces",
                        "type": "uint8"
                    },
                    {
                        "name": "value",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_RX_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_EN_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "seal",
                        "type": "address"
                    },
                    {
                        "name": "corner",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_FE_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "forever",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_FD_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "forever",
                        "type": "address"
                    }
                ],
                "outputs": []
            }
        ],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_root",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint64"
            },
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_managerUnlockTime",
                "type": "uint32"
            },
            {
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_creatorFees",
                "type": "uint32"
            },
            {
                "name": "_hash",
                "type": "uint256"
            },
            {
                "name": "_sealPlace",
                "type": "uint8"
            },
            {
                "name": "_seal",
                "type": "optional(address)"
            },
            {
                "name": "_sealValue",
                "type": "uint128"
            },
            {
                "name": "_sealPosiblePlaces",
                "type": "uint8"
            },
            {
                "name": "_forever",
                "type": "optional(address)"
            }
        ]
    },
    tvc: "te6ccgECQAEAC68AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gs9BwQ/AQAFAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwE1BgEI2zzyPAgDeu1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds88jw8PAgEUCCCEBR7CMi74wIgghA6DBh3u+MCIIIQXMTmtrvjAiCCEHuuuZO74wIqHhIJBFAgghBfk4fVuuMCIIIQbB9PsLrjAiCCEG/ac/664wIgghB7rrmTuuMCEA8MCgMmMPhG8uBM+EJu4wDR2zww2zzyADsLMQKsiPhWbvhJ+EzHBfgj+E6+sLDy6Gz4UvLQbvgAbfhz+FT4TMjPhYjOAfoCgGvPQMlw+wD4S9s8yM+HIM6NBAAAAAAAAAAAAAAAAARyQaYYzxbLP8lw+wAdJQOKMPhG8uBM+EJu4wDTH/hEWG91+GTR2zwljisn0NMB+kAwMcjPhyDOcc8LYV5AyM+Tv2nP+s5VMMjOyx9ZyM7LH83NzclwOw4NAZCOP/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaV5AyPhEbxXPCx/OVTDIzssfWcjOyx/Nzc3J+ERvFOL7AOMA8gA5ASD4RHBvcnBvcYBAb3T4ZNs8LAN6MPhG8uBM+EJu4wDR2zwjjiQl0NMB+kAwMcjPhyDOcc8LYV4gyM+TsH0+ws7LH8v/zclw+wCSXwPi4wDyADspOQMmMPhG8uBM+EJu4wDR2zww2zzyADsRMQFu+FZusyCbMPhJ+FYgbvJ/xwXe8uB2bfh2+En4S9s8yM+HIM5xzwthWcjPkI6zTlLLP87NyXD7ACUEUCCCED/nl6664wIgghBFZDxouuMCIIIQR+R8nbrjAiCCEFzE5ra64wIbGBYTAyYw+Eby4Ez4Qm7jANHbPDDbPPIAOxQxATKI+FZu+En4TccF+CP4TrmwsPLoZ/gAcPhuFQA8TWV0aG9kIGZvciBsb2NrZWQgbWFuYWdlciBvbmx5Azow+Eby4Ez4Qm7jACGT1NHQ3vpA0wfR2zww2zzyADsXMQLOiPhWbvhJ+EzHBfgj+E6+sLDy6Gxopv5gggiYloC88uBt+FLy0G4B+HNopv5gggiYloChtX/4dCD4dfhUtT8B+FMgbvJ/+EvbPMjPhyDOcc8LYVUwyM+RD/AoMss/zssHyz/NyXD7AB0lAzow+Eby4Ez4Qm7jACGT1NHQ3vpA0x/R2zww2zzyADsZMQTCiPhWbvhJ+EzHBfgj+E6+sLD4SfhNxwX4I/hOubCx8uhoiCL6Qm8T1wv/wwDy6GqI+CMiufLoafgAAfhtIPhu+E34S9s8yM+HIM5xzwthVSDIz5GrQqvqyz/Oyx/NyXD7ACYyGiUAIkludmFsaWQgbG9jayB0aW1lAzYw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8MNs88gA7HDEC+oj4Vm74SfhMxwX4I/hOvrCw8uhs+AD4Vm7y4HP4U27y0HIg+Hb4UvhTIG7yf/hMI8jPhYjOjQROYloAAAAAAAAAAAAAAAAAAMDPFlUgyM+RL1N//s5ZyM7LB83NyXD7APhL2zzIz4cgznHPC2FZyM+QSfsVDss/zs3JcPsAHSUAKk1ldGhvZCBmb3Igb3duZXIgb25seQRQIIIQFaW1lLrjAiCCECF7Mwi64wIgghAszSSfuuMCIIIQOgwYd7rjAicjIR8DQDD4RvLgTPhCbuMAIZXTB9TR0JLTB+L6QNHbPDDbPPIAOyAxAdz4U26zIJsw+En4UyBu8n/HBd7y4G8h+FWw8uBxIcABIsACI8AEJMAIsbGx8uBw+AAB+HL4VAHIz4WIzgH6AoBrz0DJcPsA+FL4UyBu8n/4S9s8yM+HIM5xzwthVSDIz5Cd5xeOyz/OywfNyXD7ACUDcjD4RvLgTPhCbuMA0ds8Io4hJNDTAfpAMDHIz4cgznHPC2ECyM+SszSSfs7LP83JcPsAkVvi4wDyADsiOQAI+Er4SwM2MPhG8uBM+EJu4wAhk9TR0N76QNHbPDDbPPIAOyQxA6KI+FZu+En4TMcF+CP4Tr6wsPhJ+E3HBfgj+E65sLHy6GiIIfpCbxPXC//DAPLoavgAIPhs+EvbPMjPhyDOcc8LYVnIz5EMBV5iyz/Ozclw+wAmMiUASI0IWAAg2roYubBxOdG40QEjGeBKebK4CIki4Hm5abjiGQqI/ABITWV0aG9kIGZvciB0aGUgb3duZXIgb3IgbWFuYWdlciBvbmx5A/Yw+Eby4Ez4Qm7jANMf+ERYb3X4ZNHbPCOOIiXQ0wH6QDAxyM+HIM5xzwthXiDIz5JWltZSzssfy//NyXCONvhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaV4gyPhEbxXPCx/Oyx/L/83J+ERvFOL7AOMA8gA7KDkBIPhEcG9ycG9xgEBvdPhk2zwpAAz4T/hQ+FEETiCCCycc27rjAiCCEA3M8Oi64wIgghASYBuVuuMCIIIQFHsIyLrjAjgvLSsDjDD4RvLgTPhCbuMA0ds8JY4tJ9DTAfpAMDHIz4cgznHPC2FeQMjPklHsIyLOVTDIzssfWcjOyx/Nzc3JcPsAkl8F4uMA8gA7LDkAFPhM+E/4UPhN+E4DijD4RvLgTPhCbuMA0ds8Io4tJNDTAfpAMDHIz4cgznHPC2ECyM+SSYBuVgEgbpMwz4GUAc+DzuLLB83JcPsAkVvi4wDyADsuOQAI+FP4UgRsMPhCbuMA+EbycyGT1NHQ3vpA1NHQ+kDTH9TR0PpA0x/T/9GI+En4SscF8uhliCKBCWG58uhrNTQzMANkiCP6Qm8T1wv/wwDy6GqIJvpCbxPXC//DAPLoavgAWPhvAfhw+HFY+GwB+G34bts88gAyMjEAzPhW+FX4VPhT+FL4UfhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4POyz9VoMjOVZDIzssfVXDIzssfy//LB1UwyAEgbpMwz4GUAc+DzuLLf8sHyFggbpMwz4GUAc+DzuLNzc3NzcntVAAqQWRkcmVzcyBjYW4ndCBiZSBudWxsAChVbnZhbGlkIGNyZWF0b3IgZmVlcwAwTWV0aG9kIGZvciB0aGUgcm9vdCBvbmx5AhbtRNDXScIBjoDjDTY7AdRw7UTQ9AVxIYBA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4anIhgED0DpPXCz+RcOL4a40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhsNwDkjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+G1w+G6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4b3D4cHD4cXD4cm34c3D4dHD4dW34doBA9A7yvdcL//hicPhjA4Yw+Eby4Ez4Qm7jANHbPCGOKyPQ0wH6QDAxyM+HIM5xzwthAcjPkgycc24BIG6TMM+BlAHPg87izclw+wCRMOLjAPIAOzo5ACjtRNDT/9M/MfhDWMjL/8s/zsntVAAE+FYAxO1E0NP/0z/TADH6QNM/1NHQ+kDU0dD6QNMf1NHQ+kDTH9P/0wfU0dDSAAGS+kCSbQHi03/TB9TR0NIAAZL6QJJtAeLR+Hb4dfh0+HP4cvhx+HD4b/hu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KE/PgAUc29sIDAuNTQuMAAA",
    code: "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",
    codeHash: "2bdb0134817f8ee463ff5488a5883bd3a10d7935c085394de644af10dd8085e3",
};
module.exports = { StampTokenContract };