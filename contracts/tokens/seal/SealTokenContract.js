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
                "name": "endrose",
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
                "name": "_creatorFees",
                "type": "uint32"
            },
            {
                "name": "_hash",
                "type": "uint256"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "bcc694862a297c29b77b24118d329536dc0d343cc065392d64cb74a8f0836a03",
};
module.exports = { SealTokenContract };