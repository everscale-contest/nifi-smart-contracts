const DirectAuctionRootContract = {
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
                        "name": "auctionIncomePercent",
                        "type": "uint32"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    },
                    {
                        "name": "bidCost",
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
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "bidStep",
                        "type": "uint128"
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "showcasePercent",
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
                "name": "getBidCost",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "setBidCost",
                "inputs": [
                    {
                        "name": "bidCost",
                        "type": "uint128"
                    }
                ],
                "outputs": []
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
            },
            {
                "name": "_await_ITradeToken_receiveTradeInfo",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            }
        ],
        "data": [],
        "events": [
            {
                "name": "AUC_CT_nifi_auc_1",
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
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "bidStep",
                        "type": "uint128"
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "showcasePercent",
                        "type": "uint32"
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
                "name": "_await",
                "type": "optional(cell)"
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
                "name": "_auctionIncomePercent",
                "type": "uint32"
            },
            {
                "name": "_bidCost",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "5aebfd1673449c55469cb698f21a0c2a1b5ee0cc083754d153f23203350aef75",
};
module.exports = { DirectAuctionRootContract };