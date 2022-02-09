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
    codeHash: "25a16410e8122fdc438cca768e6e1231aab0e6a8003315be6893afc733affc46",
};
module.exports = { ForeverTokenContract };