const BidRootContract = {
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
                        "type": "uint128"
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
                        "type": "uint128"
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
                        "type": "uint128"
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
                        "type": "uint128"
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
                "name": "BID_CT_1",
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
    codeHash: "e95da5b205c85e42a32bedb28de184cd5a80d8d18a77408332e00dd3ad7ced6d",
};
export default BidRootContract;