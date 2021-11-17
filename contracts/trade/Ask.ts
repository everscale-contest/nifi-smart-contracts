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
                    }
                ],
                "outputs": []
            },
            {
                "name": "ASK_CL_nifi_ask_1",
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
                "name": "ASK_CG_nifi_ask_1",
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
    codeHash: "c5ca534eb5f94f11764a57a1aac27f3294f494a7b7913c48ef37c12e328bc28b",
};
export default AskContract;