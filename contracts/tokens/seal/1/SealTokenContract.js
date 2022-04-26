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
                    },
                    {
                        "name": "feeEndroseStamp",
                        "type": "uint128"
                    },
                    {
                        "name": "feeEndroseRoot",
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
            },
            {
                "name": "getFee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "feeEndroseStamp",
                        "type": "uint128"
                    },
                    {
                        "name": "feeEndroseRoot",
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
            },
            {
                "name": "_feeEndroseStamp",
                "type": "uint128"
            },
            {
                "name": "_feeEndroseRoot",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "c060e4d4095310736570f55d39afac06cb5fd8fb3442b8ed8908ff2b50a3c85f",
};
module.exports = { SealTokenContract };