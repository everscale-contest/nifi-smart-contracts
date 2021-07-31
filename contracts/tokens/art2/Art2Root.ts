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
                "name": "newSerie",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "serie",
                        "type": "address"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "te6ccgECIQEABoQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gseBQQgAsyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds8+Edu8nwYBgFCItDTA/pAMPhpqTgA3CHHANwh1w0f8rwh3QHbPPhHbvJ8BgIoIIIQIcCQQrvjAiCCEGnHj0674wIRBwRQIIIQN5D+NrrjAiCCED7/k+y64wIgghBmDOkRuuMCIIIQacePTrrjAg8MCggDbDD4Qm7jANHbPCOOISXQ0wH6QDAxyM+HIM6AYs9AXhHPk6cePTrMzMt/yXD7AJJfA+LjAH/4Zx0JGwISiIhb+E34TvhRICADZjD4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk5gzpEbOzclw+wCRMOLjAH/4Zx0LGwAE+EoDbjD4Qm7jANN/03/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5L7/k+yzs3JcPsAkTDi4wB/+GcdDRsB/o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABG34QsjL/3BYgED0Q/gocViAQPQWI8jLf3JYgED0Q8j0AMn4UMjPhID0APQAz4HJbfhCyMv/cFiAQPRDIfkAyM+KAEDL/8nQcViAQPQWI8jLf3JYgED0Q8j0AMkOAD74T8jPhID0APQAz4HJIPkAyM+KAEDL/8nQbBNZW2whA1Yw+EJu4wD6QZXU0dD6QN/XDX+V1NHQ03/f1wwAldTR0NIA39HbPOMAf/hnHRAbAEr4SfhKxwXy4Gb4AFRxIMjPhYDKAHPPQM4B+gKAa89AyXD7AF8DBE4ggghavV664wIgghAPiRrLuuMCIIIQGZOgzrrjAiCCECHAkEK64wIaFxUSA7Qw+EJu4wD6QZXU0dD6QN/XDX+V1NHQ03/f1w3/ldTR0NP/39cNH5XU0dDTH9/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5KHAkEKzs3JcPsAkTDi2zx/+GcdExsB/I0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGim+2Dy0EhTEYEJYbny4RVopv5g+Ey+8uEWaKb+YPhLobV/+FGktX/4cVM0+E8o+E74TSxt+ELIy/9wWIBA9EP4KHFYgED0FvhRyMt/cliAQPRDyPQAyfhQyBQA6s+EgPQA9ADPgckg+QDIz4oAQMv/ydBVcF8pyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFszPg1VgyM+QX9pm3s7MzMt/zMv/AcjLH83NyXD7ADMi+FGNBHAAAAAAAAAAAAAAAAAczekBYMjOy3/OyXD7AFtsQQMuMPhCbuMA+kGV1NHQ+kDf0ds82zx/+GcdFhsAGvhJ+ErHBfLgZvgA+GoC8DD4Qm7jAPhG8nN/+Gb6QZXU0dD6QN/XDX+V1NHQ03/f1w1/ldTR0NN/3yDXSsABk9TR0N7UINdKwAGT1NHQ3tQg10rAAZPU0dDe1NTR+EUgbpIwcN74Qrry4GX4ACb4aiX4bCT4ayP4bSL4bgH4cPhvXwXbPH/4ZxgbAhbtRNDXScIBio6A4h0ZBKRw7UTQ9AWNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4anD4a3D4bIj4bYj4boj4b4j4cHD4cYBA9A7yvdcL//hicPhjcPhmICAgIANqMPhCbuMA03/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5IBavV6zs3JcPsAkTDi4wB/+GcdHBsAZPhR+FD4T/hO+E34TPhL+Er4RvhD+ELIy//LP8oAzlVgyMt/y3/MzMxZyMzLf83Nye1UAMiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARt+ELIy/9wWIBA9EP4KHFYgED0FiLIy39yWIBA9EPI9ADJ+FDIz4SA9AD0AM+BySD5AMjPigBAy//J0GwSATAxAGTtRNDT/9M/0gD6QNTR0NN/03/U1NTU0dDU03/R+HH4cPhv+G74bfhs+Gv4avhm+GP4YgIK9KQg9KEgHwAUc29sIDAuNDcuMAAA",
    code: "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",
    codeHash: "8ca13e2bceca4ecb79cc9c8bde53012eb77f5046952b3d0ff0eb19fa11a12c57",
};
export default Art2RootContract;