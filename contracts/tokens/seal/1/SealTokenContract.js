const SealTokenContract = {
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
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
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
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "endorseStampCost",
                        "type": "uint128"
                    },
                    {
                        "name": "endorseRootFixIncome",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "changeOwner",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveArtInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getArtInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ]
            },
            {
                "name": "receiveTradeInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
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
                ]
            },
            {
                "name": "getTradeInfo",
                "inputs": [],
                "outputs": [
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
                ]
            },
            {
                "name": "lockManager",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "unlockTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "unlock",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "endorse",
                "inputs": [
                    {
                        "name": "stamp",
                        "type": "address"
                    },
                    {
                        "name": "place",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "endorseStampCost",
                        "type": "uint128"
                    },
                    {
                        "name": "endorseRootFixIncome",
                        "type": "uint128"
                    }
                ]
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
                "name": "TK_CO_nifi_seal_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_MG_nifi_seal_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "newManager",
                        "type": "address"
                    },
                    {
                        "name": "expirationTime",
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
                "name": "_root",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint64"
            },
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_managerUnlockTime",
                "type": "uint32"
            },
            {
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_creatorPercent",
                "type": "uint32"
            },
            {
                "name": "_hash",
                "type": "uint256"
            },
            {
                "name": "_endorseStampCost",
                "type": "uint128"
            },
            {
                "name": "_endorseRootFixIncome",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "7385ca9748cf07d6a15ff390399ec00a1850edcf781aedfe49d23b7145ba0b9e",
};
module.exports = { SealTokenContract };