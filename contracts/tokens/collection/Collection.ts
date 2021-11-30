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
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "88c759835ff80a39edcd28a6cc4aec156620e27451f78386c4942dc2a7b270ed",
};
export default CollectionContract;