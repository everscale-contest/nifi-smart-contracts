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
                        "name": "id",
                        "type": "uint64"
                    },
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
    codeHash: "4d9a9be07c069679125fb2ceca4349285a6cd10fcf738ba41ffa2fb5b1cd3c99",
};
module.exports = { StampTokenContract };