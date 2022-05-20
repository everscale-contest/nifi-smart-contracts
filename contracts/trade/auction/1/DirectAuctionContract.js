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
                        "name": "issuer",
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
                        "name": "bidStep",
                        "type": "uint128"
                    },
                    {
                        "name": "minBidSubmissionFee",
                        "type": "uint128"
                    },
                    {
                        "name": "auctionIncomePercent",
                        "type": "uint32"
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
                "name": "onReceiveTradeInfoForCreation",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "value1",
                        "type": "address"
                    },
                    {
                        "name": "value2",
                        "type": "uint32"
                    },
                    {
                        "name": "value3",
                        "type": "address"
                    },
                    {
                        "name": "value4",
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
                        "name": "auctionIncomePercent",
                        "type": "uint32"
                    },
                    {
                        "name": "minBidSubmissionFee",
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
                                "name": "bidder",
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
                "name": "_issuer",
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
                "name": "_bidStep",
                "type": "uint128"
            },
            {
                "name": "_minBidSubmissionFee",
                "type": "uint128"
            },
            {
                "name": "_auctionIncomePercent",
                "type": "uint32"
            },
            {
                "name": "_bidCost",
                "type": "uint128"
            },
            {
                "components": [
                    {
                        "name": "bidder",
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
    codeHash: "7155bf714d0ce69f79afff7490c807766ae1a598c153dd26335a856d48c70886",
};
module.exports = { DirectAuctionContract };