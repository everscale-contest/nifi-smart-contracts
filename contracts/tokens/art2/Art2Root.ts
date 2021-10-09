const Art2RootContract = {
    abi: {
        "ABI version": 2,
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
                        "type": "uint64"
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
                        "name": "serie",
                        "type": "uint64"
                    },
                    {
                        "name": "token",
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
                "name": "SR_CT_nifi_art2_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "te6ccgECIAEABqQABCSK7VMg4wMgwP/jAiDA/uMC8gsdAwEfAQACAv6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8GgQBQiLQ0wP6QDD4aak4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAQCKCCCEEgcKRO74wIgghBpx49Ou+MCEQUEUCCCEGSGXMS64wIgghBmDOkRuuMCIIIQZzvxCLrjAiCCEGnHj0664wINCwgGA2ww+EJu4wDR2zwjjiEl0NMB+kAwMcjPhyDOgGLPQF4Rz5OnHj06zMzLf8lw+wCSXwPi4wB/+GccBxkCEoiIW/hN+E74UR8fA34w+EJu4wDTP9cNP5XU0dDTP9/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5Oc78Qizs3JcPsAkTDi4wB/+GccCRkB/o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABG34QsjL/3BYgED0Q/gocViAQPQWI8jLP3JYgED0Q8j0AMn4UMjPhID0APQAz4HJbfhCyMv/cFiAQPRDIfkAyM+KAEDL/8nQcViAQPQWI8jLP3RYgED0Q8j0AMkKAD74T8jPhID0APQAz4HJIPkAyM+KAEDL/8nQbBNZW2whA2Yw+EJu4wDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5OYM6RGzs3JcPsAkTDi4wB/+GccDBkABPhKA7Qw+EJu4wD6QZXU0dD6QN/XDT+V1NHQ0z/f1w3/ldTR0NP/39cNH5XU0dDTH9/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5OSGXMSzs3JcPsAkTDi2zx/+GccDhkB/I0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGim+2Dy0EhTEYEJYbny4RVopv5g+Ey+8uEWaKb+YPhLobV/+FGktT/4cVM0+E8o+E74TSxt+ELIy/9wWIBA9EP4KHFYgED0FvhRyMs/cliAQPRDyPQAyfhQyA8B7M+EgPQA9ADPgckg+QDIz4oAQMv/ydBVcF8pyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFszPg1VgyM+QHZyCWs7MzMs/zMv/yx/NyXD7ADP4Uds8yM+HIM6NBAAAAAAAAAAAAAAAAAWFCTXozxbLP8lw+wBbbEEQAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwEUCCCEA+JGsu64wIgghAZk6DOuuMCIIIQN5D+NrrjAiCCEEgcKRO64wIYFhQSA2ow+EJu4wDTP9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkyBwpE7Ozclw+wCRMOLjAH/4ZxwTGQDIjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbfhCyMv/cFiAQPRD+ChxWIBA9BYiyMs/cliAQPRDyPQAyfhQyM+EgPQA9ADPgckg+QDIz4oAQMv/ydBsEgEwMQNWMPhCbuMA+kGV1NHQ+kDf1w1/ldTR0NN/39cMAJXU0dDSAN/R2zzjAH/4ZxwVGQBK+En4SscF8uBm+ABUcSDIz4WAygBzz0DOAfoCgGvPQMlw+wBfAwMuMPhCbuMA+kGV1NHQ+kDf0ds82zx/+GccFxkAGvhJ+ErHBfLgZvgA+GoC8DD4Qm7jAPhG8nN/+Gb6QZXU0dD6QN/XDX+V1NHQ03/f1w1/ldTR0NN/3yDXSsABk9TR0N7UINdKwAGT1NHQ3tQg10rAAZPU0dDe1NTR+EUgbpIwcN74Qrry4GX4ACb4aiX4bCT4ayP4bSL4bgH4cPhvXwXbPH/4ZxoZAGT4UfhQ+E/4TvhN+Ez4S/hK+Eb4Q/hCyMv/yz/KAM5VYMjLf8t/zMzMWcjMyz/NzcntVAIW7UTQ10nCAYqOgOIcGwSkcO1E0PQFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gpw+Gtw+GyI+G2I+G6I+G+I+HBw+HGAQPQO8r3XC//4YnD4Y3D4Zh8fHx8AZO1E0NP/0z/SAPpA1NHQ03/Tf9TU1NTR0NTTP9H4cfhw+G/4bvht+Gz4a/hq+Gb4Y/hiAgr0pCD0oR8eABRzb2wgMC40Ny4wAAA=",
    codeHash: "6b848782fba9701c8ad6b068fc8d2e30c32822d5535b4d28de2bbefec563c165",
};
export default Art2RootContract;