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
                "name": "TK_CO_art2_1",
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
                "name": "TK_MG_art2_1",
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
    codeHash: "12b87f228a8b8a273f54e920ef873e47362fc093eb7c5f10d668a5a442792b90",
};
export default Art2TokenContract;