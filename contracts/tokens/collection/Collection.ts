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
                        "type": "uint256[]"
                    },
                    {
                        "name": "level2",
                        "type": "uint256[]"
                    },
                    {
                        "name": "level3",
                        "type": "uint256[]"
                    },
                    {
                        "name": "level4",
                        "type": "uint256[]"
                    },
                    {
                        "name": "level5",
                        "type": "uint256[]"
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
                "type": "uint256[]"
            },
            {
                "name": "_level2",
                "type": "uint256[]"
            },
            {
                "name": "_level3",
                "type": "uint256[]"
            },
            {
                "name": "_level4",
                "type": "uint256[]"
            },
            {
                "name": "_level5",
                "type": "uint256[]"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "9d5c3eb0dd0713ed66982b155faaf3fc36e97c2469a46eecd98434fdc3f155dd",
};
export default CollectionContract;