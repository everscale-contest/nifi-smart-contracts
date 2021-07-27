const DirectAuctionContract = {
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
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "stepBid",
                        "type": "uint128"
                    },
                    {
                        "name": "feeBid",
                        "type": "uint128"
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "showcaseFees",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "bid",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "finish",
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
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "stepBid",
                        "type": "uint128"
                    },
                    {
                        "name": "feeBid",
                        "type": "uint128"
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "components": [
                            {
                                "name": "bider",
                                "type": "address"
                            },
                            {
                                "name": "value",
                                "type": "uint128"
                            }
                        ],
                        "name": "curBid",
                        "type": "tuple"
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
                "name": "BidEvent",
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
                        "name": "bider",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "FinishEvent",
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
                        "name": "bider",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "08dfa117d6b9ad461eb8981164fffb1a9ea49ee814e1caeeb7840fecb2e74c60",
};
export default DirectAuctionContract;