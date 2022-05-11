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
                        "name": "creatorPercentReward",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "minSealFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minSealRxFee",
                        "type": "uint128"
                    },
                    {
                        "name": "requestEndorseFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "minForAddFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "endorsePercentFee",
                        "type": "uint16"
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
                        "name": "creatorPercentReward",
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
                        "name": "creatorPercentReward",
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
                        "name": "creatorPercentReward",
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
                        "name": "creatorPercentReward",
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
                    },
                    {
                        "name": "price",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "cancelEndorse",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "endorse",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "place",
                        "type": "uint8"
                    },
                    {
                        "name": "sealOwner",
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
            },
            {
                "name": "getParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minSealFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minSealRxFee",
                        "type": "uint128"
                    },
                    {
                        "name": "requestEndorseFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "minForAddFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddFixIncome",
                        "type": "uint128"
                    }
                ]
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
                "name": "_creatorPercentReward",
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
            },
            {
                "name": "_minSealFee",
                "type": "uint128"
            },
            {
                "name": "_minSealRxFee",
                "type": "uint128"
            },
            {
                "name": "_requestEndorseFixIncome",
                "type": "uint128"
            },
            {
                "name": "_minForAddFee",
                "type": "uint128"
            },
            {
                "name": "_forAddFixIncome",
                "type": "uint128"
            },
            {
                "name": "_endorsePercentFee",
                "type": "uint16"
            }
        ]
    },
    tvc: "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",
    code: "te6ccgECRQEADOoABCSK7VMg4wMgwP/jAiDA/uMC8gtCAgFEA77tRNDXScMB+GaJ+Gkh2zzTAAGOGoECANcYIPkBAdMAAZTT/wMBkwL4QuL5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPBMQAwN67UTQ10nDAfhmItDTA/pAMPhpqTgA+ER/b3GCCJiWgG9ybW9zcG90+GTcIccA4wIh1w0f8rwh4wMB2zzyPEFBAwIoIIIQbQqepbvjAiCCEG/ac/664wIHBAOKMPhG8uBM+EJu4wDTH/hEWG91+GTR2zwljisn0NMB+kAwMcjPhyDOcc8LYV5AyM+Tv2nP+s5VMMjOyx9ZyM7LH83NzclwQAYFAZCOP/hEIG8TIW8S+ElVAm8RyM+EgMoAz4RAzgH6AvQAcc8LaV5AyPhEbxXPCx/OVTDIzssfWcjOyx/Nzc3J+ERvFOL7AOMA8gA+ASD4RHBvcnBvcYBAb3T4ZNs8OgRQIIIQFaW1lLvjAiCCEDyD5eC74wIgghBcxOa2u+MCIIIQbQqepbvjAjUiFggEUCCCEF+Th9W64wIgghBfpL3KuuMCIIIQbB9PsLrjAiCCEG0KnqW64wIUDAsJA4Yw+Eby4Ez4Qm7jANHbPCWOKSfQ0wH6QDAxyM+HIM5xzwthXkDIz5O0KnqWy3/Lf8t/y3/Lf83JcPsAkl8F4jDbPPIAQAowABT4V/hY+Fn4WvhbA3ow+Eby4Ez4Qm7jANHbPCOOJCXQ0wH6QDAxyM+HIM5xzwthXiDIz5OwfT7Czssfy//NyXD7AJJfA+LjAPIAQDg+BIow+EJu4wD4RvJzIZPU0dDe+kDU0dD6QNMf1NHQ+kDTH9P/03/U0dDTf9N/03/Tf9MP0Yj4SfhKxwXy6GWIKIEJYbny6GsQDw4NA5yIKfpCbxPXC//DAPLoaogs+kJvE9cL/8MA8uhq+ABVB/hvVQb4cFUF+HFVB/hsVQb4bVUF+G5VBPh3VQP4eFUC+HlY+HoB+Hv4fNs88gAzMzAAKFVudmFsaWQgY3JlYXRvciBmZWVzADBNZXRob2QgZm9yIHRoZSByb290IG9ubHkCFu1E0NdJwgGOgOMNEUADpnDtRND0BXD4QPhB+EL4Q/hE+EX4RvhH+Ej4SXErgED0Do6A33IsgED0DpPXCz+RcOKJIHCJcF8gbXAgbXBfUIAdb4DtV4BA9A7yvdcL//hicPhjEhMTAQKJEwBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAMmMPhG8uBM+EJu4wDR2zww2zzyAEAVMAFu+FZusyCbMPhJ+FYgbvJ/xwXe8uB2bfh2+En4S9s8yM+HIM5xzwthWcjPkI6zTlLLP87NyXD7ADIEUCCCED/nl6664wIgghBFZDxouuMCIIIQUWM4AbrjAiCCEFzE5ra64wIfHBoXAyYw+Eby4Ez4Qm7jANHbPDDbPPIAQBgwATKI+FZu+En4TccF+CP4TrmwsPLoZ/gAcPhuGQA8TWV0aG9kIGZvciBsb2NrZWQgbWFuYWdlciBvbmx5AyYw+Eby4Ez4Qm7jANHbPDDbPPIAQBswAtCI+FZu+En4TMcF+CP4Tr6wsPLobPhS8tBu+FNu8tBvaKb+YPhYvvLgcG34c/hU+EzIz4WIzgH6AoBrz0DJcPsA+EvbPMjPhyDOghBHJBphzwuByz/JcPsA+ErIz4WIzoBvz0DJgED7ACwyAzow+Eby4Ez4Qm7jACGT1NHQ3vpA0x/R2zww2zzyAEAdMATCiPhWbvhJ+EzHBfgj+E6+sLD4SfhNxwX4I/hOubCx8uhoiCL6Qm8T1wv/wwDy6GqI+CMiufLoafgAAfhtIPhu+E34S9s8yM+HIM5xzwthVSDIz5GrQqvqyz/Oyx/NyXD7ADQzHjIAIkludmFsaWQgbG9jayB0aW1lAzYw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8MNs88gBAIDAD/Ij4Vm74SfhMxwX4I/hOvrCw8uhsaKb+YPhavvLgcPhWbvLgc/hTbvLQcvhS8uB0IPh2+Fv4SsjPhYjOAfoCgGvPQMlw+wAg+EvbPMjPhyDOcc8LYVnIz5BJ+xUOyz/Ozclw+wD4UvhTIG7yf/hM+EtVA8jPhYjOcc8LblUwyCwyIQAqz5CLiAi+yz/OWcjOywfNzcmAQPsABFAgghAhezMIuuMCIIIQLM0kn7rjAiCCEDiiV6664wIgghA8g+XguuMCLy0pIwNIMPhG8uBM+EJu4wAhl9M/0wfU0dCU0z/TB+L6QNHbPDDbPPIAQCQwAsj4U26zIJsw+En4UyBu8n/HBd7y4G8h+FWw8uBxgvDK+oWqman71QdWcQKgmttX4XWP01LfyMd7H54DUUSgxcjL/3BtgED0Q9s8cViAQPQWVQLIyz9yWIBA9EPI9ADJIPkAAddlKCUD0oLwYfypHEWb2cclsKsPU4hdAM00Sw71CcJm1HGo5Tir51RYeFUC2zz4SQHIz4oAQMv/ydDHBfLgavgAASD4cvhTIG7yf/hL2zzIz4cgznHPC2FVIMjPkJ3nF47LP87LB83JcPsA+FzCACcyJgCQji/4VPhcgScQqYS1f/hUorV/IcjPhYjOAfoCgGvPQMlw+wD4SsjPhYjOgG/PQMmAQI4R+FQhyM+FiM4B+gKAa89AyXDi+wAwACzIz4wIBNJYzwsPyw9Yzwv/y//J0PkCAEiNCGAGeddmDYlqsAEJUrRCZh8pWRAEG6tYxjevXUpms2qSv5QDPjD4RvLgTPhCbuMAIZPU0dDe+kDTB9N/0ds8MNs88gBAKjAD/oj4Vm74SfhMxwX4I/hOvrCw8uhsaKb+YPhX+FmgtX8ioLV/vvLgbfhS8tBuWPhzIPh0Ifh1+FS1P1j4UyBu8n/4S9s8yM+HIM5xzwthVTDIz5EP8Cgyyz/OywfLP83JcPsAaKb+YAH4V6C1f6G1f/hKyM+FiM4B+gKAa89AyXAsMisABPsAACpNZXRob2QgZm9yIG93bmVyIG9ubHkDcjD4RvLgTPhCbuMA0ds8Io4hJNDTAfpAMDHIz4cgznHPC2ECyM+SszSSfs7LP83JcPsAkVvi4wDyAEAuPgAI+Er4SwM2MPhG8uBM+EJu4wAhk9TR0N76QNHbPDDbPPIAQDEwAOLtR3CAHW+HgB5vgjCAHXBkXwr4Q/hCyMv/yz/Pg87LP4ARYsjOVfDIzssfVdDIzssfy//LB1WQyAEgbpMwz4GUAc+DzuLLf8sHVWDIASBukzDPgZQBz4PO4st/y3/Lf1UgyMt/y3/LD83Nzc3NzcntVAOiiPhWbvhJ+EzHBfgj+E6+sLD4SfhNxwX4I/hOubCx8uhoiCH6Qm8T1wv/wwDy6Gr4ACD4bPhL2zzIz4cgznHPC2FZyM+RDAVeYss/zs3JcPsANDMyAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwAKkFkZHJlc3MgY2FuJ3QgYmUgbnVsbABITWV0aG9kIGZvciB0aGUgb3duZXIgb3IgbWFuYWdlciBvbmx5BE4gggsnHNu64wIgghASYBuVuuMCIIIQFHsIyLrjAiCCEBWltZS64wI9Ozk2A/Yw+Eby4Ez4Qm7jANMf+ERYb3X4ZNHbPCOOIiXQ0wH6QDAxyM+HIM5xzwthXiDIz5JWltZSzssfy//NyXCONvhEIG8TIW8S+ElVAm8RyM+EgMoAz4RAzgH6AvQAcc8LaV4gyPhEbxXPCx/Oyx/L/83J+ERvFOL7AOMA8gBANz4BIPhEcG9ycG9xgEBvdPhk2zw4AAz4T/hQ+FEDjDD4RvLgTPhCbuMA0ds8JY4tJ9DTAfpAMDHIz4cgznHPC2FeQMjPklHsIyLOVTDIzssfWcjOyx/Nzc3JcPsAkl8F4uMA8gBAOj4AFPhM+E/4UPhN+E4DijD4RvLgTPhCbuMA0ds8Io4tJNDTAfpAMDHIz4cgznHPC2ECyM+SSYBuVgEgbpMwz4GUAc+DzuLLB83JcPsAkVvi4wDyAEA8PgAI+FP4UgOGMPhG8uBM+EJu4wDR2zwhjisj0NMB+kAwMcjPhyDOcc8LYQHIz5IMnHNuASBukzDPgZQBz4PO4s3JcPsAkTDi4wDyAEA/PgAo7UTQ0//TPzH4Q1jIy//LP87J7VQABPhWAOztRNDT/9M/0wAx+kDTP9TR0PpA1NHQ+kDTH9TR0PpA0x/T/9MH1NHQ0gABkvpAkm0B4tN/0wfU0dDSAAGS+kCSbQHi03/Tf9N/1NHQ03/Tf9MP0XD4QPhB+EL4Q/hE+EX4RvhH+Ej4SYATemOAHW+A7Vf4Y/hiAAr4RvLgTAIK9KQg9KFEQwAUc29sIDAuNTguMgAA",
    codeHash: "7a2d02568bb76b92a3dfe62d67ec55f27b76ede463220143c2f2310a06533246",
};
module.exports = { StampTokenContract };