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
    codeHash: "d3382a0bf5d7a65b50ef24a6bb3bd6a01d711544d3e8347a53334b4f3dfc2a2a",
};
module.exports = { StampTokenContract };