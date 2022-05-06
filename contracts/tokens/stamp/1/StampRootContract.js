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
                    },
                    {
                        "name": "stampCreationTopup",
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
                    },
                    {
                        "name": "stampCreationTopup",
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
                        "name": "endorsePercentFee",
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
                        "name": "endorsePercentFee",
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
                "name": "_stampCreationTopup",
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
                "name": "_endorsePercentFee",
                "type": "uint16"
            }
        ]
    },
    tvc: "te6ccgECLAEABzQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gspBQQrA8TtRNDXScMB+GaJ+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPCckBgNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwoKAYDPCCCEBxLNuC74wIgghBmDOkRu+MCIIIQfp1jFrvjAhgOBwM8IIIQfJZ2G7rjAiCCEH0Yn7264wIgghB+nWMWuuMCDAoIA3Iw+Eby4Ez4Qm7jANM/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+T+nWMWs7NyXD7AJEw4uMA8gAlCRQAcvhCyMv/cG2AQPRD+ChxWIBA9BYByMs/cliAQPRDyPQAyfhPyM+EgPQA9ADPgcn5AMjPigBAy//J0ANKMPhG8uBM+EJu4wAhk9TR0N7Tf9N/03/Tf9N/0w/R2zww2zzyACULIwBO+En4SscF8uBmIIEnELvy4Gf4AFUE+HFVA/hyVQL4c1j4dAH4dfh2A4ow+Eby4Ez4Qm7jANHbPCaOKyjQ0wH6QDAxyM+HIM5xzwthXlDIz5PyWdhuy3/Lf8t/y3/Lf8sPzclw+wCSXwbiMNs88gAlDSMAGPhR+FL4U/hU+FX4VgRQIIIQJAgQ37rjAiCCEDeQ/ja64wIgghBlPEO7uuMCIIIQZgzpEbrjAhYTEQ8DbjD4RvLgTPhCbuMA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+TmDOkRs7NyXD7AJEw4uMA8gAlEBQABPhKA3Qw+Eby4Ez4Qm7jANHbPCOOISXQ0wH6QDAxyM+HIM6AYs9AXhHPk5TxDu7MzMt/yXD7AJJfA+LjAPIAJRIUAAz4TfhO+FADPDD4RvLgTPhCbuMAIZPU0dDe+kDTf9IA0ds84wDyACUVFAAo7UTQ0//TPzH4Q1jIy//LP87J7VQAQvhJ+ErHBfLgZvgAEsjPhYDKAM+EQM4B+gKAa89AyXD7AAM+MPhG8uBM+EJu4wAhk9TR0N7Tf9N/03/R2zww2zzyACUXIwBE+En4SscF8uBm+Ez4S4IQBfXhAKC1f7zy4Gf4AFj4bPhrMARQIIIQCg2OyrrjAiCCEApdI0u64wIgghAZk6DOuuMCIIIQHEs24LrjAiIdGxkDfjD4RvLgTPhCbuMA0ds8I44lJdDTAfpAMDHIz4cgznHPC2FeIMjPknEs24LLf8t/y3/NyXD7AJJfA+Iw2zzyACUaIwAOcCD4TDL4SwM2MPhG8uBM+EJu4wAhk9TR0N76QNHbPDDbPPIAJRwjABr4SfhKxwXy4Gb4APhqA6Aw+Eby4Ez4Qm7jACGT1NHQ3vpA1NHQ+kDTH9TR0PpA0x/T/9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkil0jS7Ozclw+wCRMOIw2zzyACUeIwL+UxGBCWG58uEVMGim/mD4TL7y4Rb4UKS1P/hw+Fb4VfhU+FP4UvhRVVVeQPhCyMv/cG2AQPRD+ChxWIBA9Bb4UMjLP3JYgED0Q8j0AMn4T8jPhID0APQAz4HJIPkAyM+KAEDL/8nQVcD4Sy7Iz4WIzgH6AnPPC2oh2zzMz4NVsCEfAYrIz5F+kvcqzlWgyM7LH1WAyM7LH8v/y39VQMjLf8t/y3/Lf8sPzc3Nzclw+wD4UNs8yM+HIM6CEC5g2njPC4HLP8lw+wAgAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DAuQw+EJu4wD4RvJzIZPU0dDe+kDU1NTR+EUgbpIwcN74Qrry4GX4AFUC+GpY+G0B+G74b4IK+vCA+HGCEAaOd4D4coIQBfXhAPhzghAMhFiA+HSCEAX14QD4dYEB9Ph2ghAU3JOA+GyCEAvrwgD4a9s88gAkIwCE+Fb4VfhU+FP4UvhR+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg85VsMjLf8t/zMzMyz/Lf8t/y3/Lf8t/yw/Nye1UAhbtRNDXScIBjoDjDSYlAIbtRNDT/9M/0wAx+kDU0dDTf9N/1NTU0z/Tf9N/03/Tf9N/0w/R+Hb4dfh0+HP4cvhx+HD4b/hu+G34bPhr+Gr4Y/hiAm5w7UTQ9AWJcCCIXyBwX2D4dvh1+HT4c/hy+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjJysAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAACvhG8uBMAgr0pCD0oSsqABRzb2wgMC41OC4yAAA=",
    code: "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",
    codeHash: "d9c9e03f3228aef5197e20592d9fa7b0c1d277d81f750f1cd152c40fb41675a3",
};
module.exports = { StampRootContract };