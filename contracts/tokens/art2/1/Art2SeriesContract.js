const Art2SeriesContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
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
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "limit",
                        "type": "uint64"
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
                        "name": "creatorPercentReward",
                        "type": "uint32"
                    },
                    {
                        "name": "mintTopup",
                        "type": "uint128"
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
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "id",
                        "type": "uint64"
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
                        "type": "uint64"
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
                        "type": "uint64"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint64"
                    },
                    {
                        "name": "limit",
                        "type": "uint64"
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
                        "name": "creatorPercentReward",
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
                "type": "uint64"
            }
        ],
        "events": [
            {
                "name": "TK_MT_nifi_art2_1",
                "inputs": [
                    {
                        "name": "seriesId",
                        "type": "uint64"
                    },
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            }
        ],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_root",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint64"
            },
            {
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_symbol",
                "type": "string"
            },
            {
                "name": "_tokenCode",
                "type": "cell"
            },
            {
                "name": "_totalSupply",
                "type": "uint64"
            },
            {
                "name": "_limit",
                "type": "uint64"
            },
            {
                "name": "_hash",
                "type": "uint256"
            },
            {
                "name": "_creatorPercentReward",
                "type": "uint32"
            },
            {
                "name": "_mintTopup",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "bf9fa3e6228c3afd69dd254cb4a72e5c4fbab74cecf76db84add29eeb0d834e4",
};
module.exports = { Art2SeriesContract };