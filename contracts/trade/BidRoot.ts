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
    codeHash: "200f8689a20873f89b2fa87137e45b04fc1a32b41c05e74fffae590f36f0a7ea",
};
export default BidRootContract;