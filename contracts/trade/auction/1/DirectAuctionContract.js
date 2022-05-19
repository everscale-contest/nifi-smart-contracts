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
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "bidStep",
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
                        "name": "showcasePercent",
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
                        "name": "creatorPercent",
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
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "bidStep",
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
                "name": "_bidStep",
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
                "name": "_showcasePercent",
                "type": "uint32"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "4986b645895217f13c1d78c22c9e8652cd339ca2dd350b15838cc58c282cac5b",
};
module.exports = { DirectAuctionContract };