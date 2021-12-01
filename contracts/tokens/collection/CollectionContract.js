const CollectionContract = {
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
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "manager",
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
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "mintCost",
                        "type": "uint128"
                    },
                    {
                        "name": "level1",
                        "type": "string[]"
                    },
                    {
                        "name": "level2",
                        "type": "string[]"
                    },
                    {
                        "name": "level3",
                        "type": "string[]"
                    },
                    {
                        "name": "level4",
                        "type": "string[]"
                    },
                    {
                        "name": "level5",
                        "type": "string[]"
                    },
                    {
                        "name": "hash",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "mint",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "id1",
                        "type": "uint8"
                    },
                    {
                        "name": "id2",
                        "type": "uint8"
                    },
                    {
                        "name": "id3",
                        "type": "uint8"
                    },
                    {
                        "name": "id4",
                        "type": "uint8"
                    },
                    {
                        "name": "id5",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "mintToken",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getTokenAddress",
                "inputs": [
                    {
                        "name": "id1",
                        "type": "uint8"
                    },
                    {
                        "name": "id2",
                        "type": "uint8"
                    },
                    {
                        "name": "id3",
                        "type": "uint8"
                    },
                    {
                        "name": "id4",
                        "type": "uint8"
                    },
                    {
                        "name": "id5",
                        "type": "uint8"
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
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "getLevels",
                "inputs": [],
                "outputs": [
                    {
                        "name": "level1",
                        "type": "string[]"
                    },
                    {
                        "name": "level2",
                        "type": "string[]"
                    },
                    {
                        "name": "level3",
                        "type": "string[]"
                    },
                    {
                        "name": "level4",
                        "type": "string[]"
                    },
                    {
                        "name": "level5",
                        "type": "string[]"
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
                "name": "TK_MT_nifi_col1_1",
                "inputs": [
                    {
                        "name": "collectionId",
                        "type": "uint64"
                    },
                    {
                        "name": "index",
                        "type": "uint32"
                    },
                    {
                        "name": "id1",
                        "type": "uint8"
                    },
                    {
                        "name": "id2",
                        "type": "uint8"
                    },
                    {
                        "name": "id3",
                        "type": "uint8"
                    },
                    {
                        "name": "id4",
                        "type": "uint8"
                    },
                    {
                        "name": "id5",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SRC_PY_nifi_col1_1",
                "inputs": [
                    {
                        "name": "collectionId",
                        "type": "uint64"
                    },
                    {
                        "name": "futureId",
                        "type": "uint32"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "owner",
                        "type": "address"
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
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_manager",
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
                "type": "uint32"
            },
            {
                "name": "_ready2Mint",
                "type": "uint32"
            },
            {
                "name": "_limit",
                "type": "uint64"
            },
            {
                "name": "_creatorFees",
                "type": "uint32"
            },
            {
                "name": "_mintCost",
                "type": "uint128"
            },
            {
                "name": "_level1",
                "type": "string[]"
            },
            {
                "name": "_level2",
                "type": "string[]"
            },
            {
                "name": "_level3",
                "type": "string[]"
            },
            {
                "name": "_level4",
                "type": "string[]"
            },
            {
                "name": "_level5",
                "type": "string[]"
            },
            {
                "name": "_hash",
                "type": "string"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "9119920edc3256e1a6b3520672a2893994fee89664e2cb74d25622fda3fabcef",
};
module.exports = { CollectionContract };