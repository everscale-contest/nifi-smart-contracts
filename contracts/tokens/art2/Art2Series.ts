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
    codeHash: "491fbe008153d2c6f69618a49adae85b77f80e36eb8536cc61e50d8edd38c9c1",
};
export default Art2SeriesContract;