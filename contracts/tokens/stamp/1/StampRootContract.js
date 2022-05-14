const StampRootContract = {
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
                "name": "getManager",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "changeManager",
                "inputs": [
                    {
                        "name": "newManager",
                        "type": "address"
                    }
                ],
                "outputs": []
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
                        "type": "uint128"
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
                "name": "setStampParameters",
                "inputs": [
                    {
                        "name": "minSealFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minSealRxFee",
                        "type": "uint128"
                    },
                    {
                        "name": "requestEndorseFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "minForAddFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "endorsePercentIncome",
                        "type": "uint16"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getStampParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minSealFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minSealRxFee",
                        "type": "uint128"
                    },
                    {
                        "name": "requestEndorseFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "minForAddFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "endorsePercentIncome",
                        "type": "uint16"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "TK_CT_nifi_stamp1_1",
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
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_creationTopup",
                "type": "uint128"
            },
            {
                "name": "_minCreationFee",
                "type": "uint128"
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
                "name": "_minSealFee",
                "type": "uint128"
            },
            {
                "name": "_minSealRxFee",
                "type": "uint128"
            },
            {
                "name": "_requestEndorseFixIncome",
                "type": "uint128"
            },
            {
                "name": "_minForAddFee",
                "type": "uint128"
            },
            {
                "name": "_forAddFixIncome",
                "type": "uint128"
            },
            {
                "name": "_endorsePercentFee",
                "type": "uint16"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "92639b2642404e836dd4df6374639194f38288d5685db9b98db294f0bc8e317e",
};
module.exports = { StampRootContract };