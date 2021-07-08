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
    codeHash: "b7db43863d65cdea538b34891402ac66ebe0be51e1c8397ebcbc905b80a3fa3d",
};
export default ArtTokenContract;