const AskContract = {
    abi: {
        "ABI version": 2,
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
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "64e895b8b10f4926a26c82872116f4c852e3a4adfb783bcdb1af519c31850f8d",
};
export default AskContract;