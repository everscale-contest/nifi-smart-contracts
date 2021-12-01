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
                        "name": "mintId",
                        "type": "uint32"
                    },
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
    codeHash: "ad8989b3e0cc3c067a416278800c74639f554e05ae008122bddb202e62977896",
};
export default CollectionContract;