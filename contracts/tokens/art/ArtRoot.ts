const ArtRootContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "time"
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
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "tokenCode",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "create",
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
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "receiveTokenAddress",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    },
                    {
                        "name": "id",
                        "type": "uint128"
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
                        "name": "id",
                        "type": "uint128"
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
                "name": "setCreationFee",
                "inputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveCreationFee",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getCreationFee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "changeManager",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveManager",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getManager",
                "inputs": [],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "receiveInfo",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint128"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint128"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getTokenCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ]
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "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",
    code: "te6ccgECKwEACRoABCSK7VMg4wMgwP/jAiDA/uMC8gsoAgEqAsyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds8+Edu8nwPAwFqItDTA/pAMPhpqTgA+ER/b3GCCJiWgG9ybW9zcG90+GTcIccA3CHXDR/yvCHdAds8+Edu8nwDBFAgghARGjuPu+MCIIIQN5D+NrvjAiCCEFSL8Dy74wIgghB/mCAnu+MCGhEHBAIoIIIQZgzpEbrjAiCCEH+YICe64wIGBQNqMPhCbuMA0ds8Io4hJNDTAfpAMDHIz4cgzoBiz0BeAc+T/mCAnst/y3/JcPsAkVvi4wB/+GcnHSUDZjD4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk5gzpEbOzclw+wCRMOLjAH/4ZycJJQRQIIIQO/Iaw7rjAiCCED3WgPq64wIgghBB5nVPuuMCIIIQVIvwPLrjAgwLCggDzjD4Qm7jANMf+ERYb3X4ZNGNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4RHBvcnBvcYBAb3T4ZNs8MSGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk1IvwPLOzclw+wAnCSQABPhOA0Iw+EJu4wDTf9N/0Yj4SfhOxwXy6+j4AAH4b/hw2zx/+GcnGSUDajD4Qm7jANN/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+S91oD6s7NyXD7AJEw4uMAf/hnJyYlBPww+EJu4wD4RvJzf/hm+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf98g10rAAZPU0dDe1CDXSsABk9TR0N7U1NFfMoj4RSBukjBw3vhCuvLoZPgAIvhqAfhr+GwwU1WIIfpCbxPXC//DAPLr6fgAMPhuXyT4AAH4b/hwXwYPDhgNAQrbPH/4ZyUAMk1ldGhvZCBmb3IgdGhlIG93bmVyIG9ubHkCFu1E0NdJwgGKjoDiJxADnnDtRND0BYj4aoj4a4j4bHD4bY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhucPhvcPhwgED0DvK91wv/+GJw+GNw+GYqKioEUCCCEBmToM664wIgghAvwO1CuuMCIIIQN3iNn7rjAiCCEDeQ/ja64wIXFRMSA54w+EJu4wD6QZXU0dD6QN/XDX+V1NHQ03/f1wwAldTR0NIA39GI+En4TscF8uvo+ABUcSDIz4WAygBzz0DOAfoCgGvPQMlw+wBfA+MAf/hnJxklBEQw+EJu4wDTH/hEWG91+GTRiIhwcPhEcG9ycG9xgEBvdPhkJyoqFALi2zxsRCSOJybQ0wH6QDAxyM+HIM5xzwthXiFVMMjPkt3iNn7MzMt/y//NyXD7AI47+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpXiFVMMj4RG8VzwsfzMzLf8v/zcn4RG8U+wDi4wB/+GcWJQN4MPhCbuMA0ds8JI4nJtDTAfpAMDHIz4cgznHPC2FeIVUwyM+SvwO1CszMy3/L/83JcPsAkl8E4uMAf/hnJxYlAhaIiFv4SvhL+E34QioqBGYw+EJu4wD6QZXU0dD6QN/RiPhJ+E7HBfLr6CCIIfpCbxPXC//DAPLr6fgAMPhu2zx/+GcnGRglADpNYW5hZ2VyIGFkZHJlc3MgY2FuJ3QgYmUgbnVsbAA2TWV0aG9kIGZvciB0aGUgbWFuYWdlciBvbmx5BE4gggoRm2m64wIgghAKXSNLuuMCIIIQDnUGv7rjAiCCEBEaO4+64wIjIB4bA5Aw+EJu4wDTH/hEWG91+GTRcHD4RHBvcnBvcYBAb3T4ZNs8bCIijiEk0NMB+kAwMcjPhyDOgGLPQF4Bz5JEaO4+y3/Lf8lw+wAnHRwBfI42+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAsj4RG8Vzwsfy3/Lf83J+ERvFPsA4uMAf/hnJQAI+E/4UAN2MPhCbuMA0ds8IY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAACOdQa/jPFszJcPsAkTDi4wB/+GcnHyUBCIgw+EwqAv4w+EJu4wD6QZXU0dD6QN/6QZXU0dD6QN/XDR+V1NHQ0x/f+kGV1NHQ+kDf1w0fldTR0NMf39cN/5XU0dDT/9/RjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEaKb+YPhQobV/VHI0VHiabfhCyMv/cFiAQPRDJyEB9vgocViAQPQW+E3Iy39yWIBA9EPI9ADJ+EzIz4SA9AD0AM+BySD5AMjPigBAy//J0FVgXyjIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WzM+DVVDIz5A3M8OizlVAyM7LH1UgyM7LH8v/zc3NyXD7ADIw+E2ktX/4bWxhISIBUo4fI9DTAfpAMDHIz4cgznHPC2EByM+SKXSNLs7NyXD7AJEw4ts8f/hnJQPWMPhCbuMA0x/4RFhvdfhk03/RjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+ERwb3Jwb3GAQG90+GQh2zwxMSGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkghGbabOzclw+wAnJiQBdo4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnJQBY+FD4T/hO+E34TPhL+Er4RvhD+ELIy//LP8oAzMzMy39VIMjOy3/Lf83J7VQAyI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABG34QsjL/3BYgED0Q/gocViAQPQWIsjLf3JYgED0Q8j0AMn4TMjPhID0APQAz4HJIPkAyM+KAEDL/8nQbBIBMDEAWO1E0NP/0z/SANTU1NN/1NHQ+kDTf9N/0fhw+G/4bvht+Gz4a/hq+Gb4Y/hiAgr0pCD0oSopABRzb2wgMC40Ny4wAAA=",
    codeHash: "d6ecb8c7c9343f6110bff30ee80087a7d5d3393fb87299a4585299f66cd8f578",
};
export default ArtRootContract;