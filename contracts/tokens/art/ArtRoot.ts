const ArtRootContract = {
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
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "creationMinValue",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
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
                        "name": "creatorFees",
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
                        "name": "_answer_id",
                        "type": "uint32"
                    },
                    {
                        "name": "id",
                        "type": "uint128"
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
                        "type": "uint128"
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
                "name": "setCreationFee",
                "inputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveCreationFee",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getCreationFee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
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
                        "name": "_answer_id",
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
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint128"
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
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint128"
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
                "name": "TK_CT_art1_1",
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
    codeHash: "8d944e8f226672132bc4f4b86351682421fa00102285dbbf05b283d964644262",
};
export default ArtRootContract;