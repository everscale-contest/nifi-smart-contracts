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
                        "name": "manager",
                        "type": "address"
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
                        "name": "creatorPercentReward",
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
    codeHash: "000616964187da9e5a2afd87688b075de57f9a3346726711d782805a2ccc932f",
};
module.exports = { Art2RootContract };