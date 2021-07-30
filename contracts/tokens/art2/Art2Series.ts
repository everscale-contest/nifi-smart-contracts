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
    codeHash: "baf866a5c64271b674c8ab5f39cdfd61dfc7a430988d18581ae57754b0cf0498",
};
export default Art2SeriesContract;