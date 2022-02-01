const ForeverTokenContract = {
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
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
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
                        "name": "creatorFees",
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
                        "name": "creatorFees",
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
                        "name": "creatorFees",
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
                        "name": "creatorFees",
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
                "name": "getStamps",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "stamp",
                                "type": "address"
                            },
                            {
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "name": "seal",
                                "type": "address"
                            },
                            {
                                "name": "place",
                                "type": "uint8"
                            }
                        ],
                        "name": "stamps",
                        "type": "tuple[]"
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
                "name": "addStamp",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "seal",
                        "type": "address"
                    },
                    {
                        "name": "place",
                        "type": "uint8"
                    }
                ],
                "outputs": []
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
                "name": "TK_CO_nifi_for1_1",
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
                "name": "TK_MG_nifi_for1_1",
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
            },
            {
                "name": "FOR_SC_nifi_for1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "token1Address",
                        "type": "address"
                    },
                    {
                        "name": "token2Address",
                        "type": "address"
                    },
                    {
                        "name": "token3Address",
                        "type": "address"
                    },
                    {
                        "name": "token4Address",
                        "type": "address"
                    },
                    {
                        "name": "sealAddress",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "FOR_EX_nifi_for1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
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
                "name": "_creatorFees",
                "type": "uint32"
            },
            {
                "name": "_hash",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "name": "stamp",
                        "type": "address"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "seal",
                        "type": "address"
                    },
                    {
                        "name": "place",
                        "type": "uint8"
                    }
                ],
                "name": "_stamps",
                "type": "tuple[]"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "5249c4580cabb575397660654d81de999620225ba77ef40b611156aa498a8a8b",
};
module.exports = { ForeverTokenContract };