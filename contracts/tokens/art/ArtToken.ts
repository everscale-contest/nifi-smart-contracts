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
                "name": "TK_CO_art1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "previousOwner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_MG_art1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "774eed49b716d6f1385257f077bd7ff6569b0cc6d89c1a575edc059df6c7aa79",
};
export default ArtTokenContract;