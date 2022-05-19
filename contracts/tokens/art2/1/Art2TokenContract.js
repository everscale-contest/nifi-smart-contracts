const Art2TokenContract = {
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
                        "name": "creatorPercent",
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
                "name": "receiveArtHash",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getArtHash",
                "inputs": [],
                "outputs": [
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
                        "name": "series",
                        "type": "address"
                    },
                    {
                        "name": "seriesId",
                        "type": "uint64"
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
                        "name": "creatorPercent",
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
                        "name": "creatorPercent",
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
                "name": "_series",
                "type": "address"
            },
            {
                "key": 3,
                "name": "_seriesId",
                "type": "uint64"
            },
            {
                "key": 4,
                "name": "_id",
                "type": "uint64"
            }
        ],
        "events": [
            {
                "name": "TK_CO_nifi_art2_1",
                "inputs": [
                    {
                        "name": "seriesId",
                        "type": "uint64"
                    },
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
                "name": "TK_MG_nifi_art2_1",
                "inputs": [
                    {
                        "name": "seriesId",
                        "type": "uint64"
                    },
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
                "name": "_series",
                "type": "address"
            },
            {
                "name": "_seriesId",
                "type": "uint64"
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
                "name": "_creatorPercent",
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
    codeHash: "3f27f299c40aca595be4e4691e549d7a30605bfb8b4addf0f03ea51989a62384",
};
module.exports = { Art2TokenContract };