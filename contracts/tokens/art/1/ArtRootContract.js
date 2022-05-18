const ArtRootContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
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
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "tokenCode",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "create",
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
                        "name": "creatorPercentReward",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "receiveTokenAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getTokenAddress",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "withdraw",
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCreationParameters",
                "inputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveCreationParameters",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getCreationParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "changeManager",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveManager",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getManager",
                "inputs": [],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "receiveInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint64"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint64"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getTokenCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "TK_CT_nifi_art1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            }
        ],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_symbol",
                "type": "string"
            },
            {
                "name": "_tokenCode",
                "type": "cell"
            },
            {
                "name": "_totalSupply",
                "type": "uint64"
            },
            {
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_minCreationFee",
                "type": "uint128"
            },
            {
                "name": "_creationTopup",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "8288ea6d54356a43d198988cccef94ed29433d25048870d8af70c44172369467",
};
module.exports = { ArtRootContract };