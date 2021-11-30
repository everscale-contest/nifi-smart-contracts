const CollectionTokenContract = {
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
                "name": "onMint",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
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
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "changeOwner",
                "inputs": [
                    {
                        "name": "owner",
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
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "collection",
                        "type": "address"
                    },
                    {
                        "name": "collectionId",
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
                ]
            },
            {
                "name": "receiveTradeInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "owner",
                        "type": "address"
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
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "getTradeInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "owner",
                        "type": "address"
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
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "lockManager",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "unlockTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "unlock",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "constructor",
                "inputs": [],
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
                "name": "_collection",
                "type": "address"
            },
            {
                "key": 3,
                "name": "_collectionId",
                "type": "uint64"
            },
            {
                "key": 4,
                "name": "_id1",
                "type": "uint8"
            },
            {
                "key": 5,
                "name": "_id2",
                "type": "uint8"
            },
            {
                "key": 6,
                "name": "_id3",
                "type": "uint8"
            },
            {
                "key": 7,
                "name": "_id4",
                "type": "uint8"
            },
            {
                "key": 8,
                "name": "_id5",
                "type": "uint8"
            }
        ],
        "events": [
            {
                "name": "TK_CO_nifi_col1_1",
                "inputs": [
                    {
                        "name": "_collectionId",
                        "type": "uint64"
                    },
                    {
                        "name": "index",
                        "type": "uint32"
                    },
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_MG_nifi_col1_1",
                "inputs": [
                    {
                        "name": "_collectionId",
                        "type": "uint64"
                    },
                    {
                        "name": "index",
                        "type": "uint32"
                    },
                    {
                        "name": "newManager",
                        "type": "address"
                    },
                    {
                        "name": "expirationTime",
                        "type": "uint32"
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
                "name": "_collection",
                "type": "address"
            },
            {
                "name": "_collectionId",
                "type": "uint64"
            },
            {
                "name": "_id1",
                "type": "uint8"
            },
            {
                "name": "_id2",
                "type": "uint8"
            },
            {
                "name": "_id3",
                "type": "uint8"
            },
            {
                "name": "_id4",
                "type": "uint8"
            },
            {
                "name": "_id5",
                "type": "uint8"
            },
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_managerUnlockTime",
                "type": "uint32"
            },
            {
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_creatorFees",
                "type": "uint32"
            },
            {
                "name": "_index",
                "type": "uint32"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "f018e41c97340ac8fbd1d0d5b8ab2a00e4faa2124b3823f84e6141d2aa33ab42",
};
module.exports = { CollectionTokenContract };