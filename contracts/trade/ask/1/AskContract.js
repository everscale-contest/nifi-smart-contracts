const AskContract = {
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
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "minAcceptFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "showcasePercent",
                        "type": "uint32"
                    },
                    {
                        "name": "askIncomePercent",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "acceptAsk",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "cancel",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "expired",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "changePrice",
                "inputs": [
                    {
                        "name": "newPrice",
                        "type": "uint128"
                    }
                ],
                "outputs": []
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
                        "type": "uint64"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "showcasePercent",
                        "type": "uint32"
                    }
                ]
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
                "type": "uint64"
            }
        ],
        "events": [
            {
                "name": "ASK_AC_nifi_ask_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "ASK_CN_nifi_ask_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "ASK_EX_nifi_ask_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "ASK_PC_nifi_ask_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "newPrice",
                        "type": "uint128"
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
                "name": "_root",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint64"
            },
            {
                "name": "_askIncomePercent",
                "type": "uint128"
            },
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_token",
                "type": "address"
            },
            {
                "name": "_minAcceptFee",
                "type": "uint128"
            },
            {
                "name": "_creatorPercent",
                "type": "uint32"
            },
            {
                "name": "_showcasePercent",
                "type": "uint32"
            },
            {
                "name": "_endTime",
                "type": "uint32"
            },
            {
                "name": "_price",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "dbe3ef62dcddd05bcb25e941da33d1790c1960bd4323293fa728e27a37860995",
};
module.exports = { AskContract };