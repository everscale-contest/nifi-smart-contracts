const Art2SeriesContract = {
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
    codeHash: "8a9d16b27fa43268ef8b03ecc4c2899173605779bbbd8af469f0e1e5773d13bf",
};
export default Art2SeriesContract;