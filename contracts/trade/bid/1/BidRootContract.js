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
                        "name": "minAcceptFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    },
                    {
                        "name": "bidIncomePercent",
                        "type": "uint32"
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
                        "name": "creationTopup",
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
                        "name": "creationTopup",
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
                        "name": "creationTopup",
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
                        "name": "bidder",
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
                "name": "_creationTopup",
                "type": "uint128"
            },
            {
                "name": "_minAcceptFee",
                "type": "uint128"
            },
            {
                "name": "_bidIncomePercent",
                "type": "uint32"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "04d3bf079f8a533b0eb418b58b912c59b71b59a42302b14aa0418dc8ee602a25",
};
module.exports = { BidRootContract };