const DirectAuctionContract = {
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
                "name": "AUC_BS_nifi_auc_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "AUC_CL_nifi_auc_1_EXE",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "AUC_CL_nifi_auc_1_EXP",
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
    codeHash: "a2b37d4a38265e3abf143c78720181a569a4b1b2be17fb811edf286d27046214",
};
export default DirectAuctionContract;