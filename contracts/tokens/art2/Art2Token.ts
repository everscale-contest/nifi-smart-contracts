const Art2TokenContract = {
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
            },
            {
                "key": 3,
                "name": "_serie",
                "type": "address"
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
    codeHash: "9013d4ca68e0e73f660572eb53f82648e67e8f97703b1cca17a394f6d8c72236",
};
export default Art2TokenContract;