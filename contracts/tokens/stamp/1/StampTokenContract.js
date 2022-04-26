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
                    },
                    {
                        "name": "sealFee",
                        "type": "uint128"
                    },
                    {
                        "name": "sealRxFee",
                        "type": "uint128"
                    },
                    {
                        "name": "rootFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddRootFee",
                        "type": "uint128"
                    },
                    {
                        "name": "endrosePercentFee",
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
            },
            {
                "name": "getFee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "sealFee",
                        "type": "uint128"
                    },
                    {
                        "name": "sealRxFee",
                        "type": "uint128"
                    },
                    {
                        "name": "rootFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddRootFee",
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
            },
            {
                "name": "_sealFee",
                "type": "uint128"
            },
            {
                "name": "_sealRxFee",
                "type": "uint128"
            },
            {
                "name": "_rootFee",
                "type": "uint128"
            },
            {
                "name": "_forAddFee",
                "type": "uint128"
            },
            {
                "name": "_forAddRootFee",
                "type": "uint128"
            },
            {
                "name": "_endrosePercentFee",
                "type": "uint16"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "9f88364a63012c1e1784bfd2341228c7051c5c84e9a7afd31636bec1d1066f32",
};
module.exports = { StampTokenContract };