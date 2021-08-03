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
    codeHash: "c07f393eca48fb82c609854a6bdce12c5543ea41939ce52f7c31820c461fffcc",
};
export default Art2SeriesContract;