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
    codeHash: "994be2030c0541088545e346c40bf817e9d32d34bc9964d35cb0876ac6e57e14",
};
export default ArtTokenContract;