const Art2RootContract = {
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
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minMintFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    },
                    {
                        "name": "mintTopup",
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
                        "name": "seriesCode",
                        "type": "cell"
                    },
                    {
                        "name": "tokenCode",
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
                "name": "createSerie",
                "inputs": [
                    {
                        "name": "limit",
                        "type": "uint64"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "creatorPercent",
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
                "name": "getSeriesAddress",
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
                        "name": "serie",
                        "type": "uint64"
                    },
                    {
                        "name": "token",
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
                "name": "setCreationParameters",
                "inputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minMintFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
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
                "name": "getCreationParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minMintFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    },
                    {
                        "name": "mintTopup",
                        "type": "uint128"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "SR_CT_nifi_art2_1",
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
                "name": "_minCreationFee",
                "type": "uint128"
            },
            {
                "name": "_minMintFee",
                "type": "uint128"
            },
            {
                "name": "_creationTopup",
                "type": "uint128"
            },
            {
                "name": "_mintTopup",
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
                "name": "_tokenCode",
                "type": "cell"
            },
            {
                "name": "_seriesCode",
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
    codeHash: "5f8a789e5e392771336400e24fdf08ada3822d77991dff12ed648e75bf1edede",
};
module.exports = { Art2RootContract };