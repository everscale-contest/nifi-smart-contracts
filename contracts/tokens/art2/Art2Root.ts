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
    tvc: "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",
    code: "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",
    codeHash: "4107095a9a3f1ffcd6cb2edff15cf9fd8ada1df55174b98beb0f067464491b67",
};
export default Art2RootContract;