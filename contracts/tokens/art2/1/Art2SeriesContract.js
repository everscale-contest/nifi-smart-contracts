const Art2SeriesContract = {
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
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "limit",
                        "type": "uint64"
                    },
                    {
                        "name": "tokenCode",
                        "type": "cell"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "minMintFee",
                        "type": "uint128"
                    },
                    {
                        "name": "mintTopup",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "create",
                "inputs": [],
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
                        "name": "answerId",
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
                "name": "getManager",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "changeManager",
                "inputs": [
                    {
                        "name": "newManager",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint64"
                    },
                    {
                        "name": "limit",
                        "type": "uint64"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
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
                "name": "TK_MT_nifi_art2_1",
                "inputs": [
                    {
                        "name": "seriesId",
                        "type": "uint64"
                    },
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
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_symbol",
                "type": "string"
            },
            {
                "name": "_tokenCode",
                "type": "cell"
            },
            {
                "name": "_totalSupply",
                "type": "uint64"
            },
            {
                "name": "_limit",
                "type": "uint64"
            },
            {
                "name": "_hash",
                "type": "uint256"
            },
            {
                "name": "_creatorPercent",
                "type": "uint32"
            },
            {
                "name": "_minMintFee",
                "type": "uint128"
            },
            {
                "name": "_mintTopup",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "2339e0e0834b54bc49e45ec450154833357bfb7560106a52a08b7fff9fdf5a38",
};
module.exports = { Art2SeriesContract };