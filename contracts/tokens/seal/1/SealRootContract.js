const SealRootContract = {
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
                "name": "setParameters",
                "inputs": [
                    {
                        "name": "endorseStampCost",
                        "type": "uint128"
                    },
                    {
                        "name": "endorseRootFixIncome",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ],
        "data": [],
        "events": [
            {
                "name": "TK_CT_nifi_seal_1",
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
                "name": "_endorseStampCost",
                "type": "uint128"
            },
            {
                "name": "_endorseRootFixIncome",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "30149fc21b4dd5b6cd63ed8fce3a0a359e7e7445d9f33e561446ba360de11f4c",
};
module.exports = { SealRootContract };