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
    codeHash: "b8e8974b0915151e15c1efcf9abe095be44d318271dd02ea2dee85c4a810b592",
};
module.exports = { AskContract };