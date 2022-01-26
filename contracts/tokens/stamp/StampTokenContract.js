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
                "name": "cancelEndrose",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "endrose",
                "inputs": [
                    {
                        "name": "place",
                        "type": "uint8"
                    },
                    {
                        "name": "receiver",
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
                "name": "_creatorFees",
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
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "3285c479cbc698ce373a57c9758d1681f7cae3a7172fc9471b72d8baec70d5f9",
};
module.exports = { StampTokenContract };