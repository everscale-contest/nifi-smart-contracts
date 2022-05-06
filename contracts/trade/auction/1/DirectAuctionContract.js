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
                "name": "_feeBid",
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
    codeHash: "76d36858936f254f81148dee891229d42dff471d1756329cc24f6850f7a69edf",
};
module.exports = { DirectAuctionContract };