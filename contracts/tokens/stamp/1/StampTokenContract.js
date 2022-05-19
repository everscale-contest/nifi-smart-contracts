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
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "minRequestEndorseFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minCancelEndorseFee",
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
                        "name": "endorseIncomePercent",
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
                        "name": "creatorPercent",
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
                        "name": "creatorPercent",
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
                        "name": "creatorPercent",
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
                        "name": "creatorPercent",
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
                        "name": "minRequestEndorseFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minCancelEndorseFee",
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
                "name": "_creatorPercent",
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
                "name": "_minRequestEndorseFee",
                "type": "uint128"
            },
            {
                "name": "_minCancelEndorseFee",
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
                "name": "_endorseIncomePercent",
                "type": "uint16"
            }
        ]
    },
    tvc: "te6ccgECRwEADP8AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gtEBQRGA7ztRNDXScMB+GaJ+Gkh2zzTAAGOGYMI1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8OzgGA3rtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDjAiHXDR/yvCHjAwHbPPI8Q0MGAiggghBsH0+wu+MCIIIQb9pz/rrjAgoHA4ow+Eby4Ez4Qm7jANMf+ERYb3X4ZNHbPCWOKyfQ0wH6QDAxyM+HIM5xzwthXkDIz5O/ac/6zlUwyM7LH1nIzssfzc3NyXBCCQgBkI4/+EQgbxMhbxL4SVUCbxHIz4SAygDPhEDOAfoC9ABxzwtpXkDI+ERvFc8LH85VMMjOyx9ZyM7LH83Nzcn4RG8U4vsA4wDyAD0BIPhEcG9ycG9xgEBvdPhk2zwvBFAgghASYBuVu+MCIIIQLM0kn7vjAiCCEEVkPGi74wIgghBsH0+wu+MCMCQUCwRQIIIQUWM4AbrjAiCCEFzE5ra64wIgghBfk4fVuuMCIIIQbB9PsLrjAhIPDQwDejD4RvLgTPhCbuMA0ds8I44kJdDTAfpAMDHIz4cgznHPC2FeIMjPk7B9PsLOyx/L/83JcPsAkl8D4uMA8gBCLT0DJjD4RvLgTPhCbuMA0ds8MNs88gBCDkABbvhWbrMgmzD4SfhWIG7yf8cF3vLgdm34dvhJ+EvbPMjPhyDOcc8LYVnIz5COs05Syz/Ozclw+wApAyYw+Eby4Ez4Qm7jANHbPDDbPPIAQhBAATKI+FZu+En4TccF+CP4TrmwsPLoZ/gAcPhuEQA8TWV0aG9kIGZvciBsb2NrZWQgbWFuYWdlciBvbmx5AyYw+Eby4Ez4Qm7jANHbPDDbPPIAQhNAAtCI+FZu+En4TMcF+CP4Tr6wsPLobPhS8tBu+FNu8tBvaKb+YPhYvvLgcG34c/hU+EzIz4WIzgH6AoBrz0DJcPsA+EvbPMjPhyDOghBHJBphzwuByz/JcPsA+ErIz4WIzoBvz0DJgED7ACMpBFAgghA4oleuuuMCIIIQPIPl4LrjAiCCED/nl6664wIgghBFZDxouuMCIRsYFQM6MPhG8uBM+EJu4wAhk9TR0N76QNMf0ds8MNs88gBCFkAEwoj4Vm74SfhMxwX4I/hOvrCw+En4TccF+CP4TrmwsfLoaIgi+kJvE9cL/8MA8uhqiPgjIrny6Gn4AAH4bSD4bvhN+EvbPMjPhyDOcc8LYVUgyM+Rq0Kr6ss/zssfzclw+wAqNRcpACJJbnZhbGlkIGxvY2sgdGltZQM2MPhG8uBM+EJu4wAhk9TR0N76QNHbPDDbPPIAQhlAA/yI+FZu+En4TMcF+CP4Tr6wsPLobGim/mD4Wb7y4HD4Vm7y4HP4U27y0HL4UvLgdCD4dvha+ErIz4WIzgH6AoBrz0DJcPsAIPhL2zzIz4cgznHPC2FZyM+QSfsVDss/zs3JcPsA+FL4UyBu8n/4TPhLVQPIz4WIznHPC25VMMgjKRoAKs+Qi4gIvss/zlnIzssHzc3JgED7AANIMPhG8uBM+EJu4wAhl9M/0wfU0dCU0z/TB+L6QNHbPDDbPPIAQhxAAsj4U26zIJsw+En4UyBu8n/HBd7y4G8h+FWw8uBxgvAtO0YQF/8p7TCvVhREZgy8N/XLGd8lqZEKY9gyUgDnF8jL/3BtgED0Q9s8cViAQPQWVQLIyz9yWIBA9EPI9ADJIPkAAddlIB0D0oLwc4XKl0jPB9ahX/OQOZ7AChhQ7c94Gu3+SdI7cUW6C55YeFUC2zz4SQHIz4oAQMv/ydDHBfLgavgAASD4cvhTIG7yf/hL2zzIz4cgznHPC2FVIMjPkJ3nF47LP87LB83JcPsA+FvCAB8pHgCQji/4VPhbgScQqYS1f/hUorV/IcjPhYjOAfoCgGvPQMlx+wD4SsjPhYjOgG/PQMmAQI4R+FQhyM+FiM4B+gKAa89AyXHi+wAwACzIz4wIBNJYzwsPyw9Yzwv/y//J0PkCAEiNCGAFfZpIDz3xxIqcVyX8mGWjSATozPNFWaGyMYlBQ3wwCvQDPjD4RvLgTPhCbuMAIZPU0dDe+kDTB9N/0ds8MNs88gBCIkAC/Ij4Vm74SfhMxwX4I/hOvrCw8uhsaKb+YPhXIqC1f77y4G34UvLQblj4cyD4dCH4dfhUtT9Y+FMgbvJ/+EvbPMjPhyDOcc8LYVUwyM+RD/AoMss/zssHyz/NyXD7AGim/mCitX+CCTEtAKG1f/hKyM+FiM4B+gKAa89AyXD7ACMpACpNZXRob2QgZm9yIG93bmVyIG9ubHkEUCCCEBR7CMi64wIgghAVpbWUuuMCIIIQIXszCLrjAiCCECzNJJ+64wIuKyclA3Iw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPkrM0kn7Oyz/NyXD7AJFb4uMA8gBCJj0ACPhK+EsDNjD4RvLgTPhCbuMAIZPU0dDe+kDR2zww2zzyAEIoQAOiiPhWbvhJ+EzHBfgj+E6+sLD4SfhNxwX4I/hOubCx8uhoiCH6Qm8T1wv/wwDy6Gr4ACD4bPhL2zzIz4cgznHPC2FZyM+RDAVeYss/zs3JcPsAKjUpAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwASE1ldGhvZCBmb3IgdGhlIG93bmVyIG9yIG1hbmFnZXIgb25seQP2MPhG8uBM+EJu4wDTH/hEWG91+GTR2zwjjiIl0NMB+kAwMcjPhyDOcc8LYV4gyM+SVpbWUs7LH8v/zclwjjb4RCBvEyFvEvhJVQJvEcjPhIDKAM+EQM4B+gL0AHHPC2leIMj4RG8Vzwsfzssfy//NyfhEbxTi+wDjAPIAQiw9ASD4RHBvcnBvcYBAb3T4ZNs8LQAM+E/4UPhRA4ww+Eby4Ez4Qm7jANHbPCWOLSfQ0wH6QDAxyM+HIM5xzwthXkDIz5JR7CMizlUwyM7LH1nIzssfzc3NyXD7AJJfBeLjAPIAQi89ABT4TPhP+FD4TfhOBEwgggkxnzq64wIgggsnHNu64wIgghARS65kuuMCIIIQEmAblbrjAj88MzEDijD4RvLgTPhCbuMA0ds8Io4tJNDTAfpAMDHIz4cgznHPC2ECyM+SSYBuVgEgbpMwz4GUAc+DzuLLB83JcPsAkVvi4wDyAEIyPQAI+FP4UgSGMPhCbuMA+EbycyGT1NHQ3vpA1NHQ+kDTH9TR0PpA0x/T/9N/1NHQ03/Tf9N/0w/RiPhJ+ErHBfLoZYgngQlhufLoazg3NjQDlIgo+kJvE9cL/8MA8uhqiCv6Qm8T1wv/wwDy6Gr4AFUG+G9VBfhwVQT4cVUG+GxVBfhtVQT4blUD+HdVAvh4WPh5Afh6+HvbPPIANTVAACpBZGRyZXNzIGNhbid0IGJlIG51bGwAKFVudmFsaWQgY3JlYXRvciBmZWVzADBNZXRob2QgZm9yIHRoZSByb290IG9ubHkCFu1E0NdJwgGOgOMNOUIDpnDtRND0BXD4QPhB+EL4Q/hE+EX4RvhH+Ej4SXErgED0Do6A33IsgED0DpPXCz+RcOKJIHCJcF8gbXAgbXBfQIAcb4DtV4BA9A7yvdcL//hicPhjOjs7AQKJOwBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAOGMPhG8uBM+EJu4wDR2zwhjisj0NMB+kAwMcjPhyDOcc8LYQHIz5IMnHNuASBukzDPgZQBz4PO4s3JcPsAkTDi4wDyAEI+PQAo7UTQ0//TPzH4Q1jIy//LP87J7VQABPhWA4Iw+Eby4Ez4Qm7jANHbPCSOJybQ0wH6QDAxyM+HIM5xzwthXjDIz5IExnzqy3/Lf8t/y3/NyXD7AJJfBOIw2zzyAEJBQADa7UdwgBxvh4Adb4IwgBxwZF8K+EP4QsjL/8s/z4POyz9V8MjOVeDIzssfVcDIzssfy//LB1WAyAEgbpMwz4GUAc+DzuLLf8sHVVDIASBukzDPgZQBz4PO4st/y3/Lf1nIy3/LD83Nzc3NzcntVAAQ+Ff4WPhZ+FoA6O1E0NP/0z/TADH6QNM/1NHQ+kDU0dD6QNMf1NHQ+kDTH9P/0wfU0dDSAAGS+kCSbQHi03/TB9TR0NIAAZL6QJJtAeLTf9N/03/U0dDTf9MP0XD4QPhB+EL4Q/hE+EX4RvhH+Ej4SYASemOAHG+A7Vf4Y/hiAAr4RvLgTAIK9KQg9KFGRQAUc29sIDAuNjEuMAAA",
    code: "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",
    codeHash: "71160ca59ae11697b65b309424346a3c080f36bcfa1370c9a8586966a1905541",
};
module.exports = { StampTokenContract };