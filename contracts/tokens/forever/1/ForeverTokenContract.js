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
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "delForeverCost",
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
                        "name": "creatorPercent",
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
                        "name": "creatorPercent",
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
                        "name": "creatorPercent",
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
                        "name": "creatorPercent",
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
            },
            {
                "name": "getParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "delForeverCost",
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
                "name": "_creatorPercent",
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
            },
            {
                "name": "_delForeverCost",
                "type": "uint128"
            }
        ]
    },
    tvc: "te6ccgECQgEAC0QAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gs/BQRBA7ztRNDXScMB+GaJ+Gkh2zzTAAGOGYMI1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8HhsGA3rtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDjAiHXDR/yvCHjAwHbPPI8Pj4GAzwgghAi4gIvu+MCIIIQRWQ8aLvjAiCCEHOYR+a74wIhEQcEUCCCEFzE5ra64wIgghBsH0+wuuMCIIIQb9pz/rrjAiCCEHOYR+a64wIODQoIA2gw+Eby4Ez4Qm7jANHbPCGOHCPQ0wH6QDAxyM+HIM6CEPOYR+bPC4HLf8lw+wCRMOLjAPIAPQk7AAT4UwOKMPhG8uBM+EJu4wDTH/hEWG91+GTR2zwljisn0NMB+kAwMcjPhyDOcc8LYV5AyM+Tv2nP+s5VMMjOyx9ZyM7LH83NzclwPQwLAZCOP/hEIG8TIW8S+ElVAm8RyM+EgMoAz4RAzgH6AvQAcc8LaV5AyPhEbxXPCx/OVTDIzssfWcjOyx/Nzc3J+ERvFOL7AOMA8gA7ASD4RHBvcnBvcYBAb3T4ZNs8PAN6MPhG8uBM+EJu4wDR2zwjjiQl0NMB+kAwMcjPhyDOcc8LYV4gyM+TsH0+ws7LH8v/zclw+wCSXwPi4wDyAD05OwMmMPhG8uBM+EJu4wDR2zww2zzyAD0PMgEqiPhJ+E3HBfgj+E65sPLoZ/gAcPhuEAA8TWV0aG9kIGZvciBsb2NrZWQgbWFuYWdlciBvbmx5BFAgghAszSSfuuMCIIIQPXi6z7rjAiCCEEPbWrK64wIgghBFZDxouuMCHxcVEgM6MPhG8uBM+EJu4wAhk9TR0N76QNMf0ds8MNs88gA9EzIEuoj4SfhMxwX4I/hOvrD4SfhNxwX4I/hOubCx8uhoiCL6Qm8T1wv/wwDy6GqI+CMiufLoafgAAfhtIPhu+E34S9s8yM+HIM5xzwthVSDIz5C3zABWyz/Oyx/NyXD7ADY1FDQAIkludmFsaWQgbG9jayB0aW1lA3Qw+Eby4Ez4Qm7jANHbPCGOIiPQ0wH6QDAxyM+HIM6CEMPbWrLPC4EBbyICyx/0AMlw+wCRMOLjAPIAPRY7AAT4UgRwMPhCbuMA+EbycyGT1NHQ3vpA1NHQ+kDTH9TR0PpA0x/T/9N/0Yj4SfhKxwXy6GWII4EJYbny6GsbGhkYA3CIJPpCbxPXC//DAPLoaogn+kJvE9cL/8MA8uhq+ABVAvhvWPhwAfhxVQL4bFj4bQH4bvhz2zzyADU1MgAoVW52YWxpZCBjcmVhdG9yIGZlZXMAME1ldGhvZCBmb3IgdGhlIHJvb3Qgb25seQIW7UTQ10nCAY6A4w0cPQOScO1E0PQFcSGAQPQOjoDfciKAQPQOk9cLP5Fw4okgcIlwXyBtbwJw+HP4cvhx+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4Yx0eHgECiR4AQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADcjD4RvLgTPhCbuMA0ds8Io4hJNDTAfpAMDHIz4cgznHPC2ECyM+SszSSfs7LP83JcPsAkVvi4wDyAD0gOwAI+Er4SwRQIIIQFHsIyLrjAiCCEBWltZS64wIgghAhezMIuuMCIIIQIuICL7rjAjo3MSIDTjD4RvLgTPhCbuMAIZXTP9TR0JLTP+L6QNTR0PpA0wfR2zww2zzyAD0jMgP8+EwjxwXy4GuC8C07RhAX/yntMK9WFERmDLw39csZ3yWpkQpj2DJSAOcXyMv/cG2AQPRD2zxxWIBA9BYkyMs/cliAQPRDyPQAySD5ACHXZYLwcRYMpZrhFpe2WzCUJDRqPAgPNrz6E3DJqFhpZqGQVUEieSPbPPhJIcjPigBAMC8kAVbL/8nQxwXy4Gr4Um8QwQSOgI4V+EnIz4WIzoIQX5OH1c8LjsmAQPsA4l8IJQJE+FL4SV84bwTbPMkBbyIhpFUggCD0F28CIPhybxDABI6A3i4mBExw+FJvEYAg9A/ystDbPG8TcHGTIMEEjoDjGDABww+xjoCOgOL7AC0rKScEeHD4Um8RgCD0D/Ky0Ns8bxJz+FJvEYAg9A/ystDbPG8QcvhSbxGAIPQP8rLQ2zxvEHH4Um8RgCD0D/Ky0C0tLSgDhNs8bxBw+FJvEYAg9A/ystDbPG8Q+EvbPMjPhyDOcc8LYVVQyM+QXDkHxss/zlUwyM5VIMjOWcjOAcjOzc3Nzc3JcC0tNAT8+FNw+FJvEYAg9A/ystDbPG8QyM+FiM4B+gKCEF+Th9XPC4rJcPsA+FNx+FJvEYAg9A/ystDbPG8QyM+FiM4B+gKCEF+Th9XPC4rJcPsA+FNy+FJvEYAg9A/ystDbPG8QyM+FiM4B+gKCEF+Th9XPC4rJcPsA+FNz+FJvEYAgLS0tKgKK9A/ystDbPG8QyM+FiM4B+gKCEF+Th9XPC4rJcPsA+EvbPMjPhyDOghAqT6Y9zwuByz/JcPsA+EzIz4UIzoBvz0DJgQCgLTQEglMg+FJvEYAg9A/ystDbPG8TsTMg+FJvEYAg9A/ystDbPG8RcPhSbxGAIPQP8rLQ2zxvEccFsyCOgN+UfzLbMeCkLS0tLAJIMCD4Um8RgCD0D/Ky0Ns8bxJw+FJvEYAg9A/ystDbPG8SxwWzLS0AIvpA1NHQ+kDU0dD6QNMH0W8EACJvJF4gyM5VIMjOWcjOywfNzQAsyM+MCATSWM8LD8sPWM8L/8v/ydD5AgBIjQhgBkxyO9As1611UqJChvqq0Kh1HaPyjnwAakVssCXV66o0AzYw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8MNs88gA9MzIAjvhT+FL4UfhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4POyz9VcMjOVWDIzssfVUDIzssfy/8BbyICyx/0AAHIy3/Nzc3Nye1UA5qI+En4TMcF+CP4Tr6w+En4TccF+CP4TrmwsfLoaIgh+kJvE9cL/8MA8uhq+AAg+Gz4S9s8yM+HIM5xzwthWcjPkX/Ibk7LP87NyXD7ADY1NABIjQhYACDauhi5sHE50bjRASMZ4Ep5srgIiSLgeblpuOIZCoj8ACpBZGRyZXNzIGNhbid0IGJlIG51bGwASE1ldGhvZCBmb3IgdGhlIG93bmVyIG9yIG1hbmFnZXIgb25seQP2MPhG8uBM+EJu4wDTH/hEWG91+GTR2zwjjiIl0NMB+kAwMcjPhyDOcc8LYV4gyM+SVpbWUs7LH8v/zclwjjb4RCBvEyFvEvhJVQJvEcjPhIDKAM+EQM4B+gL0AHHPC2leIMj4RG8Vzwsfzssfy//NyfhEbxTi+wDjAPIAPTg7ASD4RHBvcnBvcYBAb3T4ZNs8OQAM+E/4UPhRA4ww+Eby4Ez4Qm7jANHbPCWOLSfQ0wH6QDAxyM+HIM5xzwthXkDIz5JR7CMizlUwyM7LH1nIzssfzc3NyXD7AJJfBeLjAPIAPTw7ACjtRNDT/9M/MfhDWMjL/8s/zsntVAAU+Ez4T/hQ+E34TgCS7UTQ0//TP9MAMfpA0z/U0dD6QNTR0PpA0x/U0dD6QNMf0//TH/QEWW8CAdTR0NN/0fhz+HL4cfhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShQUAAFHNvbCAwLjYxLjAAAA==",
    code: "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",
    codeHash: "5bded34a52bb0073458d0dd0fb021ec485f529147f221295eb25e809518a3289",
};
module.exports = { ForeverTokenContract };