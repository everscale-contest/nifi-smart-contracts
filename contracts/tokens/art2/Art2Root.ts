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
    codeHash: "08cd6d27731bbe23348b085cafa9e0a14a224a97e9c0fe689ee65d2721f2dc2f",
};
export default Art2RootContract;