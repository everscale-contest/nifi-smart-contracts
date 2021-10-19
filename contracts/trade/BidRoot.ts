const BidRootContract = {
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
                        "name": "creationAndStorageFee",
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
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
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
                    },
                    {
                        "name": "storageFee",
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
                    },
                    {
                        "name": "storageFee",
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
                    },
                    {
                        "name": "storageFee",
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
                "name": "BID_CT_nifi_bid_1",
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
                        "name": "bidValue",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "bidCreator",
                        "type": "address"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "f81655f0e92cc9c1543f19349b5180618c9617b388e6fbd7e329b7f216b4da15",
};
export default BidRootContract;