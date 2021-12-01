const CollectionRootContract = {
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
                        "name": "creationMinValue",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFee",
                        "type": "uint128"
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
                        "name": "collectionCode",
                        "type": "cell"
                    },
                    {
                        "name": "colTokenCode",
                        "type": "cell"
                    }
                ],
                "outputs": []
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
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint128"
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
                "name": "createCollection",
                "inputs": [
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
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getCollectionAddress",
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
                "name": "getTokenAddress",
                "inputs": [
                    {
                        "name": "col",
                        "type": "uint64"
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
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "SRC_CT_nifi_col1_1",
                "inputs": [
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
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_creationFee",
                "type": "uint128"
            },
            {
                "name": "_creationMinValue",
                "type": "uint128"
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
                "name": "_colTokenCode",
                "type": "cell"
            },
            {
                "name": "_collectionCode",
                "type": "cell"
            },
            {
                "name": "_totalSupply",
                "type": "uint64"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "51bc5e4cb2d3461ef97c6c926e0a330e280411af91e7b34f4c078a665fba22b2",
};
module.exports = { CollectionRootContract };