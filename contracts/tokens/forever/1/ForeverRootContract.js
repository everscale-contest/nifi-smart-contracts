const ForeverRootContract = {
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
                "name": "setCreationFee",
                "inputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getCreationFee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "setForeverFee",
                "inputs": [
                    {
                        "name": "delForeverFee",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getForeverFee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "delForeverFee",
                        "type": "uint128"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "TK_CT_nifi_for1_1",
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
                "name": "_tokenCode",
                "type": "cell"
            },
            {
                "name": "_totalSupply",
                "type": "uint64"
            },
            {
                "name": "_delForeverFee",
                "type": "uint128"
            }
        ]
    },
    tvc: "te6ccgECLAEABm8AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gspBQQrA8TtRNDXScMB+GaJ+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPB4cBgNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwoKAYDPCCCEDeQ/ja74wIgghBlPEO7u+MCIIIQf5ggJ7vjAhcOBwM8IIIQZgzpEbrjAiCCEH6dYxa64wIgghB/mCAnuuMCDAoIA3Qw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM6AYs9AXgHPk/5ggJ7Lf8t/yXD7AJFb4jDbPPIAJwkiAAj4TPhLA3Iw+Eby4Ez4Qm7jANM/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+T+nWMWs7NyXD7AJEw4uMA8gAnCxkAcvhCyMv/cG2AQPRD+ChxWIBA9BYByMs/cliAQPRDyPQAyfhPyM+EgPQA9ADPgcn5AMjPigBAy//J0ANuMPhG8uBM+EJu4wDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5OYM6RGzs3JcPsAkTDi4wDyACcNGQAE+EoEUCCCEEHmdU+64wIgghBMp0FEuuMCIIIQXWml4rrjAiCCEGU8Q7u64wIVExEPA3Qw+Eby4Ez4Qm7jANHbPCOOISXQ0wH6QDAxyM+HIM6AYs9AXhHPk5TxDu7MzMt/yXD7AJJfA+LjAPIAJxAZAAz4TfhO+FADaDD4RvLgTPhCbuMA0ds8IY4cI9DTAfpAMDHIz4cgzoIQ3Wml4s8Lgct/yXD7AJEw4uMA8gAnEhkABPhRAzYw+Eby4Ez4Qm7jACGT1NHQ3tN/0ds8MNs88gAnFCIAGvhJ+ErHBfLgZvgA+HEDOjD4RvLgTPhCbuMAIZPU0dDe03/Tf9HbPDDbPPIAJxYiACD4SfhKxwXy4Gb4AAH4bPhrBFAgghAKXSNLuuMCIIIQGZOgzrrjAiCCEDcXk6m64wIgghA3kP42uuMCIR8bGAM8MPhG8uBM+EJu4wAhk9TR0N76QNN/0gDR2zzjAPIAJxoZACjtRNDT/9M/MfhDWMjL/8s/zsntVABC+En4SscF8uBm+AASyM+FgMoAz4RAzgH6AoBrz0DJcPsAApQw+EJu4wD4RvJzIZPU0dDe+kDTf9N/1NTU0fhFIG6SMHDe+EK68uBl+ABVBPhqVQP4bFUC+GtY+G0B+G74b4IQBfXhAPhx2zzyABwiAhbtRNDXScIBjoDjDR0nAlhw7UTQ9AWJcCCIXyBwIPhx+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4Yx4rAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAzYw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8MNs88gAnICIAGvhJ+ErHBfLgZvgA+GoDoDD4RvLgTPhCbuMAIZPU0dDe+kDU0dD6QNMf1NHQ+kDTH9P/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+SKXSNLs7NyXD7AJEw4jDbPPIAJyMiAFz4UfhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4POVWDIy3/Lf8zMzMs/y3/Nye1UAv5TEYEJYbny4RUwaKb+YPhMvvLhFmim/mD4S6G1f/hQpLU/+HD4UVVRXkD4QsjL/3BtgED0Q/gocViAQPQW+FDIyz9yWIBA9EPI9ADJ+E/Iz4SA9AD0AM+BySD5AMjPigBAy//J0FVwVQgpyM+FiM4B+gJzzwtqIds8zM+DVWDIJiQBbM+Q9eLrPs5VUMjOyx9VMMjOyx/L/8t/zc3NyXD7APhQ2zzIz4cgzoIQY9kPPM8Lgcs/yXD7ACUASI0IWAAg2roYubBxOdG40QEjGeBKebK4CIki4Hm5abjiGQqI/AA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMAXu1E0NP/0z/TADH6QNTR0NN/03/U1NTTP9N/0fhx+HD4b/hu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KErKgAUc29sIDAuNTguMgAA",
    code: "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",
    codeHash: "1a8937162bb3166e6ec3f425eabe9db2635662c3f93015a7c8a84fa2907b67e1",
};
module.exports = { ForeverRootContract };