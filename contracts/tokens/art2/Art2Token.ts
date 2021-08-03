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
    codeHash: "a797bf6ac66a512db28db8f421b40de3cef0df4f51848707da09e2a6c31789da",
};
export default Art2TokenContract;