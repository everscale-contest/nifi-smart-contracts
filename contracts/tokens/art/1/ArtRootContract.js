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
                        "name": "creatorPercent",
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
    codeHash: "68bcdcaf3585a86029f7e854385b31a9e89c0159685eaca7b7916073be6f82e3",
};
module.exports = { ArtRootContract };