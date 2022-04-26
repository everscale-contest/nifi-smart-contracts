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
                "name": "setSealFee",
                "inputs": [
                    {
                        "name": "feeEndroseStamp",
                        "type": "uint128"
                    },
                    {
                        "name": "feeEndroseRoot",
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
                "name": "_feeEndroseStamp",
                "type": "uint128"
            },
            {
                "name": "_feeEndroseRoot",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "bfa80f2cd9a933db4c8ec6f0ed618638339024bb0913d75c6bf303f46ed49d3d",
};
module.exports = { SealRootContract };