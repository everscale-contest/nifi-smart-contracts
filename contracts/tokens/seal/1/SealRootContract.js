const SealRootContract = {
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
                        "name": "creatorPercentReward",
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
                        "name": "creationFixIncome",
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
                        "name": "creationFixIncome",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "setParameters",
                "inputs": [
                    {
                        "name": "endorseStampCost",
                        "type": "uint128"
                    },
                    {
                        "name": "endorseRootFixIncome",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ],
        "data": [],
        "events": [
            {
                "name": "TK_CT_nifi_seal_1",
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
                "name": "_creationFixIncome",
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
                "name": "_endorseStampCost",
                "type": "uint128"
            },
            {
                "name": "_endorseRootFixIncome",
                "type": "uint128"
            }
        ]
    },
    tvc: "te6ccgECKgEABkYAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsnBQQpA8TtRNDXScMB+GaJ+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPBcVBgNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwmJgYDPCCCECGpnai74wIgghBlPEO7u+MCIIIQfp1jFrvjAhgMBwIoIIIQZgzpEbrjAiCCEH6dYxa64wIKCANyMPhG8uBM+EJu4wDTP9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk/p1jFrOzclw+wCRMOLjAPIAJQkSAHL4QsjL/3BtgED0Q/gocViAQPQWAcjLP3JYgED0Q8j0AMn4T8jPhID0APQAz4HJ+QDIz4oAQMv/ydADbjD4RvLgTPhCbuMA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+TmDOkRs7NyXD7AJEw4uMA8gAlCxIABPhKBFAgghA3F5OpuuMCIIIQN5D+NrrjAiCCEF8eglG64wIgghBlPEO7uuMCFBEPDQN0MPhG8uBM+EJu4wDR2zwjjiEl0NMB+kAwMcjPhyDOgGLPQF4Rz5OU8Q7uzMzLf8lw+wCSXwPi4wDyACUOEgAM+E34TvhQAzow+Eby4Ez4Qm7jACGT1NHQ3tN/03/R2zww2zzyACUQIAAg+En4SscF8uBm+AAB+Gz4awM8MPhG8uBM+EJu4wAhk9TR0N76QNN/0gDR2zzjAPIAJRMSACjtRNDT/9M/MfhDWMjL/8s/zsntVABC+En4SscF8uBm+AASyM+FgMoAz4RAzgH6AoBrz0DJcPsAAqQw+EJu4wD4RvJzIZPU0dDe+kDTf9N/1NTU0fhFIG6SMHDe+EK68uBl+ABVBPhqVQP4bFUC+GtY+G0B+G74b4IQBfXhAPhxghAF9eEA+HLbPPIAFSACFu1E0NdJwgGOgOMNFiUCXnDtRND0BYlwIIhfIHBfIPhy+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjFykAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAEUCCCEApdI0u64wIgghAZhIxOuuMCIIIQGZOgzrrjAiCCECGpnai64wIfHRsZA3Qw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM6AYs9AXgHPkoamdqLLf8t/yXD7AJFb4jDbPPIAJRogAAj4TPhLAzYw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8MNs88gAlHCAAGvhJ+ErHBfLgZvgA+GoDOjD4RvLgTPhCbuMAIZPU0dDe03/Tf9HbPDDbPPIAJR4gACD4SfhKxwXy4Gb4AAH4cfhyA6Aw+Eby4Ez4Qm7jACGT1NHQ3vpA1NHQ+kDTH9TR0PpA0x/T/9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkil0jS7Ozclw+wCRMOIw2zzyACUhIABk+FL4UfhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4POVXDIy3/Lf8zMzMs/y3/Lf83J7VQC/FMRgQlhufLhFTBopv5g+Ey+8uEWaKb+YPhLobV/+FCktT/4cPhS+FFVUl5A+ELIy/9wbYBA9EP4KHFYgED0FvhQyMs/cliAQPRDyPQAyfhPyM+EgPQA9ADPgckg+QDIz4oAQMv/ydBVgFUJKsjPhYjOAfoCc88LaiHbPMzPgyQiAXxVcMjPkUFQY4LOVWDIzssfVUDIzssfy//LfwHIy3/Nzc3NyXD7APhQ2zzIz4cgzoIQX8973M8Lgcs/yXD7ACMASI0IWAAg2roYubBxOdG40QEjGeBKebK4CIki4Hm5abjiGQqI/AA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMAZu1E0NP/0z/TADH6QNTR0NN/03/U1NTTP9N/03/R+HL4cfhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShKSgAFHNvbCAwLjU4LjIAAA==",
    code: "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",
    codeHash: "4b1cbef29ac4f87acc3e5bb2ec19cead9533a082bbad00c2e9cf1aafa062ebb4",
};
module.exports = { SealRootContract };