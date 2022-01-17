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
    tvc: "te6ccgECPwEACy4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gs8BwQ+AQAFAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwE3BgEI2zzyPAgDeu1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds88jw7OwgDPCCCECF7Mwi74wIgghBL1N//u+MCIIIQb9pz/rvjAiYRCQM8IIIQXMTmtrrjAiCCEGwfT7C64wIgghBv2nP+uuMCDg0KA4ow+Eby4Ez4Qm7jANMf+ERYb3X4ZNHbPCWOKyfQ0wH6QDAxyM+HIM5xzwthXkDIz5O/ac/6zlUwyM7LH1nIzssfzc3NyXA4DAsBkI4/+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpXkDI+ERvFc8LH85VMMjOyx9ZyM7LH83Nzcn4RG8U4vsA4wDyAC8BIPhEcG9ycG9xgEBvdPhk2zwwA3ow+Eby4Ez4Qm7jANHbPCOOJCXQ0wH6QDAxyM+HIM5xzwthXiDIz5OwfT7Czssfy//NyXD7AJJfA+LjAPIAOC0vAyYw+Eby4Ez4Qm7jANHbPDDbPPIAOA8zASqI+En4TccF+CP4Trmw8uhn+ABw+G4QADxNZXRob2QgZm9yIGxvY2tlZCBtYW5hZ2VyIG9ubHkEUCCCECzNJJ+64wIgghBD21qyuuMCIIIQRWQ8aLrjAiCCEEvU3/+64wIkIh8SA0Qw+Eby4Ez4Qm7jACGT1NHQ3vpA1NHQ+kDTB9HbPDDbPPIAOBMzAcb4I/hOvPLgafhJjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwXy0Gr4Um8QwQSOgI4j+EnIz4WIzo0EgAAAAAAAAAAAAAAAAAAvycPqwM8WyYBA+wDiXwMUAkT4UvhJXzRvBNs8yQFvIiGkVSCAIPQXbwIg+HJvEMAEjoDeHhUETHD4Um8RgCD0D/Ky0Ns8bxNwcZMgwQSOgOMYMAHDD7GOgI6A4vsAHRsYFgR4cPhSbxGAIPQP8rLQ2zxvEnP4Um8RgCD0D/Ky0Ns8bxBy+FJvEYAg9A/ystDbPG8QcfhSbxGAIPQP8rLQHR0dFwOE2zxvEHD4Um8RgCD0D/Ky0Ns8bxD4S9s8yM+HIM5xzwthVVDIz5BcOQfGyz/OVTDIzlUgyM5ZyM4ByM7Nzc3NzclwHR0pBPZw+FJvEYAg9A/ystDbPG8QyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAL8nD6sDPFslw+wBx+FJvEYAg9A/ystDbPG8QyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAL8nD6sDPFslw+wBy+FJvEYAg9A/ystDbPG8QyM+FiM4dHR0ZA/yNBU5iWgAAAAAAAAAAAAAAAAAAL8nD6sDPFslw+wBz+FJvEYAg9A/ystDbPG8QyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAL8nD6sDPFslw+wD4S9s8yM+HIM6NBAAAAAAAAAAAAAAAAAKk+mPYzxbLP8lw+wD4TMjPhQjOgG8dKRoADM9AyYEAoASCUyD4Um8RgCD0D/Ky0Ns8bxOxMyD4Um8RgCD0D/Ky0Ns8bxFw+FJvEYAg9A/ystDbPG8RxwWzII6A35R/Mtsx4KQdHR0cAkgwIPhSbxGAIPQP8rLQ2zxvEnD4Um8RgCD0D/Ky0Ns8bxLHBbMdHQAi+kDU0dD6QNTR0PpA0wfRbwQAIm8kXiDIzlUgyM5ZyM7LB83NAzow+Eby4Ez4Qm7jACGT1NHQ3vpA0x/R2zww2zzyADggMwS6iPhJ+EzHBfgj+E6+sPhJ+E3HBfgj+E65sLHy6GiIIvpCbxPXC//DAPLoaoj4IyK58uhp+AAB+G0g+G74TfhL2zzIz4cgznHPC2FVIMjPkLfMAFbLP87LH83JcPsAKjQhKQAiSW52YWxpZCBsb2NrIHRpbWUDjDD4RvLgTPhCbuMA0ds8IY4uI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADD21qyjPFgFvIgLLH/QAyXD7AJEw4uMA8gA4Iy8ABPhSA3Iw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPkrM0kn7Oyz/NyXD7AJFb4uMA8gA4JS8ACPhK+EsEUCCCEA3M8Oi64wIgghAUewjIuuMCIIIQFaW1lLrjAiCCECF7Mwi64wIxLisnAzYw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8MNs88gA4KDMDmoj4SfhMxwX4I/hOvrD4SfhNxwX4I/hOubCx8uhoiCH6Qm8T1wv/wwDy6Gr4ACD4bPhL2zzIz4cgznHPC2FZyM+Rf8huTss/zs3JcPsAKjQpAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwASE1ldGhvZCBmb3IgdGhlIG93bmVyIG9yIG1hbmFnZXIgb25seQP2MPhG8uBM+EJu4wDTH/hEWG91+GTR2zwjjiIl0NMB+kAwMcjPhyDOcc8LYV4gyM+SVpbWUs7LH8v/zclwjjb4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2leIMj4RG8Vzwsfzssfy//NyfhEbxTi+wDjAPIAOCwvASD4RHBvcnBvcYBAb3T4ZNs8LQAM+E/4UPhRA4ww+Eby4Ez4Qm7jANHbPCWOLSfQ0wH6QDAxyM+HIM5xzwthXkDIz5JR7CMizlUwyM7LH1nIzssfzc3NyXD7AJJfBeLjAPIAODAvACjtRNDT/9M/MfhDWMjL/8s/zsntVAAU+Ez4T/hQ+E34TgRsMPhCbuMA+EbycyGT1NHQ3vpA1NHQ+kDTH9TR0PpA0x/T/9GI+En4SscF8uhliCKBCWG58uhrNzY1MgNkiCP6Qm8T1wv/wwDy6GqIJvpCbxPXC//DAPLoavgAWPhvAfhw+HFY+GwB+G34bts88gA0NDMAgPhS+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+Dzss/VWDIzlVQyM7LH1UwyM7LH8v/AW8iAssf9ADNzc3J7VQAKkFkZHJlc3MgY2FuJ3QgYmUgbnVsbAAoVW52YWxpZCBjcmVhdG9yIGZlZXMAME1ldGhvZCBmb3IgdGhlIHJvb3Qgb25seQIW7UTQ10nCAY6A4w05OACE7UTQ0//TP9MAMfpA0z/U0dD6QNTR0PpA0x/U0dD6QNMf0//TH/QEWW8CAdH4cvhx+HD4b/hu+G34bPhr+Gr4Y/hiAdRw7UTQ9AVxIYBA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4anIhgED0DpPXCz+RcOL4a40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhsOgDSjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+G1w+G6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4b3D4cHD4cXBtbwL4coBA9A7yvdcL//hicPhjAAr4RvLgTAIK9KQg9KE+PQAUc29sIDAuNTQuMAAA",
    code: "te6ccgECPAEACwEABCSK7VMg4wMgwP/jAiDA/uMC8gs5BAE7AQACAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwE0AwEI2zzyPAUDeu1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds88jw4OAUDPCCCECF7Mwi74wIgghBL1N//u+MCIIIQb9pz/rvjAiMOBgM8IIIQXMTmtrrjAiCCEGwfT7C64wIgghBv2nP+uuMCCwoHA4ow+Eby4Ez4Qm7jANMf+ERYb3X4ZNHbPCWOKyfQ0wH6QDAxyM+HIM5xzwthXkDIz5O/ac/6zlUwyM7LH1nIzssfzc3NyXA1CQgBkI4/+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpXkDI+ERvFc8LH85VMMjOyx9ZyM7LH83Nzcn4RG8U4vsA4wDyACwBIPhEcG9ycG9xgEBvdPhk2zwtA3ow+Eby4Ez4Qm7jANHbPCOOJCXQ0wH6QDAxyM+HIM5xzwthXiDIz5OwfT7Czssfy//NyXD7AJJfA+LjAPIANSosAyYw+Eby4Ez4Qm7jANHbPDDbPPIANQwwASqI+En4TccF+CP4Trmw8uhn+ABw+G4NADxNZXRob2QgZm9yIGxvY2tlZCBtYW5hZ2VyIG9ubHkEUCCCECzNJJ+64wIgghBD21qyuuMCIIIQRWQ8aLrjAiCCEEvU3/+64wIhHxwPA0Qw+Eby4Ez4Qm7jACGT1NHQ3vpA1NHQ+kDTB9HbPDDbPPIANRAwAcb4I/hOvPLgafhJjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwXy0Gr4Um8QwQSOgI4j+EnIz4WIzo0EgAAAAAAAAAAAAAAAAAAvycPqwM8WyYBA+wDiXwMRAkT4UvhJXzRvBNs8yQFvIiGkVSCAIPQXbwIg+HJvEMAEjoDeGxIETHD4Um8RgCD0D/Ky0Ns8bxNwcZMgwQSOgOMYMAHDD7GOgI6A4vsAGhgVEwR4cPhSbxGAIPQP8rLQ2zxvEnP4Um8RgCD0D/Ky0Ns8bxBy+FJvEYAg9A/ystDbPG8QcfhSbxGAIPQP8rLQGhoaFAOE2zxvEHD4Um8RgCD0D/Ky0Ns8bxD4S9s8yM+HIM5xzwthVVDIz5BcOQfGyz/OVTDIzlUgyM5ZyM4ByM7Nzc3NzclwGhomBPZw+FJvEYAg9A/ystDbPG8QyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAL8nD6sDPFslw+wBx+FJvEYAg9A/ystDbPG8QyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAL8nD6sDPFslw+wBy+FJvEYAg9A/ystDbPG8QyM+FiM4aGhoWA/yNBU5iWgAAAAAAAAAAAAAAAAAAL8nD6sDPFslw+wBz+FJvEYAg9A/ystDbPG8QyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAL8nD6sDPFslw+wD4S9s8yM+HIM6NBAAAAAAAAAAAAAAAAAKk+mPYzxbLP8lw+wD4TMjPhQjOgG8aJhcADM9AyYEAoASCUyD4Um8RgCD0D/Ky0Ns8bxOxMyD4Um8RgCD0D/Ky0Ns8bxFw+FJvEYAg9A/ystDbPG8RxwWzII6A35R/Mtsx4KQaGhoZAkgwIPhSbxGAIPQP8rLQ2zxvEnD4Um8RgCD0D/Ky0Ns8bxLHBbMaGgAi+kDU0dD6QNTR0PpA0wfRbwQAIm8kXiDIzlUgyM5ZyM7LB83NAzow+Eby4Ez4Qm7jACGT1NHQ3vpA0x/R2zww2zzyADUdMAS6iPhJ+EzHBfgj+E6+sPhJ+E3HBfgj+E65sLHy6GiIIvpCbxPXC//DAPLoaoj4IyK58uhp+AAB+G0g+G74TfhL2zzIz4cgznHPC2FVIMjPkLfMAFbLP87LH83JcPsAJzEeJgAiSW52YWxpZCBsb2NrIHRpbWUDjDD4RvLgTPhCbuMA0ds8IY4uI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADD21qyjPFgFvIgLLH/QAyXD7AJEw4uMA8gA1ICwABPhSA3Iw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPkrM0kn7Oyz/NyXD7AJFb4uMA8gA1IiwACPhK+EsEUCCCEA3M8Oi64wIgghAUewjIuuMCIIIQFaW1lLrjAiCCECF7Mwi64wIuKygkAzYw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8MNs88gA1JTADmoj4SfhMxwX4I/hOvrD4SfhNxwX4I/hOubCx8uhoiCH6Qm8T1wv/wwDy6Gr4ACD4bPhL2zzIz4cgznHPC2FZyM+Rf8huTss/zs3JcPsAJzEmAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwASE1ldGhvZCBmb3IgdGhlIG93bmVyIG9yIG1hbmFnZXIgb25seQP2MPhG8uBM+EJu4wDTH/hEWG91+GTR2zwjjiIl0NMB+kAwMcjPhyDOcc8LYV4gyM+SVpbWUs7LH8v/zclwjjb4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2leIMj4RG8Vzwsfzssfy//NyfhEbxTi+wDjAPIANSksASD4RHBvcnBvcYBAb3T4ZNs8KgAM+E/4UPhRA4ww+Eby4Ez4Qm7jANHbPCWOLSfQ0wH6QDAxyM+HIM5xzwthXkDIz5JR7CMizlUwyM7LH1nIzssfzc3NyXD7AJJfBeLjAPIANS0sACjtRNDT/9M/MfhDWMjL/8s/zsntVAAU+Ez4T/hQ+E34TgRsMPhCbuMA+EbycyGT1NHQ3vpA1NHQ+kDTH9TR0PpA0x/T/9GI+En4SscF8uhliCKBCWG58uhrNDMyLwNkiCP6Qm8T1wv/wwDy6GqIJvpCbxPXC//DAPLoavgAWPhvAfhw+HFY+GwB+G34bts88gAxMTAAgPhS+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+Dzss/VWDIzlVQyM7LH1UwyM7LH8v/AW8iAssf9ADNzc3J7VQAKkFkZHJlc3MgY2FuJ3QgYmUgbnVsbAAoVW52YWxpZCBjcmVhdG9yIGZlZXMAME1ldGhvZCBmb3IgdGhlIHJvb3Qgb25seQIW7UTQ10nCAY6A4w02NQCE7UTQ0//TP9MAMfpA0z/U0dD6QNTR0PpA0x/U0dD6QNMf0//TH/QEWW8CAdH4cvhx+HD4b/hu+G34bPhr+Gr4Y/hiAdRw7UTQ9AVxIYBA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4anIhgED0DpPXCz+RcOL4a40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhsNwDSjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+G1w+G6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4b3D4cHD4cXBtbwL4coBA9A7yvdcL//hicPhjAAr4RvLgTAIK9KQg9KE7OgAUc29sIDAuNTQuMAAA",
    codeHash: "0e998410b6bbdb6a402fb2757bea716d0dcb0cc72dc62dc23587ff6222bd8e3a",
};
module.exports = { ForeverTokenContract };