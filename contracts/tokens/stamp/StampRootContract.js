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
            }
        ]
    },
    tvc: "te6ccgECIwEABU4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsgBQQiA8TtRNDXScMB+GaJ+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPBUTBgNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwfHwYCKCCCEDeQ/ja74wIgghB+nWMWu+MCDgcDPCCCEGU8Q7u64wIgghBmDOkRuuMCIIIQfp1jFrrjAgwKCANyMPhG8uBM+EJu4wDTP9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk/p1jFrOzclw+wCRMOLjAPIAHgkQAHL4QsjL/3BtgED0Q/gocViAQPQWAcjLP3JYgED0Q8j0AMn4T8jPhID0APQAz4HJ+QDIz4oAQMv/ydADbjD4RvLgTPhCbuMA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+TmDOkRs7NyXD7AJEw4uMA8gAeCxAABPhKA3Qw+Eby4Ez4Qm7jANHbPCOOISXQ0wH6QDAxyM+HIM6AYs9AXhHPk5TxDu7MzMt/yXD7AJJfA+LjAPIAHg0QAAz4TfhO+FAEUCCCEApdI0u64wIgghAZk6DOuuMCIIIQNxeTqbrjAiCCEDeQ/ja64wIYFhIPAzww+Eby4Ez4Qm7jACGT1NHQ3vpA03/SANHbPOMA8gAeERAAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAEL4SfhKxwXy4Gb4ABLIz4WAygBzz0DOAfoCgGvPQMlw+wAChDD4Qm7jAPhG8nMhk9TR0N76QNN/03/U1NTR+EUgbpIwcN74Qrry4GX4AFUE+GpVA/hsVQL4a1j4bQH4bvhv2zzyABMZAhbtRNDXScIBjoDjDRQeAlJw7UTQ9AWJcCCIXyBw+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4YxUiAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAzYw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8MNs88gAeFxkAGvhJ+ErHBfLgZvgA+GoDoDD4RvLgTPhCbuMAIZPU0dDe+kDU0dD6QNMf1NHQ+kDTH9P/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+SKXSNLs7NyXD7AJEw4jDbPPIAHhoZAFT4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+DzlVQyMt/y3/MzMzLP83J7VQC/lMRgQlhufLhFTBopv5g+Ey+8uEWaKb+YPhLobV/+FCktT/4cF5Q+ELIy/9wbYBA9EP4KHFYgED0FvhQyMs/cliAQPRDyPQAyfhPyM+EgPQA9ADPgckg+QDIz4oAQMv/ydAIKMjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxYh2zwdGwGMzM+DVVDIz5A3M8OizlVAyM7LH1UgyM7LH8v/zc3NyXD7APhQ2zzIz4cgzo0EAAAAAAAAAAAAAAAAAuYNp4jPFss/yXD7ABwASI0IWAAg2roYubBxOdG40QEjGeBKebK4CIki4Hm5abjiGQqI/AA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMAVu1E0NP/0z/TADH6QNTR0NN/03/U1NTTP9H4cPhv+G74bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oSIhABRzb2wgMC41Ny4wAAA=",
    code: "te6ccgECIAEABSEABCSK7VMg4wMgwP/jAiDA/uMC8gsdAgEfA8TtRNDXScMB+GaJ+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPBIQAwNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwcHAMCKCCCEDeQ/ja74wIgghB+nWMWu+MCCwQDPCCCEGU8Q7u64wIgghBmDOkRuuMCIIIQfp1jFrrjAgkHBQNyMPhG8uBM+EJu4wDTP9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk/p1jFrOzclw+wCRMOLjAPIAGwYNAHL4QsjL/3BtgED0Q/gocViAQPQWAcjLP3JYgED0Q8j0AMn4T8jPhID0APQAz4HJ+QDIz4oAQMv/ydADbjD4RvLgTPhCbuMA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+TmDOkRs7NyXD7AJEw4uMA8gAbCA0ABPhKA3Qw+Eby4Ez4Qm7jANHbPCOOISXQ0wH6QDAxyM+HIM6AYs9AXhHPk5TxDu7MzMt/yXD7AJJfA+LjAPIAGwoNAAz4TfhO+FAEUCCCEApdI0u64wIgghAZk6DOuuMCIIIQNxeTqbrjAiCCEDeQ/ja64wIVEw8MAzww+Eby4Ez4Qm7jACGT1NHQ3vpA03/SANHbPOMA8gAbDg0AKO1E0NP/0z8x+ENYyMv/yz/Oye1UAEL4SfhKxwXy4Gb4ABLIz4WAygBzz0DOAfoCgGvPQMlw+wAChDD4Qm7jAPhG8nMhk9TR0N76QNN/03/U1NTR+EUgbpIwcN74Qrry4GX4AFUE+GpVA/hsVQL4a1j4bQH4bvhv2zzyABAWAhbtRNDXScIBjoDjDREbAlJw7UTQ9AWJcCCIXyBw+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4YxIfAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAzYw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8MNs88gAbFBYAGvhJ+ErHBfLgZvgA+GoDoDD4RvLgTPhCbuMAIZPU0dDe+kDU0dD6QNMf1NHQ+kDTH9P/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+SKXSNLs7NyXD7AJEw4jDbPPIAGxcWAFT4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+DzlVQyMt/y3/MzMzLP83J7VQC/lMRgQlhufLhFTBopv5g+Ey+8uEWaKb+YPhLobV/+FCktT/4cF5Q+ELIy/9wbYBA9EP4KHFYgED0FvhQyMs/cliAQPRDyPQAyfhPyM+EgPQA9ADPgckg+QDIz4oAQMv/ydAIKMjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxYh2zwaGAGMzM+DVVDIz5A3M8OizlVAyM7LH1UgyM7LH8v/zc3NyXD7APhQ2zzIz4cgzo0EAAAAAAAAAAAAAAAAAuYNp4jPFss/yXD7ABkASI0IWAAg2roYubBxOdG40QEjGeBKebK4CIki4Hm5abjiGQqI/AA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMAVu1E0NP/0z/TADH6QNTR0NN/03/U1NTTP9H4cPhv+G74bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oR8eABRzb2wgMC41Ny4wAAA=",
    codeHash: "7dbdcd813f3f9738bf097600c2bc9bc4414c177e09edd813ed3098bbeea87796",
};
module.exports = { StampRootContract };