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
                "name": "SR_CT_nifi_art2_1",
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
    tvc: "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",
    code: "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",
    codeHash: "a0b66f04f19ef2ce80115278cf674cc0941acd925f4da82b251c1f5ec1173fe2",
};
export default Art2RootContract;