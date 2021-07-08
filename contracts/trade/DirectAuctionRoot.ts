const DirectAuctionRootContract = {
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
        "events": []
    },
    tvc: "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",
    code: "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",
    codeHash: "908a68a11a47e4a106ef0106f6b032d197401e79f13d1eb7bd85d8bb840213a0",
};
export default DirectAuctionRootContract;