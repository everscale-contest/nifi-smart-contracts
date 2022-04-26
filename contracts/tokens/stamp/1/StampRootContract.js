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
                        "name": "creationMinValue",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFee",
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
                "name": "setStampFee",
                "inputs": [
                    {
                        "name": "sealFee",
                        "type": "uint128"
                    },
                    {
                        "name": "sealRxFee",
                        "type": "uint128"
                    },
                    {
                        "name": "rootFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddRootFee",
                        "type": "uint128"
                    },
                    {
                        "name": "endrosePercentFee",
                        "type": "uint16"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getStampFee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "sealFee",
                        "type": "uint128"
                    },
                    {
                        "name": "sealRxFee",
                        "type": "uint128"
                    },
                    {
                        "name": "rootFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddRootFee",
                        "type": "uint128"
                    },
                    {
                        "name": "endrosePercentFee",
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
                "name": "_creationFee",
                "type": "uint128"
            },
            {
                "name": "_creationMinValue",
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
                "name": "_sealFee",
                "type": "uint128"
            },
            {
                "name": "_sealRxFee",
                "type": "uint128"
            },
            {
                "name": "_rootFee",
                "type": "uint128"
            },
            {
                "name": "_forAddFee",
                "type": "uint128"
            },
            {
                "name": "_forAddRootFee",
                "type": "uint128"
            },
            {
                "name": "_endrosePercentFee",
                "type": "uint16"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "41706b8a83a73eee84cb78f23ddc29e28999eed8179a757ada5644fff9932a3e",
};
module.exports = { StampRootContract };