const DirectAuctionContract = {
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
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "stepBid",
                        "type": "uint128"
                    },
                    {
                        "name": "bidCost",
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
                "inputs": [
                    {
                        "name": "price",
                        "type": "uint128"
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
                        "name": "creatorPercentReward",
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
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "stepBid",
                        "type": "uint128"
                    },
                    {
                        "name": "bidCost",
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
                "type": "uint64"
            }
        ],
        "events": [
            {
                "name": "AUC_BS_nifi_auc_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "bidValue",
                        "type": "uint128"
                    },
                    {
                        "name": "bidCreator",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "AUC_SC_nifi_auc_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "finalBidValue",
                        "type": "uint128"
                    },
                    {
                        "name": "bidCreator",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "AUC_EX_nifi_auc_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
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
                "name": "_startTime",
                "type": "uint32"
            },
            {
                "name": "_endTime",
                "type": "uint32"
            },
            {
                "name": "_askFinish",
                "type": "uint32"
            },
            {
                "name": "_startBid",
                "type": "uint128"
            },
            {
                "name": "_stepBid",
                "type": "uint128"
            },
            {
                "name": "_bidCost",
                "type": "uint128"
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
                "name": "_curBid",
                "type": "tuple"
            },
            {
                "name": "_showcaseFees",
                "type": "uint32"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "9211a1fdfbba97bb79d9f57d8c6a4a3f0e3c75270cf815c7386af94fd088bfff",
};
module.exports = { DirectAuctionContract };