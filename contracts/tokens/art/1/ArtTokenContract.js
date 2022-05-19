const ArtTokenContract = {
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
                        "name": "creatorPercent",
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
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ]
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
                "name": "receiveInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    },
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
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    },
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
                "name": "_id",
                "type": "uint64"
            }
        ],
        "events": [
            {
                "name": "TK_CO_nifi_art1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_MG_nifi_art1_1",
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
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_managerUnlockTime",
                "type": "uint32"
            },
            {
                "name": "_owner",
                "type": "address"
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
    codeHash: "56beb3610a7907b847e22dbc9d149c4855c911e68c2056a1b1e7125906a5e199",
};
module.exports = { ArtTokenContract };