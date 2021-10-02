const Art2TokenContract = {
    abi: {
        "ABI version": 2,
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
            },
            {
                "key": 3,
                "name": "_serie",
                "type": "address"
            }
        ],
        "events": [
            {
                "name": "TK_CO_nifi_art2_1",
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
                "name": "TK_MG_nifi_art2_1",
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
    codeHash: "54a886d32d20746cf5a5cd7a5570b73670ba7594c21460b648af5d0eccfe3937",
};
export default Art2TokenContract;