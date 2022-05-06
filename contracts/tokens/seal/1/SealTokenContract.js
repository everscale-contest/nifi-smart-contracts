const SealTokenContract = {
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
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorPercentReward",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "endorseStampCost",
                        "type": "uint128"
                    },
                    {
                        "name": "endorseRootFixIncome",
                        "type": "uint128"
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
                "name": "receiveArtInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorPercentReward",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getArtInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorPercentReward",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ]
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
                        "name": "id",
                        "type": "uint64"
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
                        "name": "creatorPercentReward",
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
                        "name": "creatorPercentReward",
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
                "name": "endorse",
                "inputs": [
                    {
                        "name": "stamp",
                        "type": "address"
                    },
                    {
                        "name": "place",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "endorseStampCost",
                        "type": "uint128"
                    },
                    {
                        "name": "endorseRootFixIncome",
                        "type": "uint128"
                    }
                ]
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
                "name": "TK_CO_nifi_seal_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_MG_nifi_seal_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
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
                "name": "_id",
                "type": "uint64"
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
                "name": "_creatorPercentReward",
                "type": "uint32"
            },
            {
                "name": "_hash",
                "type": "uint256"
            },
            {
                "name": "_endorseStampCost",
                "type": "uint128"
            },
            {
                "name": "_endorseRootFixIncome",
                "type": "uint128"
            }
        ]
    },
    tvc: "te6ccgECNAEACEwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsxBQQzA77tRNDXScMB+GaJ+Gkh2zzTAAGOGoECANcYIPkBAdMAAZTT/wMBkwL4QuL5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPBoXBgN67UTQ10nDAfhmItDTA/pAMPhpqTgA+ER/b3GCCJiWgG9ybW9zcG90+GTcIccA4wIh1w0f8rwh4wMB2zzyPDAwBgM8IIIQLM0kn7vjAiCCEFasAlK74wIgghBv2nP+u+MCIA8HAzwgghBcxOa2uuMCIIIQbB9PsLrjAiCCEG/ac/664wIMCwgDijD4RvLgTPhCbuMA0x/4RFhvdfhk0ds8JY4rJ9DTAfpAMDHIz4cgznHPC2FeQMjPk79pz/rOVTDIzssfWcjOyx/Nzc3JcC8KCQGQjj/4RCBvEyFvEvhJVQJvEcjPhIDKAM+EQM4B+gL0AHHPC2leQMj4RG8VzwsfzlUwyM7LH1nIzssfzc3NyfhEbxTi+wDjAPIALQEg+ERwb3Jwb3GAQG90+GTbPC4DejD4RvLgTPhCbuMA0ds8I44kJdDTAfpAMDHIz4cgznHPC2FeIMjPk7B9PsLOyx/L/83JcPsAkl8D4uMA8gAvKy0DJjD4RvLgTPhCbuMA0ds8MNs88gAvDSQBKoj4SfhNxwX4I/hOubDy6Gf4AHD4bg4APE1ldGhvZCBmb3IgbG9ja2VkIG1hbmFnZXIgb25seQRQIIIQRWQ8aLrjAiCCEEru55C64wIgghBQVBjguuMCIIIQVqwCUrrjAh0bExADOjD4RvLgTPhCbuMAIZPU0dDe+kDTB9HbPDDbPPIALxEkAeCI+En4TMcF+CP4Tr6w8uhs+FP4UqC1f2im/mABvvLgbyDAASHAAiLABCPACLGxsfLgcPhMAfhL+FJVA3/Iz4WAygDPhEDOAfoCcc8LalUgyM+Q8g+Xgss/ywfOzclw+wD4SsjPhYjOgG/PQMmAQPsAEgAqTWV0aG9kIGZvciBvd25lciBvbmx5BHow+EJu4wD4RvJzIZPU0dDe+kDU0dD6QNMf1NHQ+kDTH9P/03/U0dDTf9GI+En4SscF8uhliCSBCWG58uhrFxYVFAN6iCX6Qm8T1wv/wwDy6GqIKPpCbxPXC//DAPLoavgAVQP4b1UC+HBY+HFVA/hsVQL4bVj4bgH4cvhz2zzyACcnJAAoVW52YWxpZCBjcmVhdG9yIGZlZXMAME1ldGhvZCBmb3IgdGhlIHJvb3Qgb25seQIW7UTQ10nCAY6A4w0YLwOKcO1E0PQFcSGAQPQOjoDfciKAQPQOk9cLP5Fw4okgcIlwXzD4c/hy+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjGRoaAQKJGgBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEANyMPhG8uBM+EJu4wDR2zwijiEk0NMB+kAwMcjPhyDOgGLPQF4Bz5Mru55Cy3/Lf8lw+wCRW+LjAPIALxwtAAj4UvhTAzow+Eby4Ez4Qm7jACGT1NHQ3vpA0x/R2zww2zzyAC8eJAS6iPhJ+EzHBfgj+E6+sPhJ+E3HBfgj+E65sLHy6GiIIvpCbxPXC//DAPLoaoj4IyK58uhp+AAB+G0g+G74TfhL2zzIz4cgznHPC2FVIMjPkWZbgzLLP87LH83JcPsAKCcfJgAiSW52YWxpZCBsb2NrIHRpbWUEUCCCEBR7CMi64wIgghAVpbWUuuMCIIIQIXszCLrjAiCCECzNJJ+64wIsKSMhA3Iw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPkrM0kn7Oyz/NyXD7AJFb4uMA8gAvIi0ACPhK+EsDNjD4RvLgTPhCbuMAIZPU0dDe+kDR2zww2zzyAC8lJACC+FP4UvhR+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg87LP1VwyM5VYMjOyx9VQMjOyx/L/8t/AcjLf83Nzc3J7VQDmoj4SfhMxwX4I/hOvrD4SfhNxwX4I/hOubCx8uhoiCH6Qm8T1wv/wwDy6Gr4ACD4bPhL2zzIz4cgznHPC2FZyM+Q2tk5yss/zs3JcPsAKCcmAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwAKkFkZHJlc3MgY2FuJ3QgYmUgbnVsbABITWV0aG9kIGZvciB0aGUgb3duZXIgb3IgbWFuYWdlciBvbmx5A/Yw+Eby4Ez4Qm7jANMf+ERYb3X4ZNHbPCOOIiXQ0wH6QDAxyM+HIM5xzwthXiDIz5JWltZSzssfy//NyXCONvhEIG8TIW8S+ElVAm8RyM+EgMoAz4RAzgH6AvQAcc8LaV4gyPhEbxXPCx/Oyx/L/83J+ERvFOL7AOMA8gAvKi0BIPhEcG9ycG9xgEBvdPhk2zwrAAz4T/hQ+FEDjDD4RvLgTPhCbuMA0ds8JY4tJ9DTAfpAMDHIz4cgznHPC2FeQMjPklHsIyLOVTDIzssfWcjOyx/Nzc3JcPsAkl8F4uMA8gAvLi0AKO1E0NP/0z8x+ENYyMv/yz/Oye1UABT4TPhP+FD4TfhOAIbtRNDT/9M/0wAx+kDTP9TR0PpA1NHQ+kDTH9TR0PpA0x/T/9N/1NHQ03/R+HP4cvhx+HD4b/hu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEzMgAUc29sIDAuNTguMgAA",
    code: "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",
    codeHash: "2cd547ec15da50d95f462784f38abdb103d40d8581219398a8ea0aac33e4f8e3",
};
module.exports = { SealTokenContract };