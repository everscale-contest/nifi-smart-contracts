const AskRootContract = {
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
                    },
                    {
                        "name": "showcaseFee",
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
                "name": "ASK_CT_nifi_ask_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "showcaseFee",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "5a93118982d2b547bc733720db229ac7fc01cd45a49e9eb708d3efd9f091587c",
};
export default AskRootContract;