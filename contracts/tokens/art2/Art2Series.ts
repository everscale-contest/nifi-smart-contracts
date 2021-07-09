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
    codeHash: "b214cff030c8c88008e7e6f549e9bb3a2868375e03c7ce4475ed39246ed636ba",
};
export default Art2SeriesContract;