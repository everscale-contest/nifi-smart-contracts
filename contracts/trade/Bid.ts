const BidContract = {
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
                "name": "BID_AC_nifi_bid_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "BID_CL_nifi_bid_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "941eda8c3f2c11839a09d91cdd982a3d4df63b091d7f26c00bc4847706815eb1",
};
export default BidContract;