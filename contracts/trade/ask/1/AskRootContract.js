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
                        "name": "issuer",
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
    codeHash: "a8bc34ffd6662c2d7908bf5d49ad38a38a4ee6b6313d4c724a51bc7b9007aacc",
};
module.exports = { AskRootContract };