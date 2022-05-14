const DirectAuctionRootContract = {
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
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "bidCost",
                        "type": "uint128"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "tokenCode",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "create",
                "inputs": [
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "stepBid",
                        "type": "uint128"
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "showcaseFees",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "receiveTokenAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getTokenAddress",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getBidCost",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "setBidCost",
                "inputs": [
                    {
                        "name": "bidCost",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "withdraw",
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCreationParameters",
                "inputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFixIncome",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveCreationParameters",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFixIncome",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getCreationParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFixIncome",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "changeManager",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveManager",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getManager",
                "inputs": [],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "receiveInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint64"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint64"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getTokenCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "AUC_CT_nifi_auc_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "tokenAddress",
                        "type": "address"
                    },
                    {
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "stepBid",
                        "type": "uint128"
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "auctionCreator",
                        "type": "address"
                    },
                    {
                        "name": "showcaseFees",
                        "type": "uint32"
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
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_symbol",
                "type": "string"
            },
            {
                "name": "_tokenCode",
                "type": "cell"
            },
            {
                "name": "_totalSupply",
                "type": "uint64"
            },
            {
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_minCreationFee",
                "type": "uint128"
            },
            {
                "name": "_creationFixIncome",
                "type": "uint128"
            },
            {
                "name": "_bidCost",
                "type": "uint128"
            }
        ]
    },
    tvc: "te6ccgECOgEACdAAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gs3BQQ5A8TtRNDXScMB+GaJ+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPDAuBgN67UTQ10nDAfhmItDTA/pAMPhpqTgA+ER/b3GCCJiWgG9ybW9zcG90+GTcIccA4wIh1w0f8rwh4wMB2zzyPDY2BgRQIIIQENsmq7vjAiCCECpT+KO74wIgghBUi/A8u+MCIIIQf2Y3SLvjAiIYDgcEUCCCEF8eglG64wIgghBmDOkRuuMCIIIQfp1jFrrjAiCCEH9mN0i64wIMCwoIA+ww+Eby4Ez4Qm7jANMf+ERYb3X4ZNHbPCKOHyTQ0wH6QDAxyM+HIM6AYs9AXgHPk/2Y3SLLf8t/yXCONPhEIG8TIW8S+ElVAm8RyM+EgMoAz4RAzgH6AvQAcc8LaQLI+ERvFc8LH8t/y3/NyfhEbxTi+wDjAPIANQkyASD4RHBvcnBvcYBAb3T4ZNs8HANyMPhG8uBM+EJu4wDTP9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk/p1jFrOzclw+wCRMOLjAPIANTQyA24w+Eby4Ez4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk5gzpEbOzclw+wCRMOLjAPIANREyAzow+Eby4Ez4Qm7jACGT1NHQ3tN/03/R2zww2zzyADUNKwEiiPhJ+E7HBfLr6PgAAfhv+HAhBFAgghA3kP42uuMCIIIQSQEr7brjAiCCEE0lNF264wIgghBUi/A8uuMCFhQSDwPiMPhG8uBM+EJu4wDTH/hEWG91+GTR2zwhjh0j0NMB+kAwMcjPhyDOcc8LYQHIz5NSL8Dyzs3JcI4x+EQgbxMhbxL4SVUCbxHIz4SAygDPhEDOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFOL7AOMA8gA1EDIBIPhEcG9ycG9xgEBvdPhk2zwRAAT4TgNoMPhG8uBM+EJu4wDR2zwhjhwj0NMB+kAwMcjPhyDOghDNJTRdzwuBy3/JcPsAkTDi4wDyADUTMgAE+FEDNjD4RvLgTPhCbuMAIZPU0dDe03/R2zww2zzyADUVKwAW+En4TscF8uEY+HEDPDD4RvLgTPhCbuMAIZPU0dDe+kDTf9IA0ds84wDyADUXMgFEiPhJ+E7HBfLr6PgAEsjPhYDKAM+EQM4B+gKAa89AyXD7ACEEUCCCEBmToM664wIgghAdXokouuMCIIIQIamdqLrjAiCCECpT+KO64wIfHRsZA/ow+Eby4Ez4Qm7jANMf+ERYb3X4ZNHbPCSOIybQ0wH6QDAxyM+HIM5xzwthXjDIz5KpT+KOzMzLP8v/zclwjjf4RCBvEyFvEvhJVQJvEcjPhIDKAM+EQM4B+gL0AHHPC2leMMj4RG8VzwsfzMzLP8v/zcn4RG8U4vsA4wDyADUaMgEg+ERwb3Jwb3GAQG90+GTbPB4DcjD4RvLgTPhCbuMA0ds8Io4hJNDTAfpAMDHIz4cgzoBiz0BeAc+ShqZ2ost/y3/JcPsAkVvi4wDyADUcMgAI+E/4UAN8MPhG8uBM+EJu4wDR2zwkjiUm0NMB+kAwMcjPhyDOcc8LYV4wyM+SdXokoszMyz/L/83JcPsAkl8E4uMA8gA1HjIAEPhK+Ev4TfhCAzYw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8MNs88gA1ICsCOIj4SfhOxwXy6+iIIfpCbxPXC//DAPLr6fgA+G4hLAA2TWV0aG9kIGZvciB0aGUgbWFuYWdlciBvbmx5BEwgggrTnre64wIgggrnDBW64wIgghAOdQa/uuMCIIIQENsmq7rjAjEqKCMDnjD4RvLgTPhCbuMAIZPU0dDe+kDU0dD6QNN/03/TH9Mf0x/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5JDbJquzs3JcPsAkTDiMNs88gA1JCsC/mim/mD4T77y4RYggQPpufLhF/hNpLU/+G1opv5g+FChtX9UcSP4UVR4mi74QsjL/3BtgED0Q/gocViAQPQW+E3Iyz9yWIBA9EPI9ADJ+EzIz4SA9AD0AM+BySD5AMjPigBAy//J0FWAVQkqyM+FiM4B+gJzzwtqIds8zM+DVXAnJQGiyM+Qw8fL5s5VYMjOy3/Lf8t/yx9ZyMsfyx/Nzc3JcPsAXmBVQPhN2zzIz4cgznHPC2FVcMjPkWbGRNLLP87Lf8t/yx/LH1nIzssfzc3JcPsAJgBIjQhYACDauhi5sHE50bjRASMZ4Ep5srgIiSLgeblpuOIZCoj8ADTQ0gABk9IEMd7SAAGT0gEx3vQE9AT0BNFfAwNmMPhG8uBM+EJu4wDR2zwhjhsj0NMB+kAwMcjPhyDOghCOdQa/zwuBzMlw+wCRMOLjAPIANSkyAAT4TASuMPhCbuMA+EbycyGT1NHQ3vpA03/Tf9N/1NTU0Yj4RSBukjBw3vhCuvLoZPgAWPhqAfhr+GxVAogh+kJvE9cL/8MA8uvp+AD4bln4AAH4b/hw+HHbPPIALi0sKwBc+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+DzMzMyz/OVSDIy3/Lf8t/zcntVAA6TWFuYWdlciBhZGRyZXNzIGNhbid0IGJlIG51bGwAMk1ldGhvZCBmb3IgdGhlIG93bmVyIG9ubHkCFu1E0NdJwgGOgOMNLzUCWHDtRND0BYhfIHCJcF8g+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjOTAAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAD5jD4RvLgTPhCbuMA0x/4RFhvdfhk0z/R2zwhjh0j0NMB+kAwMcjPhyDOcc8LYQHIz5ILTnrezs3JcI4x+EQgbxMhbxL4SVUCbxHIz4SAygDPhEDOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFOL7AOMA8gA1MzIAKO1E0NP/0z8x+ENYyMv/yz/Oye1UASD4RHBvcnBvcYBAb3T4ZNs8NABy+ELIy/9wbYBA9EP4KHFYgED0FgHIyz9yWIBA9EPI9ADJ+EzIz4SA9AD0AM+ByfkAyM+KAEDL/8nQAF7tRNDT/9M/0wAx1NTU0z/6QNTR0NN/03/Tf9H4cfhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShOTgAFHNvbCAwLjU4LjIAAA==",
    code: "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",
    codeHash: "26af7e46df44ffae203b75c3410e262965aa932832c2aa89a2a3ba7d7e6ba5ea",
};
module.exports = { DirectAuctionRootContract };