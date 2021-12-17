const StampTokenContract = {
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
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint64"
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
                "type": "uint64"
            }
        ],
        "events": [
            {
                "name": "TK_CO_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_MG_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "newManager",
                        "type": "address"
                    },
                    {
                        "name": "expirationTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "4794680c31994739b85f010c28bcc5957e133059482843d1b9e951bb56af8e7e",
};
module.exports = { StampTokenContract };