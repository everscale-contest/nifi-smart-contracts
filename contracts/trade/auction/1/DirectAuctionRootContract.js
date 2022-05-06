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
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "stepBid",
                        "type": "uint128"
                    },
                    {
                        "name": "feeBid",
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
                        "name": "showcaseFees",
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
                        "name": "stepBid",
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
                        "name": "auctionCreator",
                        "type": "address"
                    },
                    {
                        "name": "showcaseFees",
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
                "name": "_creationFixIncome",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "a8da77d786f90572af8b866ab5cc1281d587ee1d1de6a3d079e5ecfb8f785504",
};
module.exports = { DirectAuctionRootContract };