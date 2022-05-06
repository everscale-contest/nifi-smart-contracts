const StampTokenContract = {
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
                        "name": "creatorPercentReward",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "minSealFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minSealRxFee",
                        "type": "uint128"
                    },
                    {
                        "name": "requestEndorseFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "minForAddFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "endorsePercentFee",
                        "type": "uint16"
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
                        "name": "creatorPercentReward",
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
                        "name": "creatorPercentReward",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getSeal",
                "inputs": [],
                "outputs": [
                    {
                        "name": "seal",
                        "type": "optional(address)"
                    },
                    {
                        "name": "corner",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "getForever",
                "inputs": [],
                "outputs": [
                    {
                        "name": "forever",
                        "type": "optional(address)"
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
                        "name": "creatorPercentReward",
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
                        "name": "creatorPercentReward",
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
                "name": "requestEndorse",
                "inputs": [
                    {
                        "name": "seal",
                        "type": "address"
                    },
                    {
                        "name": "places",
                        "type": "uint8"
                    },
                    {
                        "name": "price",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "cancelEndorse",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "endorse",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "place",
                        "type": "uint8"
                    },
                    {
                        "name": "sealOwner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setForever",
                "inputs": [
                    {
                        "name": "forever",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "delForever",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minSealFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minSealRxFee",
                        "type": "uint128"
                    },
                    {
                        "name": "requestEndorseFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "minForAddFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddFixIncome",
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
                "name": "TK_CO_nifi_stamp1_1",
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
                "name": "TK_MG_nifi_stamp1_1",
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
                "name": "TK_RQ_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "seal",
                        "type": "address"
                    },
                    {
                        "name": "sealPlaces",
                        "type": "uint8"
                    },
                    {
                        "name": "value",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_RX_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_EN_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "seal",
                        "type": "address"
                    },
                    {
                        "name": "corner",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_FE_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "forever",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_FD_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "forever",
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
                "name": "_creatorPercentReward",
                "type": "uint32"
            },
            {
                "name": "_hash",
                "type": "uint256"
            },
            {
                "name": "_sealPlace",
                "type": "uint8"
            },
            {
                "name": "_seal",
                "type": "optional(address)"
            },
            {
                "name": "_sealValue",
                "type": "uint128"
            },
            {
                "name": "_sealPosiblePlaces",
                "type": "uint8"
            },
            {
                "name": "_forever",
                "type": "optional(address)"
            },
            {
                "name": "_minSealFee",
                "type": "uint128"
            },
            {
                "name": "_minSealRxFee",
                "type": "uint128"
            },
            {
                "name": "_requestEndorseFixIncome",
                "type": "uint128"
            },
            {
                "name": "_minForAddFee",
                "type": "uint128"
            },
            {
                "name": "_forAddFixIncome",
                "type": "uint128"
            },
            {
                "name": "_endorsePercentFee",
                "type": "uint16"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "f67aa09abfcd020e1d1b53165977027dc49c93055662de308d32fcc8f8aee6f9",
};
module.exports = { StampTokenContract };