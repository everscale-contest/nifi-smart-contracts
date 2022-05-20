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
                        "name": "issuer",
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
                "name": "onReceiveTradeInfo",
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
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "value3",
                        "type": "address"
                    },
                    {
                        "name": "value4",
                        "type": "uint32"
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
                        "name": "issuer",
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
                "name": "_issuer",
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
    codeHash: "4ebef2f54b5620a8bf19f029d847b179ad6d25d5ece64e37872ac62acdfd4093",
};
module.exports = { AskContract };