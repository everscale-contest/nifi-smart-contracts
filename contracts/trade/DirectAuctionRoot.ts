const DirectAuctionRootContract = {
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
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "creationMinValue",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "tokenCode",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "create",
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
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "receiveTokenAddress",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    },
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getTokenAddress",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "withdraw",
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCreationFee",
                "inputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveCreationFee",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getCreationFee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "changeManager",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveManager",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getManager",
                "inputs": [],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "receiveInfo",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint64"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint64"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getTokenCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "AUC_CT_nifi_auc_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "tokenAddress",
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
                        "name": "startTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "auctionCreator",
                        "type": "address"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "d8c13051f7042b77cf5dda6d39196c7725c8e63bd7e4a17752a7fa41d92aafcd",
};
export default DirectAuctionRootContract;