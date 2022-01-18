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
    codeHash: "86700f53fc31d49140c67d620ee3030aa33f94823e96c09a0570202dbbf72d08",
};
module.exports = { StampTokenContract };