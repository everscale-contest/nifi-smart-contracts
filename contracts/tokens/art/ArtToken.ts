const ArtTokenContract = {
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
                "name": "TK_CO_nifi_art1_1",
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
                "name": "TK_MG_nifi_art1_1",
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
    codeHash: "a0ce2e8e668d87c77792e211e53e8b1f46b8d4545c1986f7198cdf0437da8477",
};
export default ArtTokenContract;