const BidContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "time"
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
                    }
                ],
                "outputs": []
            },
            {
                "name": "acceptOffer",
                "inputs": [],
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
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "finish",
                "inputs": [],
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
                        "type": "uint128"
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
                "type": "uint128"
            }
        ],
        "events": [
            {
                "name": "BidCreated",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
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
                    }
                ],
                "outputs": []
            },
            {
                "name": "BidAccepted",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
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
                    }
                ],
                "outputs": []
            },
            {
                "name": "BidFinished",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
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
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "9c91e9d80f8e3212d82c7aa4dc74e071795150c62eff68c0507a80cc1f550847",
};
export default BidContract;