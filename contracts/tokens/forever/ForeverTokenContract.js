const ForeverTokenContract = {
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
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
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
                        "name": "creatorFees",
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
                        "name": "creatorFees",
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
                "name": "getStamps",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "stamp",
                                "type": "address"
                            },
                            {
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "name": "seal",
                                "type": "address"
                            },
                            {
                                "name": "place",
                                "type": "uint8"
                            }
                        ],
                        "name": "stamps",
                        "type": "tuple[]"
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
                "name": "addStamp",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "seal",
                        "type": "address"
                    },
                    {
                        "name": "place",
                        "type": "uint8"
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
                "name": "TK_CO_nifi_for1_1",
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
                "name": "TK_MG_nifi_for1_1",
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
            },
            {
                "name": "FOR_SC_nifi_for1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "token1Address",
                        "type": "address"
                    },
                    {
                        "name": "token2Address",
                        "type": "address"
                    },
                    {
                        "name": "token3Address",
                        "type": "address"
                    },
                    {
                        "name": "token4Address",
                        "type": "address"
                    },
                    {
                        "name": "sealAddress",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "FOR_EX_nifi_for1_1",
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
                "name": "_creatorFees",
                "type": "uint32"
            },
            {
                "name": "_hash",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "name": "stamp",
                        "type": "address"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "seal",
                        "type": "address"
                    },
                    {
                        "name": "place",
                        "type": "uint8"
                    }
                ],
                "name": "_stamps",
                "type": "tuple[]"
            }
        ]
    },
    tvc: "te6ccgECQgEACwUAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gs/BQRBA77tRNDXScMB+GaJ+Gkh2zzTAAGOGoECANcYIPkBAdMAAZTT/wMBkwL4QuL5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPD05BgN67UTQ10nDAfhmItDTA/pAMPhpqTgA+ER/b3GCCJiWgG9ybW9zcG90+GTcIccA4wIh1w0f8rwh4wMB2zzyPD4+BgM8IIIQIXszCLvjAiCCEEVkPGi74wIgghBv2nP+u+MCKA8HAzwgghBcxOa2uuMCIIIQbB9PsLrjAiCCEG/ac/664wIMCwgDijD4RvLgTPhCbuMA0x/4RFhvdfhk0ds8JY4rJ9DTAfpAMDHIz4cgznHPC2FeQMjPk79pz/rOVTDIzssfWcjOyx/Nzc3JcDoKCQGQjj/4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2leQMj4RG8VzwsfzlUwyM7LH1nIzssfzc3NyfhEbxTi+wDjAPIAMQEg+ERwb3Jwb3GAQG90+GTbPDIDejD4RvLgTPhCbuMA0ds8I44kJdDTAfpAMDHIz4cgznHPC2FeIMjPk7B9PsLOyx/L/83JcPsAkl8D4uMA8gA6LzEDJjD4RvLgTPhCbuMA0ds8MNs88gA6DTUBKoj4SfhNxwX4I/hOubDy6Gf4AHD4bg4APE1ldGhvZCBmb3IgbG9ja2VkIG1hbmFnZXIgb25seQRQIIIQIuICL7rjAiCCECzNJJ+64wIgghBD21qyuuMCIIIQRWQ8aLrjAhcVExADOjD4RvLgTPhCbuMAIZPU0dDe+kDTH9HbPDDbPPIAOhE1BLqI+En4TMcF+CP4Tr6w+En4TccF+CP4TrmwsfLoaIgi+kJvE9cL/8MA8uhqiPgjIrny6Gn4AAH4bSD4bvhN+EvbPMjPhyDOcc8LYVUgyM+Qt8wAVss/zssfzclw+wAsNhIrACJJbnZhbGlkIGxvY2sgdGltZQOMMPhG8uBM+EJu4wDR2zwhji4j0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAMPbWrKM8WAW8iAssf9ADJcPsAkTDi4wDyADoUMQAE+FIDcjD4RvLgTPhCbuMA0ds8Io4hJNDTAfpAMDHIz4cgznHPC2ECyM+SszSSfs7LP83JcPsAkVvi4wDyADoWMQAI+Er4SwNOMPhG8uBM+EJu4wAhldM/1NHQktM/4vpA1NHQ+kDTB9HbPDDbPPIAOhg1A/z4I/hOvPLgafhMI8cF8uBrgvA0p+YWEchXwRiXVoNOtGnlhMppKgIGAjkg5zJwhHcikcjL/3BtgED0Q9s8cViAQPQWJMjLP3JYgED0Q8j0AMkg+QAh12WC8PIaexjJIkExHbhMAeXef1g4FsiXoJFqHiXR/vsq/hNSIngj2zwnJhkBgvhJIcjPigBAy//J0McF8uBq+FJvEMEEjoCOI/hJyM+FiM6NBIAAAAAAAAAAAAAAAAAAL8nD6sDPFsmAQPsA4l8IGgJE+FL4SV84bwTbPMkBbyIhpFUggCD0F28CIPhybxDABI6A3iUbBExw+FJvEYAg9A/ystDbPG8TcHGTIMEEjoDjGDABww+xjoCOgOL7ACQiHhwEeHD4Um8RgCD0D/Ky0Ns8bxJz+FJvEYAg9A/ystDbPG8QcvhSbxGAIPQP8rLQ2zxvEHH4Um8RgCD0D/Ky0CQkJB0DhNs8bxBw+FJvEYAg9A/ystDbPG8Q+EvbPMjPhyDOcc8LYVVQyM+QXDkHxss/zlUwyM5VIMjOWcjOAcjOzc3Nzc3JcCQkKwRicPhSbxGAIPQP8rLQ2zxvEMjPhYjOic8WyXD7AHH4Um8RgCD0D/Ky0Ns8bxDIz4WIziQhJB8EXonPFslw+wBy+FJvEYAg9A/ystDbPG8QyM+FiM6JzxbJcPsAc/hSbxGAIPQP8rLQISQhIAOG2zxvEMjPhYjOic8WyXD7APhL2zzIz4cgzo0EAAAAAAAAAAAAAAAAAqT6Y9jPFss/yXD7APhMyM+FCM6Ab89AyYEAoCQhKwArQF9eEAAAAAAAAAAAAAAAAAAAvycPqwSCUyD4Um8RgCD0D/Ky0Ns8bxOxMyD4Um8RgCD0D/Ky0Ns8bxFw+FJvEYAg9A/ystDbPG8RxwWzII6A35R/Mtsx4KQkJCQjAkgwIPhSbxGAIPQP8rLQ2zxvEnD4Um8RgCD0D/Ky0Ns8bxLHBbMkJAAi+kDU0dD6QNTR0PpA0wfRbwQAIm8kXiDIzlUgyM5ZyM7LB83NACzIz4wIBNJYzwsPyw9Yzwv/y//J0PkCAEiNCGACSO4Xrk/LABQ2o5dZeYPAxw47Kc9NYDUnQZzFatUc3VQEUCCCEA3M8Oi64wIgghAUewjIuuMCIIIQFaW1lLrjAiCCECF7Mwi64wIzMC0pAzYw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8MNs88gA6KjUDmoj4SfhMxwX4I/hOvrD4SfhNxwX4I/hOubCx8uhoiCH6Qm8T1wv/wwDy6Gr4ACD4bPhL2zzIz4cgznHPC2FZyM+Rf8huTss/zs3JcPsALDYrAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwASE1ldGhvZCBmb3IgdGhlIG93bmVyIG9yIG1hbmFnZXIgb25seQP2MPhG8uBM+EJu4wDTH/hEWG91+GTR2zwjjiIl0NMB+kAwMcjPhyDOcc8LYV4gyM+SVpbWUs7LH8v/zclwjjb4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2leIMj4RG8Vzwsfzssfy//NyfhEbxTi+wDjAPIAOi4xASD4RHBvcnBvcYBAb3T4ZNs8LwAM+E/4UPhRA4ww+Eby4Ez4Qm7jANHbPCWOLSfQ0wH6QDAxyM+HIM5xzwthXkDIz5JR7CMizlUwyM7LH1nIzssfzc3NyXD7AJJfBeLjAPIAOjIxACjtRNDT/9M/MfhDWMjL/8s/zsntVAAU+Ez4T/hQ+E34TgRsMPhCbuMA+EbycyGT1NHQ3vpA1NHQ+kDTH9TR0PpA0x/T/9GI+En4SscF8uhliCKBCWG58uhrOTg3NANkiCP6Qm8T1wv/wwDy6GqIJvpCbxPXC//DAPLoavgAWPhvAfhw+HFY+GwB+G34bts88gA2NjUAgPhS+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+Dzss/VWDIzlVQyM7LH1UwyM7LH8v/AW8iAssf9ADNzc3J7VQAKkFkZHJlc3MgY2FuJ3QgYmUgbnVsbAAoVW52YWxpZCBjcmVhdG9yIGZlZXMAME1ldGhvZCBmb3IgdGhlIHJvb3Qgb25seQIW7UTQ10nCAY6A4w07OgCE7UTQ0//TP9MAMfpA0z/U0dD6QNTR0PpA0x/U0dD6QNMf0//TH/QEWW8CAdH4cvhx+HD4b/hu+G34bPhr+Gr4Y/hiA4xw7UTQ9AVxIYBA9A6OgN9yIoBA9A6T1ws/kXDiiSBwiXBfIG1vAvhy+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjPD09AQKJPQBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAK+Eby4EwCCvSkIPShQUAAFHNvbCAwLjU3LjAAAA==",
    code: "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",
    codeHash: "395f83c6cfb301542a454fac183113a367723bb0c5faed816c944eec51dc01f6",
};
module.exports = { ForeverTokenContract };