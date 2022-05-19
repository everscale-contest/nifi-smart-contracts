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
    codeHash: "47e97015caee8f4688858b1478ccd6c0737c7d92c7d487c529a7ce251cf05998",
};
module.exports = { BidRootContract };