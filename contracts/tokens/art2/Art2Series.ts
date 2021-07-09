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
        "events": []
    },
    tvc: "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",
    code: "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",
    codeHash: "c354a6b8c129728be6f6f58f23218f89cfc2d476bf76d42adeadfe07168c2a9c",
};
export default Art2SeriesContract;