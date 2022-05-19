const ForeverRootContract = {
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
                "name": "setForeverParameters",
                "inputs": [
                    {
                        "name": "delForeverCost",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getForeverParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "delForeverCost",
                        "type": "uint128"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "TK_CT_nifi_for1_1",
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
                "name": "_minCreationFee",
                "type": "uint128"
            },
            {
                "name": "_creationTopup",
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
                "name": "_delForeverCost",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "e21c25c03eddb9ee304288c271f5b00cdae4c800ca198db01c5a3664aa464008",
};
module.exports = { ForeverRootContract };