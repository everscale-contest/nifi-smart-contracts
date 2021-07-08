const RandomTokenContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "pubkey",
            "time"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "uint256"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveRandom",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "random",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getRandom",
                "inputs": [],
                "outputs": [
                    {
                        "name": "random",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "changeOwner",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "uint256"
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
                        "type": "uint256"
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
                        "type": "uint256"
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
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "4a85dcd2ce36537eb8dd99962f7d8d3e5bef84bd6c0d5465fd354fdf452ce70e",
};
export default RandomTokenContract;