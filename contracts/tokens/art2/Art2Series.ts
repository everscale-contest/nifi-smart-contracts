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
                "name": "mint",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "abd7ed48f8c1b4ba1334f19b7f3f25cb3f00ae51aacc5f7ed0074fced34a7012",
};
export default Art2SeriesContract;