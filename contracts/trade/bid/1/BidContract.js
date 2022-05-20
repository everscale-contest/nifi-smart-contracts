const BidContract = {
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
                        "name": "bidder",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "minAcceptFee",
                        "type": "uint128"
                    },
                    {
                        "name": "bidIncomePercent",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "acceptBid",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "onReceiveTradeInfo",
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
                ],
                "outputs": []
            },
            {
                "name": "finish",
                "inputs": [],
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
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "bidder",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
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
                "name": "BID_AC_nifi_bid_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "BID_CL_nifi_bid_1",
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
                "name": "_bidder",
                "type": "address"
            },
            {
                "name": "_token",
                "type": "address"
            },
            {
                "name": "_endTime",
                "type": "uint32"
            },
            {
                "name": "_price",
                "type": "uint128"
            },
            {
                "name": "_minAcceptFee",
                "type": "uint128"
            },
            {
                "name": "_bidIncomePercent",
                "type": "uint128"
            }
        ]
    },
    tvc: "te6ccgECJgEABZwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsjBQQlA7ztRNDXScMB+GaJ+Gkh2zzTAAGOGYMI1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8GBUGA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPCIiBgIoIIIQUB1RirvjAiCCEFqYYCS64wIJBwOSMPhG8uBM+EJu4wDR2zwmjjAo0NMB+kAwMcjPhyDOcc8LYV5QyM+TamGAks7LP1UwyM5VIMjOy3/LH83Nzclw+wCSXwbi4wDyACEIDgAY+Er4S/hM+E34T/hOBFAgghAZ6ilEuuMCIIIQMHPoW7rjAiCCEEZYjka64wIgghBQHVGKuuMCGRMNCgMmMPhG8uBM+EJu4wDR2zww2zzyACELGgKciPgj+E6BA4SgtR++8uho+AD4S9s8yM+HIM6CED5/QHDPC4HLP8lw+wD4T/hMyM+FiM4B+gKAa89AyXH7APhKyM+FCM6Ab89AyYEAoPsADB0AIEJpZCBub3QgZmluaXNoZWQDJDD4RvLgTPhCbuMA0ds84wDyACEPDgAo7UTQ0//TPzH4Q1jIy//LP87J7VQDeohopv5gwwDy6GaI+CP4Trny6GeIaKb+YPhQvvLoafhNcMjPhYDKAM+EQM6CMG/ac/4Z6ilEzwuuyYBA+wASERAAIE5vdCBlbm91Z2ggbW9uZXkAKEJpZCBhbHJlYWR5IGZpbmlzaGVkADRSZWNlaXZlIG9ubHkgaW5uZXIgbWVzc2FnZQOIMPhCbuMA+EbycyGT1NHQ3vpA1NHQ+kDTf9N/03/TH9GI+En4SscF8uhk+ABVBPhsVQP4bVUC+G9Y+HAB+HH4bts88gAVFBoAME1ldGhvZCBmb3IgdGhlIHJvb3Qgb25seQIW7UTQ10nCAY6A4w0WIQJ+cO1E0PQFcSGAQPQOjoDfciKAQPQOk9cLP5Fw4okgcF8w+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjFxgBAokYAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA1Iw+Eby4Ez4Qm7jACGT1NHQ3vpA1NHQ+kDTH9TR0PpA0x/R2zww2zzyACEbGgBm+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+Dzss/VVDIzlVAyM7LH8t/y3/Lf83Nye1UBPyI+En4TccF8uhliFj4KMcF8uhqiAH4ToEDhKC1H7zy6GtwIcIAjiP4TyKBJxCphLV/MSDCAI4SUwLIz4WIzgH6AoBrz0DJcfsA3t74TcjPhYjOgngcxLQAAAAAAAAAAAAAAAAAAc8LhvhMyM+QhezMIs7NyXD7APhNyM+FiM4gHx4cAdyCmBzEtAAAAAAAAAAAAAAAAAAAXMTmts8Lpslw+wD4T/hRgScQqYS1f/hPWaC1f6G1f1UCyM+FiM4B+gKAa89AyXH7AFv4S9s8yM+HIM6CEBW/owHPC4HLP8lw+wD4SsjPhQjOgG/PQMmBAKD7AB0ASI0IWAAg2roYubBxOdG40QEjGeBKebK4CIki4Hm5abjiGQqI/AAyV3JvbmcgbWFuYWdlciB1bmxvY2sgdGltZQAaV3JvbmcgbWFuYWdlcgAyTWV0aG9kIGZvciB0aGUgdG9rZW4gb25seQBq7UTQ0//TP9MAMfpA0z/U0dD6QNTR0PpA0x/Tf9N/03/R+HH4cPhv+G74bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oSUkABRzb2wgMC42MS4wAAA=",
    code: "te6ccgECIwEABW8ABCSK7VMg4wMgwP/jAiDA/uMC8gsgAgEiA7ztRNDXScMB+GaJ+Gkh2zzTAAGOGYMI1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8FRIDA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPB8fAwIoIIIQUB1RirvjAiCCEFqYYCS64wIGBAOSMPhG8uBM+EJu4wDR2zwmjjAo0NMB+kAwMcjPhyDOcc8LYV5QyM+TamGAks7LP1UwyM5VIMjOy3/LH83Nzclw+wCSXwbi4wDyAB4FCwAY+Er4S/hM+E34T/hOBFAgghAZ6ilEuuMCIIIQMHPoW7rjAiCCEEZYjka64wIgghBQHVGKuuMCFhAKBwMmMPhG8uBM+EJu4wDR2zww2zzyAB4IFwKciPgj+E6BA4SgtR++8uho+AD4S9s8yM+HIM6CED5/QHDPC4HLP8lw+wD4T/hMyM+FiM4B+gKAa89AyXH7APhKyM+FCM6Ab89AyYEAoPsACRoAIEJpZCBub3QgZmluaXNoZWQDJDD4RvLgTPhCbuMA0ds84wDyAB4MCwAo7UTQ0//TPzH4Q1jIy//LP87J7VQDeohopv5gwwDy6GaI+CP4Trny6GeIaKb+YPhQvvLoafhNcMjPhYDKAM+EQM6CMG/ac/4Z6ilEzwuuyYBA+wAPDg0AIE5vdCBlbm91Z2ggbW9uZXkAKEJpZCBhbHJlYWR5IGZpbmlzaGVkADRSZWNlaXZlIG9ubHkgaW5uZXIgbWVzc2FnZQOIMPhCbuMA+EbycyGT1NHQ3vpA1NHQ+kDTf9N/03/TH9GI+En4SscF8uhk+ABVBPhsVQP4bVUC+G9Y+HAB+HH4bts88gASERcAME1ldGhvZCBmb3IgdGhlIHJvb3Qgb25seQIW7UTQ10nCAY6A4w0THgJ+cO1E0PQFcSGAQPQOjoDfciKAQPQOk9cLP5Fw4okgcF8w+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjFBUBAokVAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA1Iw+Eby4Ez4Qm7jACGT1NHQ3vpA1NHQ+kDTH9TR0PpA0x/R2zww2zzyAB4YFwBm+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+Dzss/VVDIzlVAyM7LH8t/y3/Lf83Nye1UBPyI+En4TccF8uhliFj4KMcF8uhqiAH4ToEDhKC1H7zy6GtwIcIAjiP4TyKBJxCphLV/MSDCAI4SUwLIz4WIzgH6AoBrz0DJcfsA3t74TcjPhYjOgngcxLQAAAAAAAAAAAAAAAAAAc8LhvhMyM+QhezMIs7NyXD7APhNyM+FiM4dHBsZAdyCmBzEtAAAAAAAAAAAAAAAAAAAXMTmts8Lpslw+wD4T/hRgScQqYS1f/hPWaC1f6G1f1UCyM+FiM4B+gKAa89AyXH7AFv4S9s8yM+HIM6CEBW/owHPC4HLP8lw+wD4SsjPhQjOgG/PQMmBAKD7ABoASI0IWAAg2roYubBxOdG40QEjGeBKebK4CIki4Hm5abjiGQqI/AAyV3JvbmcgbWFuYWdlciB1bmxvY2sgdGltZQAaV3JvbmcgbWFuYWdlcgAyTWV0aG9kIGZvciB0aGUgdG9rZW4gb25seQBq7UTQ0//TP9MAMfpA0z/U0dD6QNTR0PpA0x/Tf9N/03/R+HH4cPhv+G74bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oSIhABRzb2wgMC42MS4wAAA=",
    codeHash: "e7633bbad50d8b10389092e69d00e5381d8219836ebfe067c67112c71a6168a1",
};
module.exports = { BidContract };