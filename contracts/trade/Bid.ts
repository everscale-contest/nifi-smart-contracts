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
                "name": "acceptBid",
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
    codeHash: "d2416c041a8b03004f5d73dd2d127f27bb83b315f5744612c07f0ceddf39880c",
};
export default BidContract;