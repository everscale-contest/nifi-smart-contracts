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
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
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
                    },
                    {
                        "name": "mintCost",
                        "type": "uint128"
                    },
                    {
                        "name": "startTime",
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
            },
            {
                "name": "_startTime",
                "type": "uint32"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "ce8021e557dbb34470809761278e1be4e56ecf6f92eee5fe401a0a4171ebf013",
};
export default CollectionContract;