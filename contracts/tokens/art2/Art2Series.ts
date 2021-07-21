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
                    },
                    {
                        "name": "creator",
                        "type": "address"
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
    codeHash: "a729c7a7ecc97a3c936b357c473d04593fc2a0eccc2821270aed5ea097183e31",
};
export default Art2SeriesContract;