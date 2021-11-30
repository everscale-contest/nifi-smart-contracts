const CollectionContract = {
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
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "manager",
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
                        "name": "tokenCode",
                        "type": "cell"
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
                    }
                ],
                "outputs": []
            },
            {
                "name": "mint",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
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
                "outputs": []
            },
            {
                "name": "getTokenAddress",
                "inputs": [
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
                        "name": "id",
                        "type": "uint64"
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
                        "name": "totalSupply",
                        "type": "uint64"
                    },
                    {
                        "name": "limit",
                        "type": "uint64"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "getLevels",
                "inputs": [],
                "outputs": [
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
                "name": "TK_MT_nifi_col1_1",
                "inputs": [
                    {
                        "name": "collectionId",
                        "type": "uint64"
                    },
                    {
                        "name": "index",
                        "type": "uint32"
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
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_manager",
                "type": "address"
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
                "type": "uint32"
            },
            {
                "name": "_limit",
                "type": "uint64"
            },
            {
                "name": "_creatorFees",
                "type": "uint32"
            },
            {
                "name": "_mintCost",
                "type": "uint128"
            },
            {
                "name": "_level1",
                "type": "string[]"
            },
            {
                "name": "_level2",
                "type": "string[]"
            },
            {
                "name": "_level3",
                "type": "string[]"
            },
            {
                "name": "_level4",
                "type": "string[]"
            },
            {
                "name": "_level5",
                "type": "string[]"
            }
        ]
    },
    tvc: "te6ccgECKgEACE0AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsnBwQpAQAFAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwEiBgEI2zzyPAgDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8JiYIAiggghAhuIrJu+MCIIIQZgzpEbvjAhYJBFAgghA3kP42uuMCIIIQUnswprrjAiCCEFi8gHa64wIgghBmDOkRuuMCFA4MCgNuMPhG8uBM+EJu4wDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5OYM6RGzs3JcPsAkTDi4wDyACULGgAE+E0DxjD4RvLgTPhCbuMA0ds8JY5KJ9DTAfpAMDHIz4cgznHPC2FeQMjPk2LyAdoBbyICyx/0AAFvIgLLH/QAAW8iAssf9ABZyAFvIgLLH/QAAW8iAssf9ADNzclw+wCSXwXi4wDyACUNGgAU+FX4VvhX+Fj4WQOaMPhG8uBM+EJu4wD6QZXU0dD6QN/XDQeV1NHQ0wff1w0HldTR0NMH39cNB5XU0dDTB9/XDQeV1NHQ0wff1w0HldTR0NMH39HbPNs88gAlDyAB/PhR+FK58uBn+En4TccF8uBmaKb+YPhUvPLgafhRpLUf+HH4QsjL/3BtgED0Q/hKcViAQPQW+ChyWIBA9Bb4S8jLP3NYgED0QyXIywd0WIBA9EMkyMsHdViAQPRDI8jLB3ZYgED0QyLIywd3WIBA9EMhyMsHeFiAQPRDyPQAyRAD/vhQyM+EgPQA9ADPgckg+QDIz4oAQMv/ydD4UfhT+ExVCcjPkCXt9ErOVSDIzssfyx/NyQHIz4WIzovgAAAAAAAAAAAAAAAAAGDPFs+DWCDbPM8Uz4PMyYBA+wBeMPhR+EvbPMjPhyDOjQQAAAAAAAAAAAAAAAAEDG4CeM8Wyz8TEhEAIMsfywfLB8sHywfLB8lw+wAASI0IWAYqeC5H4jnp5mb/hmo+3b1R1t+U3hzGXsC7d8+que4odAA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMDXjD4RvLgTPhCbuMA+kGV1NHQ+kDf1w1/ldTR0NN/39cMAJXU0dDSAN/R2zzjAPIAJRUaAEL4SfhNxwXy4Gb4ABLIz4WAygBzz0DOAfoCgGvPQMlw+wAEUCCCEBRKeH664wIgghAZk6DOuuMCIIIQG8HbQbrjAiCCECG4ism64wIeHBkXA4Yw+Eby4Ez4Qm7jANHbPCeOKinQ0wH6QDAxyM+HIM5xzwthXmDIz5KG4ismyz/MzMs/yz/Oyx/NyXD7AJJfB+LjAPIAJRgaABz4S/hO+E/4UfhS+Ez4UwOCMPhG8uBM+EJu4wDTB9MH0wfTB9MH0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+SbwdtBs7NyXD7AJEw4uMA8gAlGxoAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAO74QsjL/3BtgED0Q/hKcViAQPQW+ChyWIBA9Bb4S8jLP3NYgED0Q1UEyMsHdFiAQPRDVQPIywd1WIBA9ENVAsjLB3ZYgED0Q1jIywd3WIBA9EMByMsHeFiAQPRDyPQAyfhQyM+EgPQA9ADPgcn5AMjPigBAy//J0AM2MPhG8uBM+EJu4wD6QZXU0dD6QN/R2zzbPPIAJR0gABr4SfhNxwXy4Gb4APhtAv4w+EJu4wD4RvJz+kGV1NHQ+kDf+kGV1NHQ+kDfINdKwAGT1NHQ3tQg10rAAZPU0dDe1NcNP5XU0dDTP98g10vAAQHAALCT1NHQ3tTXDR+V1NHQ0x/f1w1/ldTR0NN/3yDHAZPU0dDe0x/0BFlvAgEgxwGT1NHQ3tMf9ARZbwIBIh8C3iDHAZPU0dDe0x/0BFlvAgEgxwGT1NHQ3tMf9ARZbwIBIMcBk9TR0N7TH/QEWW8CAdGI+En4SscF8uhlVQv4bFUK+G1VCfhuVQj4b1UG+HBVBvhyVQX4c1UE+HRVA/h1VQL4dlj4dwH4ePh52zzyACEgAM7tR3CAGm+HgBtvgjCAGnBkXwr4Q/hCyMv/yz/Pg87LP1XQyM5VwMjOzMzMyx/LP8sfy39VQMgBbyICyx/0AAFvIgLLH/QAAW8iAssf9ABZyAFvIgLLH/QAAW8iAssf9ADNzc3Nye1UADBNZXRob2QgZm9yIHRoZSByb290IG9ubHkCFu1E0NdJwgGKjoDiJSMC/HDtRND0BXD4QPhB+EL4Q/hE+EX4RvhH+Ej4SXErgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE33IsgED0DpPXCz+RcOKNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQgiF8gcCkkAFJfQG1vAnBtbwJwbW8CcG1vAnBtbwKAGm+A7VeAQPQO8r3XC//4YnD4YwDm7UTQ0//TP9MAMfpA0z/U0dD6QNTR0PpA1NTU0x/TP9Mf03/U0dDTH/QEWW8CAdMf9ARZbwIB0x/0BFlvAgHU0dDTH/QEWW8CAdMf9ARZbwIB0XD4QPhB+EL4Q/hE+EX4RvhH+Ej4SVX5gBpvgO1X+GP4YgAK+Eby4EwCCvSkIPShKSgAFHNvbCAwLjUyLjAAAA==",
    code: "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",
    codeHash: "4c23116990541ceaff336bfe35362d59a6ff42927d8f815f277254ba3fe25da1",
};
module.exports = { CollectionContract };