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
    codeHash: "e92114bb6cc33205d82cfac8aad0db26b798f8b333e59ea39a150793ddb1f57a",
};
export default BidContract;