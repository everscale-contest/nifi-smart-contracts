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
                        "name": "minBidSubmissionFee",
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
                "name": "getAuctionParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minBidSubmissionFee",
                        "type": "uint128"
                    },
                    {
                        "name": "auctionIncomePercent",
                        "type": "uint32"
                    },
                    {
                        "name": "bidCost",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "setAuctionParameters",
                "inputs": [
                    {
                        "name": "minBidSubmissionFee",
                        "type": "uint128"
                    },
                    {
                        "name": "auctionIncomePercent",
                        "type": "uint32"
                    },
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
                        "name": "issuer",
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
                "name": "_minBidSubmissionFee",
                "type": "uint128"
            },
            {
                "name": "_bidCost",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "93c88009585ab4dcbf5b3492c887a3d1247eb15a07ad23602f79a91af451fc04",
};
module.exports = { DirectAuctionRootContract };