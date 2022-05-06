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
                        "name": "showcaseFee",
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
                        "name": "showcaseFee",
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
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_token",
                "type": "address"
            },
            {
                "name": "_showCaseFee",
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
    codeHash: "615b6e4532925f3dbbffc5a75587a59dc4fe8937406a7187731d86c6f2a50ce7",
};
module.exports = { AskContract };