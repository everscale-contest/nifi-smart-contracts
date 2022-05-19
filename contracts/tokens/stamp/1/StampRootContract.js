const StampRootContract = {
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
                        "name": "creationTopup",
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
                        "type": "uint128"
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
                "name": "create",
                "inputs": [
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
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
                "name": "setCreationParameters",
                "inputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    }
                ],
                "outputs": []
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
                        "name": "creationTopup",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "setStampParameters",
                "inputs": [
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
                        "name": "endorseIncomePercent",
                        "type": "uint16"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getStampParameters",
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
                    },
                    {
                        "name": "endorseIncomePercent",
                        "type": "uint16"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "TK_CT_nifi_stamp1_1",
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
                "name": "_creationTopup",
                "type": "uint128"
            },
            {
                "name": "_minCreationFee",
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
                "name": "_tokenCode",
                "type": "cell"
            },
            {
                "name": "_totalSupply",
                "type": "uint64"
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
                "name": "_endorseIncomePercent",
                "type": "uint16"
            }
        ]
    },
    tvc: "te6ccgECLAEABwsAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gspBQQrA8LtRNDXScMB+GaJ+Gkh2zzTAAGOHIMI1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8IR8GA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPCgoBgM8IIIQN5D+NrvjAiCCEGYM6RG74wIgghB+nWMWu+MCGg4HAzwgghB8lnYbuuMCIIIQfRifvbrjAiCCEH6dYxa64wIMCggDcjD4RvLgTPhCbuMA0z/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5P6dYxazs3JcPsAkTDi4wDyACcJHABy+ELIy/9wbYBA9EP4KHFYgED0FgHIyz9yWIBA9EPI9ADJ+E/Iz4SA9AD0AM+ByfkAyM+KAEDL/8nQA0ow+Eby4Ez4Qm7jACGT1NHQ3tN/03/Tf9N/03/TD9HbPDDbPPIAJwslAE74SfhKxwXy4GYggScQu/LgZ/gAVQT4cVUD+HJVAvhzWPh0Afh1+HYDijD4RvLgTPhCbuMA0ds8Jo4rKNDTAfpAMDHIz4cgznHPC2FeUMjPk/JZ2G7Lf8t/y3/Lf8t/yw/NyXD7AJJfBuIw2zzyACcNJQAY+FH4UvhT+FT4VfhWBFAgghBZ4Kb0uuMCIIIQXx6CUbrjAiCCEGU8Q7u64wIgghBmDOkRuuMCFRMRDwNuMPhG8uBM+EJu4wDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5OYM6RGzs3JcPsAkTDi4wDyACcQHAAE+EoDdDD4RvLgTPhCbuMA0ds8I44hJdDTAfpAMDHIz4cgzoBiz0BeEc+TlPEO7szMy3/JcPsAkl8D4uMA8gAnEhwADPhN+E74UAM6MPhG8uBM+EJu4wAhk9TR0N7Tf9N/0ds8MNs88gAnFCUAKvhJ+ErHBfLgZly88uBn+AAB+Gz4awOKMPhG8uBM+EJu4wAhldMf1NHQktMf4tP/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+TZ4Kb0s7NyXD7AJEw4jDbPPIAJxYlAvxTEYEJYbny4RUwaKb+YPhMvvLhFvhQpLU/+HD4VvhV+FT4UvhRVRQB+Elw+Ekg+ELIy/9wbYBA9EP4KHFYgED0FvhQyMs/cliAQPRDyPQAyfhPyM+EgPQA9ADPgckg+QDIz4oAQMv/ydBVsPhLLcjPhYjOAfoCc88LaiHbPMwZFwGOz4NVoMjPkEUuuZLOVZDIzssfVXDIzssfy//Lf1UwyMt/y3/Lf8sPzc3Nzclw+wD4UNs8yM+HIM6CEC5g2njPC4HLP8lw+wAYAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DBFAgghAZk6DOuuMCIIIQIamdqLrjAiCCEDcXk6m64wIgghA3kP42uuMCJCIeGwM8MPhG8uBM+EJu4wAhk9TR0N76QNN/0gDR2zzjAPIAJx0cACjtRNDT/9M/MfhDWMjL/8s/zsntVABC+En4SscF8uBm+AASyM+FgMoAz4RAzgH6AoBrz0DJcPsAAtYw+EJu4wD4RvJzIZPU0dDe+kDTf9N/1NTU0fhFIG6SMHDe+EK68uBl+ABVBPhqWPhtAfhu+G+CCvrwgPhxghAGjneA+HKCEAX14QD4c4IQDIRYgPh0ghAF9eEA+HWBAfT4dgH4bPhr2zzyAB8lAhbtRNDXScIBjoDjDSAnAm5w7UTQ9AWJcCCIXyBwX2D4dvh1+HT4c/hy+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjISsAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADdDD4RvLgTPhCbuMA0ds8Io4hJNDTAfpAMDHIz4cgzoBiz0BeAc+ShqZ2ost/y3/JcPsAkVviMNs88gAnIyUACPhM+EsDNjD4RvLgTPhCbuMAIZPU0dDe+kDR2zww2zzyACcmJQCE+Fb4VfhU+FP4UvhR+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg85VsMjLf8t/zMzMyz/Lf8t/y3/Lf8t/yw/Nye1UABr4SfhKxwXy4Gb4APhqAIbtRNDT/9M/0wAx+kDU0dDTf9N/1NTU0z/Tf9N/03/Tf9N/0w/R+Hb4dfh0+HP4cvhx+HD4b/hu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KErKgAUc29sIDAuNjEuMAAA",
    code: "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",
    codeHash: "10e373a79c7bb33b6633313c073a9f2e415f65be8ac3688f28841a26154c9e0f",
};
module.exports = { StampRootContract };