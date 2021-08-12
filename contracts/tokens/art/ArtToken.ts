const ArtTokenContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "time"
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
                "name": "receiveArtInfo",
                "inputs": [
                    {
                        "name": "_answer_id",
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
                        "name": "_answer_id",
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
                "name": "receiveInfo",
                "inputs": [
                    {
                        "name": "_answer_id",
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
                        "type": "uint128"
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
                        "type": "uint128"
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
                "name": "lock",
                "inputs": [
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
                "type": "uint128"
            }
        ],
        "events": [
            {
                "name": "ChangeOwnerEvent",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "e0607a864f19caccfe6d7b4aeeb4b640838bd8ea0dd5b5bddd8ddfcc3eaa49ea",
};
export default ArtTokenContract;