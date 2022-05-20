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
    codeHash: "c3c9e7b6e4585e298efb0c1cea08ab8fd2f0e958db03d293b5219bdcb0208301",
};
module.exports = { BidRootContract };