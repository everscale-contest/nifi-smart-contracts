const CollectionRootContract = {
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
                        "name": "creationMinValue",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFee",
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
                        "name": "collectionCode",
                        "type": "cell"
                    },
                    {
                        "name": "colTokenCode",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getManager",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "changeManager",
                "inputs": [
                    {
                        "name": "newManager",
                        "type": "address"
                    }
                ],
                "outputs": []
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
                    }
                ]
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
                "name": "createCollection",
                "inputs": [
                    {
                        "name": "creator",
                        "type": "address"
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
                        "name": "limit",
                        "type": "uint64"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "mintCost",
                        "type": "uint128"
                    },
                    {
                        "name": "level1",
                        "type": "string[]"
                    },
                    {
                        "name": "level2",
                        "type": "string[]"
                    },
                    {
                        "name": "level3",
                        "type": "string[]"
                    },
                    {
                        "name": "level4",
                        "type": "string[]"
                    },
                    {
                        "name": "level5",
                        "type": "string[]"
                    },
                    {
                        "name": "hash",
                        "type": "string"
                    },
                    {
                        "name": "startTime",
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
                "name": "getCollectionAddress",
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
                "name": "getTokenAddress",
                "inputs": [
                    {
                        "name": "col",
                        "type": "uint64"
                    },
                    {
                        "name": "id1",
                        "type": "uint8"
                    },
                    {
                        "name": "id2",
                        "type": "uint8"
                    },
                    {
                        "name": "id3",
                        "type": "uint8"
                    },
                    {
                        "name": "id4",
                        "type": "uint8"
                    },
                    {
                        "name": "id5",
                        "type": "uint8"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "SRC_CT_nifi_col1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
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
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_creationFee",
                "type": "uint128"
            },
            {
                "name": "_creationMinValue",
                "type": "uint128"
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
                "name": "_colTokenCode",
                "type": "cell"
            },
            {
                "name": "_collectionCode",
                "type": "cell"
            },
            {
                "name": "_totalSupply",
                "type": "uint64"
            }
        ]
    },
    tvc: "te6ccgECKQEAB7gAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsmBwQoAQAFAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rkPBgEO0x8B2zzyPAgDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8JSUIAiggghA3kP42u+MCIIIQbP0nirvjAhQJBFAgghA+YSYhuuMCIIIQXz/SlbrjAiCCEGYM6RG64wIgghBs/SeKuuMCEQ4MCgN0MPhG8uBM+EJu4wDR2zwjjiEl0NMB+kAwMcjPhyDOgGLPQF4Rz5Oz9J4qzMzLP8lw+wCSXwPi4wDyACQLHwAM+E34TvhRA24w+Eby4Ez4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk5gzpEbOzclw+wCRMOLjAPIAJA0fAAT4SgLsMPhCbuMA+Ebyc/pBldTR0PpA39cNf5XU0dDTf9/XDX+V1NHQ03/fINdKwAGT1NHQ3tQg10rAAZPU0dDe1CDXSsABk9TR0N7U1NH4RSBukjBw3vhCuvLgZfgAVQX4alUE+GxVA/hrVQL4bVj4bgH4cPhv2zzyAA8iAhbtRNDXScIBio6A4iQQBJ5w7UTQ9AWNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4anD4a3D4bIj4bYj4boj4b4j4cHD4cYBA9A7yvdcL//hicPhjKCgoKAOGMPhG8uBM+EJu4wDTP9MH0wfTB9MH0wfR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5L5hJiGzs3JcPsAkTDi4wDyACQSHwH++ELIy/9wbYBA9EP4KHFYgED0FibIyz9yWIBA9EPI9ADJ+FDIz4SA9AD0AM+ByfhCyMv/cG2AQPRD+ChxWIBA9BYB+QDIz4oAQMv/ydByWIBA9BZVBcjLP3NYgED0Q1UEyMsHdFiAQPRDVQPIywd1WIBA9ENVAsjLB3ZYgED0QxMAYFjIywd3WIBA9EMByMsHeFiAQPRDyPQAyfhPyM+EgPQA9ADPgcn5AMjPigBAy//J0ARQIIIQGZOgzrrjAiCCECrx3OS64wIgghAzBf4duuMCIIIQN5D+NrrjAiEeFxUDXjD4RvLgTPhCbuMA+kGV1NHQ+kDf1w1/ldTR0NN/39cMAJXU0dDSAN/R2zzjAPIAJBYfAEL4SfhKxwXy4Gb4ABLIz4WAygBzz0DOAfoCgGvPQMlw+wAC/jD4RvLgTPhCbuMA+kGV1NHQ+kDfINdKwAGT1NHQ3tQg10rAAZPU0dDe1NcNP5XU0dDTP9/XDR+V1NHQ0x/f1w1/ldTR0NN/3yDHAZPU0dDe0x/0BFlvAgEgxwGT1NHQ3tMf9ARZbwIBIMcBk9TR0N7TH/QEWW8CASDHAZPU0dAkGAK83tMf9ARZbwIBIMcBk9TR0N7TH/QEWW8CASDXS8ABAcAAsJPU0dDe1NcNH5XU0dDTH9/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5LMF/h2zs3JcPsAkTDi2zzyABkiAfxopvtg8tBIU4iBCWG58uEVMGim/mD4TL7y4RYnghAdzWUAvvLhF2im/mD4S6G1f/hRpLU/+HFVgF5w+E9VKgL4SlUO+ELIy/9wbYBA9EP4KHFYgED0FvhRyMs/cliAQPRDyPQAyfhQyM+EgPQA9ADPgckg+QDIz4oAQMv/ydAaA/5V8IARYVYRyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFiHbPMzPg1XgyM+RsNXxis5V0MjOzMzLP8zLH8t/VWDIAW8iAssf9AABbyICyx/0AAFvIgLLH/QAVTDIAW8iAssf9AABbyICyx/0AMzLH83Nzc3JcPsA+FHbPMjPhyDOHRwbADaNBAAAAAAAAAAAAAAAAAY7fYc4zxbLP8lw+wAASI0IWAYqeC5H4jnp5mb/hmo+3b1R1t+U3hzGXsC7d8+que4odAA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMDcjD4RvLgTPhCbuMA0z/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5Krx3OSzs3JcPsAkTDi4wDyACQgHwAo7UTQ0//TPzH4Q1jIy//LP87J7VQAcvhCyMv/cG2AQPRD+ChxWIBA9BYByMs/cliAQPRDyPQAyfhQyM+EgPQA9ADPgcn5AMjPigBAy//J0AM2MPhG8uBM+EJu4wD6QZXU0dD6QN/R2zzbPPIAJCMiAGD4UfhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4POVWDIy3/Lf8zMzFnIzMs/zc3J7VQAGvhJ+ErHBfLgZvgA+GoAYu1E0NP/0z/TADH6QNTR0NN/03/U1NTU0dDU0z/R+HH4cPhv+G74bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oSgnABRzb2wgMC41Mi4wAAA=",
    code: "te6ccgECJgEAB4sABCSK7VMg4wMgwP/jAiDA/uMC8gsjBAElAQACAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rkMAwEO0x8B2zzyPAUDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8IiIFAiggghA3kP42u+MCIIIQbP0nirvjAhEGBFAgghA+YSYhuuMCIIIQXz/SlbrjAiCCEGYM6RG64wIgghBs/SeKuuMCDgsJBwN0MPhG8uBM+EJu4wDR2zwjjiEl0NMB+kAwMcjPhyDOgGLPQF4Rz5Oz9J4qzMzLP8lw+wCSXwPi4wDyACEIHAAM+E34TvhRA24w+Eby4Ez4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk5gzpEbOzclw+wCRMOLjAPIAIQocAAT4SgLsMPhCbuMA+Ebyc/pBldTR0PpA39cNf5XU0dDTf9/XDX+V1NHQ03/fINdKwAGT1NHQ3tQg10rAAZPU0dDe1CDXSsABk9TR0N7U1NH4RSBukjBw3vhCuvLgZfgAVQX4alUE+GxVA/hrVQL4bVj4bgH4cPhv2zzyAAwfAhbtRNDXScIBio6A4iENBJ5w7UTQ9AWNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4anD4a3D4bIj4bYj4boj4b4j4cHD4cYBA9A7yvdcL//hicPhjJSUlJQOGMPhG8uBM+EJu4wDTP9MH0wfTB9MH0wfR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5L5hJiGzs3JcPsAkTDi4wDyACEPHAH++ELIy/9wbYBA9EP4KHFYgED0FibIyz9yWIBA9EPI9ADJ+FDIz4SA9AD0AM+ByfhCyMv/cG2AQPRD+ChxWIBA9BYB+QDIz4oAQMv/ydByWIBA9BZVBcjLP3NYgED0Q1UEyMsHdFiAQPRDVQPIywd1WIBA9ENVAsjLB3ZYgED0QxAAYFjIywd3WIBA9EMByMsHeFiAQPRDyPQAyfhPyM+EgPQA9ADPgcn5AMjPigBAy//J0ARQIIIQGZOgzrrjAiCCECrx3OS64wIgghAzBf4duuMCIIIQN5D+NrrjAh4bFBIDXjD4RvLgTPhCbuMA+kGV1NHQ+kDf1w1/ldTR0NN/39cMAJXU0dDSAN/R2zzjAPIAIRMcAEL4SfhKxwXy4Gb4ABLIz4WAygBzz0DOAfoCgGvPQMlw+wAC/jD4RvLgTPhCbuMA+kGV1NHQ+kDfINdKwAGT1NHQ3tQg10rAAZPU0dDe1NcNP5XU0dDTP9/XDR+V1NHQ0x/f1w1/ldTR0NN/3yDHAZPU0dDe0x/0BFlvAgEgxwGT1NHQ3tMf9ARZbwIBIMcBk9TR0N7TH/QEWW8CASDHAZPU0dAhFQK83tMf9ARZbwIBIMcBk9TR0N7TH/QEWW8CASDXS8ABAcAAsJPU0dDe1NcNH5XU0dDTH9/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5LMF/h2zs3JcPsAkTDi2zzyABYfAfxopvtg8tBIU4iBCWG58uEVMGim/mD4TL7y4RYnghAdzWUAvvLhF2im/mD4S6G1f/hRpLU/+HFVgF5w+E9VKgL4SlUO+ELIy/9wbYBA9EP4KHFYgED0FvhRyMs/cliAQPRDyPQAyfhQyM+EgPQA9ADPgckg+QDIz4oAQMv/ydAXA/5V8IARYVYRyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFiHbPMzPg1XgyM+RsNXxis5V0MjOzMzLP8zLH8t/VWDIAW8iAssf9AABbyICyx/0AAFvIgLLH/QAVTDIAW8iAssf9AABbyICyx/0AMzLH83Nzc3JcPsA+FHbPMjPhyDOGhkYADaNBAAAAAAAAAAAAAAAAAY7fYc4zxbLP8lw+wAASI0IWAYqeC5H4jnp5mb/hmo+3b1R1t+U3hzGXsC7d8+que4odAA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMDcjD4RvLgTPhCbuMA0z/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5Krx3OSzs3JcPsAkTDi4wDyACEdHAAo7UTQ0//TPzH4Q1jIy//LP87J7VQAcvhCyMv/cG2AQPRD+ChxWIBA9BYByMs/cliAQPRDyPQAyfhQyM+EgPQA9ADPgcn5AMjPigBAy//J0AM2MPhG8uBM+EJu4wD6QZXU0dD6QN/R2zzbPPIAISAfAGD4UfhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4POVWDIy3/Lf8zMzFnIzMs/zc3J7VQAGvhJ+ErHBfLgZvgA+GoAYu1E0NP/0z/TADH6QNTR0NN/03/U1NTU0dDU0z/R+HH4cPhv+G74bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oSUkABRzb2wgMC41Mi4wAAA=",
    codeHash: "32e43b6e6481a00ea640177be9bec7ad391ab6532ebb8c936f74dcfa2fe3c139",
};
module.exports = { CollectionRootContract };