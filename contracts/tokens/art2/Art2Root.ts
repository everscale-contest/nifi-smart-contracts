const Art2RootContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "time"
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
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "seriesCode",
                        "type": "cell"
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
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
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
                "name": "createSerie",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "limit",
                        "type": "uint128"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "creatorFees",
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
                "name": "getSeriesAddress",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
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
                        "name": "serie",
                        "type": "uint128"
                    },
                    {
                        "name": "token",
                        "type": "uint128"
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
                "name": "SR_MT_art2_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "te6ccgECIgEABq8AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsfBQQhAsyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds8+Edu8nwZBgFCItDTA/pAMPhpqTgA3CHHANwh1w0f8rwh3QHbPPhHbvJ8BgIoIIIQIcCQQrvjAiCCEGnHj0674wIRBwRQIIIQN5D+NrrjAiCCED7/k+y64wIgghBmDOkRuuMCIIIQacePTrrjAg8MCggDbDD4Qm7jANHbPCOOISXQ0wH6QDAxyM+HIM6AYs9AXhHPk6cePTrMzMt/yXD7AJJfA+LjAH/4Zx4JHAISiIhb+E34TvhRISEDZjD4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk5gzpEbOzclw+wCRMOLjAH/4Zx4LHAAE+EoDbjD4Qm7jANN/03/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5L7/k+yzs3JcPsAkTDi4wB/+GceDRwB/o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABG34QsjL/3BYgED0Q/gocViAQPQWI8jLf3JYgED0Q8j0AMn4UMjPhID0APQAz4HJbfhCyMv/cFiAQPRDIfkAyM+KAEDL/8nQcViAQPQWI8jLf3JYgED0Q8j0AMkOAD74T8jPhID0APQAz4HJIPkAyM+KAEDL/8nQbBNZW2whA1Yw+EJu4wD6QZXU0dD6QN/XDX+V1NHQ03/f1wwAldTR0NIA39HbPOMAf/hnHhAcAEr4SfhKxwXy4Gb4AFRxIMjPhYDKAHPPQM4B+gKAa89AyXD7AF8DBE4ggghavV664wIgghAPiRrLuuMCIIIQGZOgzrrjAiCCECHAkEK64wIbGBYSA7Qw+EJu4wD6QZXU0dD6QN/XDX+V1NHQ03/f1w3/ldTR0NP/39cNH5XU0dDTH9/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5KHAkEKzs3JcPsAkTDi2zx/+GceExwB/I0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGim+2Dy0EhTEYEJYbny4RVopv5g+Ey+8uEWaKb+YPhLobV/+FGktX/4cVM0+E8o+E74TSxt+ELIy/9wWIBA9EP4KHFYgED0FvhRyMt/cliAQPRDyPQAyfhQyBQB8s+EgPQA9ADPgckg+QDIz4oAQMv/ydBVcF8pyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFszPg1VgyM+QX9pm3s7MzMt/zMv/AcjLH83NyXD7ADP4Uds8yM+HIM6NBAAAAAAAAAAAAAAAAAQ3kuwYzxbLf8lw+wBbbEEVAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwDLjD4Qm7jAPpBldTR0PpA39HbPNs8f/hnHhccABr4SfhKxwXy4Gb4APhqAvAw+EJu4wD4RvJzf/hm+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf98g10rAAZPU0dDe1CDXSsABk9TR0N7UINdKwAGT1NHQ3tTU0fhFIG6SMHDe+EK68uBl+AAm+Gol+Gwk+Gsj+G0i+G4B+HD4b18F2zx/+GcZHAIW7UTQ10nCAYqOgOIeGgSkcO1E0PQFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gpw+Gtw+GyI+G2I+G6I+G+I+HBw+HGAQPQO8r3XC//4YnD4Y3D4ZiEhISEDajD4Qm7jANN/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+SAWr1es7NyXD7AJEw4uMAf/hnHh0cAGT4UfhQ+E/4TvhN+Ez4S/hK+Eb4Q/hCyMv/yz/KAM5VYMjLf8t/zMzMWcjMy3/NzcntVADIjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbfhCyMv/cFiAQPRD+ChxWIBA9BYiyMt/cliAQPRDyPQAyfhQyM+EgPQA9ADPgckg+QDIz4oAQMv/ydBsEgEwMQBk7UTQ0//TP9IA+kDU0dDTf9N/1NTU1NHQ1NN/0fhx+HD4b/hu+G34bPhr+Gr4Zvhj+GICCvSkIPShISAAFHNvbCAwLjQ3LjAAAA==",
    code: "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",
    codeHash: "fd20bcc16cda2efdbc24085d0146f6c6da06216856d5024872991c9dc1670b4f",
};
export default Art2RootContract;