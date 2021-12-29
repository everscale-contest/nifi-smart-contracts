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
                        "name": "owner",
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
                "name": "FOR_CO_nifi_for1_1",
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
                "name": "FOR_MG_nifi_for1_1",
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
                        "name": "place",
                        "type": "uint8"
                    }
                ],
                "name": "_stamps",
                "type": "tuple[]"
            }
        ]
    },
    tvc: "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",
    code: "te6ccgECOgEACl8ABCSK7VMg4wMgwP/jAiDA/uMC8gs3BAE5AQACAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwElAwEI2zzyPAUDeu1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds88jw2NgUDPCCCEBWltZS74wIgghBTJcyEu+MCIIIQb9pz/rvjAhkOBgM8IIIQXMTmtrrjAiCCEGwfT7C64wIgghBv2nP+uuMCCwoHA4ow+Eby4Ez4Qm7jANMf+ERYb3X4ZNHbPCWOKyfQ0wH6QDAxyM+HIM5xzwthXkDIz5O/ac/6zlUwyM7LH1nIzssfzc3NyXA1CQgBkI4/+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpXkDI+ERvFc8LH85VMMjOyx9ZyM7LH83Nzcn4RG8U4vsA4wDyAB4BIPhEcG9ycG9xgEBvdPhk2zwfA3ow+Eby4Ez4Qm7jANHbPCOOJCXQ0wH6QDAxyM+HIM5xzwthXiDIz5OwfT7Czssfy//NyXD7AJJfA+LjAPIANRweAyYw+Eby4Ez4Qm7jANHbPDDbPPIANQwpASqI+En4TccF+CP4Trmw8uhn+ABw+G4NADxNZXRob2QgZm9yIGxvY2tlZCBtYW5hZ2VyIG9ubHkEUCCCECF7Mwi64wIgghAszSSfuuMCIIIQRWQ8aLrjAiCCEFMlzIS64wIWFBEPA4ww+Eby4Ez4Qm7jANHbPCGOLiPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA0yXMhIzxYBbyICyx/0AMlw+wCRMOLjAPIANRAeAAT4UgM6MPhG8uBM+EJu4wAhk9TR0N76QNMf0ds8MNs88gA1EikEuoj4SfhMxwX4I/hOvrD4SfhNxwX4I/hOubCx8uhoiCL6Qm8T1wv/wwDy6GqI+CMiufLoafgAAfhtIPhu+E34S9s8yM+HIM5xzwthVSDIz5Ep5oR+yz/Oyx/NyXD7ABgiEzEAIkludmFsaWQgbG9jayB0aW1lA3Iw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPkrM0kn7Oyz/NyXD7AJFb4uMA8gA1FR4ACPhK+EsDNjD4RvLgTPhCbuMAIZPU0dDe+kDR2zww2zzyADUXKQOaiPhJ+EzHBfgj+E6+sPhJ+E3HBfgj+E65sLHy6GiIIfpCbxPXC//DAPLoavgAIPhs+EvbPMjPhyDOcc8LYVnIz5GaX2Vmyz/Ozclw+wAYIjEASE1ldGhvZCBmb3IgdGhlIG93bmVyIG9yIG1hbmFnZXIgb25seQRQIIIQBuYgFbrjAiCCEA3M8Oi64wIgghAUewjIuuMCIIIQFaW1lLrjAiggHRoD9jD4RvLgTPhCbuMA0x/4RFhvdfhk0ds8I44iJdDTAfpAMDHIz4cgznHPC2FeIMjPklaW1lLOyx/L/83JcI42+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpXiDI+ERvFc8LH87LH8v/zcn4RG8U4vsA4wDyADUbHgEg+ERwb3Jwb3GAQG90+GTbPBwADPhP+FD4UQOMMPhG8uBM+EJu4wDR2zwlji0n0NMB+kAwMcjPhyDOcc8LYV5AyM+SUewjIs5VMMjOyx9ZyM7LH83Nzclw+wCSXwXi4wDyADUfHgAo7UTQ0//TPzH4Q1jIy//LP87J7VQAFPhM+E/4UPhN+E4EbDD4Qm7jAPhG8nMhk9TR0N76QNTR0PpA0x/U0dD6QNMf0//RiPhJ+ErHBfLoZYgigQlhufLoayUkIyEDZIgj+kJvE9cL/8MA8uhqiCb6Qm8T1wv/wwDy6Gr4AFj4bwH4cPhxWPhsAfht+G7bPPIAIiIpACpBZGRyZXNzIGNhbid0IGJlIG51bGwAKFVudmFsaWQgY3JlYXRvciBmZWVzADBNZXRob2QgZm9yIHRoZSByb290IG9ubHkCFu1E0NdJwgGOgOMNJjUB1HDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOk9cLP5Fw4vhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GwnANKNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bXD4bo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhvcPhwcPhxcG1vAvhygED0DvK91wv/+GJw+GMDOjD4RvLgTPhCbuMAIZPU0dDe+kDTB9HbPDDbPPIANSopAID4UvhR+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg87LP1VgyM5VUMjOyx9VMMjOyx/L/wFvIgLLH/QAzc3Nye1UAcT4I/hOvPLgafhJjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwXy0Gr4Um8QwQSOgI4j+EnIz4WIzo0EgAAAAAAAAAAAAAAAAAAvycPqwM8WyYBA+wDiWysCQvhS+EldbwPbPMkBbyIhpFUggCD0F28CIPhybxDABI6A3jQsBEhw+FJvEYAg9A/ystDbPG8ScHGTIMEEjoDjGDABww+xjoCOgOIzMi4tAUj4S9s8yM+HIM6NBAAAAAAAAAAAAAAAAAX+bugYzxbLP8lw+wAxBPZw+FJvEYAg9A/ystDbPG8QyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAL8nD6sDPFslw+wBx+FJvEYAg9A/ystDbPG8QyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAL8nD6sDPFslw+wBy+FJvEYAg9A/ystDbPG8QyM+FiM4zMzMvA/yNBU5iWgAAAAAAAAAAAAAAAAAAL8nD6sDPFslw+wBz+FJvEYAg9A/ystDbPG8QyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAL8nD6sDPFslw+wD4S9s8yM+HIM6NBAAAAAAAAAAAAAAAAAKk+mPYzxbLP8lw+wD4TMjPhQjOgG8zMTAAEM9AyYEAoPsAAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwDeFMg+FJvEYAg9A/ystDbPG8SsTMg+FJvEYAg9A/ystDbPG8RcPhSbxGAIPQP8rLQ2zxvEccFlH8y2zHhpDMzMwAY+kDU0dD6QNMH0W8DABZvIwLIzlnIzssHzQCE7UTQ0//TP9MAMfpA0z/U0dD6QNTR0PpA0x/U0dD6QNMf0//TH/QEWW8CAdH4cvhx+HD4b/hu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KE5OAAUc29sIDAuNTMuMAAA",
    codeHash: "646ee8f7aa16dadf57ac5a173f536bcf767b58fb9d1e17db206cb5d782b6584c",
};
module.exports = { ForeverTokenContract };