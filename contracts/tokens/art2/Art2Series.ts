const Art2SeriesContract = {
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
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "limit",
                        "type": "uint128"
                    },
                    {
                        "name": "tokenCode",
                        "type": "cell"
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
                "outputs": []
            },
            {
                "name": "create",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
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
                "name": "receiveTokenAddress",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    },
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
                        "name": "id",
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
                        "name": "totalSupply",
                        "type": "uint128"
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
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
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
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_root",
                "type": "address"
            },
            {
                "key": 2,
                "name": "_id",
                "type": "uint128"
            }
        ],
        "events": [
            {
                "name": "TK_MT_art2_1",
                "inputs": [
                    {
                        "name": "seriesId",
                        "type": "uint128"
                    },
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
    codeHash: "c80801f518e2b977449d758c473ead97fcf3097caf09ad94bd02e41ffda7c79e",
};
export default Art2SeriesContract;