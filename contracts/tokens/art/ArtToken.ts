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
                    },
                    {
                        "name": "hashesCount",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "addHash",
                "inputs": [
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ],
                "outputs": []
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
                    },
                    {
                        "name": "hashesCount",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "getHashes",
                "inputs": [
                    {
                        "name": "offset",
                        "type": "uint32"
                    },
                    {
                        "name": "length",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "hashes",
                        "type": "uint256[]"
                    },
                    {
                        "name": "hashesCount",
                        "type": "uint32"
                    }
                ]
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
    codeHash: "d2e80241d12acc2e80a59bcc43a01d7dea99e872acc6aadff8d6736693530845",
};
export default ArtTokenContract;