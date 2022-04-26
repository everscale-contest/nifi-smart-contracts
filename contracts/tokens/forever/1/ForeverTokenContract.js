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
                    },
                    {
                        "name": "delForeverFee",
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
            },
            {
                "name": "getFee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "delForeverFee",
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
            },
            {
                "name": "_delForeverFee",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "95a5df55729aacf6950eef31dc85e4e5be2eee04f1e952db73b0bcaebea9bfe2",
};
module.exports = { ForeverTokenContract };