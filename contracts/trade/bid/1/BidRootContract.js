const BidRootContract = {
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
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFixIncome",
                        "type": "uint128"
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
                        "name": "tokenCode",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "create",
                "inputs": [
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
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
            },
            {
                "name": "setCreationParameters",
                "inputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFixIncome",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveCreationParameters",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFixIncome",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getCreationParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFixIncome",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "changeManager",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveManager",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getManager",
                "inputs": [],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "receiveInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
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
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
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
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getTokenCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "BID_CT_nifi_bid_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "tokenAddress",
                        "type": "address"
                    },
                    {
                        "name": "bidValue",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "bidCreator",
                        "type": "address"
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
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_minCreationFee",
                "type": "uint128"
            },
            {
                "name": "_creationFixIncome",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "e31bda7acedcc64bd258fcdc1f0956b710996bcb4255149fe34484586c3b8b43",
};
module.exports = { BidRootContract };