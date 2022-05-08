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
    codeHash: "6cb82041b6978308a06649053dcf7743abf6dc320cd927f3920e8eb31bc8df97",
};
module.exports = { ForeverRootContract };