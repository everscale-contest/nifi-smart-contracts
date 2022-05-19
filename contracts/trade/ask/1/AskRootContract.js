const AskRootContract = {
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
                        "name": "askIncomePercent",
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
                        "name": "price",
                        "type": "uint128"
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
                "name": "getAskParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minAcceptFee",
                        "type": "uint128"
                    },
                    {
                        "name": "askIncomePercent",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "setAskParameters",
                "inputs": [
                    {
                        "name": "minAcceptFee",
                        "type": "uint128"
                    },
                    {
                        "name": "askIncomePercent",
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
                "name": "ASK_CT_nifi_ask_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "price",
                        "type": "uint128"
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
                "name": "_minAcceptFee",
                "type": "uint128"
            },
            {
                "name": "_askIncomePercent",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "ad30b4ac35212adce24ecdfaa73e186bcfb209c560c4ad8cc1b302e77fe394e3",
};
module.exports = { AskRootContract };