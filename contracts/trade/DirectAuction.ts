const DirectAuctionContract = {
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
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "stepBid",
                        "type": "uint128"
                    },
                    {
                        "name": "feeBid",
                        "type": "uint128"
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "bid",
                "inputs": [],
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
                        "type": "uint128"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "stepBid",
                        "type": "uint128"
                    },
                    {
                        "name": "feeBid",
                        "type": "uint128"
                    },
                    {
                        "name": "starTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "components": [
                            {
                                "name": "bider",
                                "type": "address"
                            },
                            {
                                "name": "value",
                                "type": "uint128"
                            }
                        ],
                        "name": "curBid",
                        "type": "tuple"
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
                "type": "uint128"
            }
        ],
        "events": [
            {
                "name": "BidEvent",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "bider",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "FinishEvent",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "bider",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "te6ccgECHgEABl4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsbBQQdAsSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zz4R27yfBcGAUIi0NMD+kAw+GmpOADcIccA3CHXDR/yvCHdAds8+Edu8nwGBFAgghAW/wj8uuMCIIIQSwemg7rjAiCCEFAdUYq64wIgghBgkRAIuuMCFBEMBwMcMPhCbuMA0ds82zx/+GcaCBUD/oj4I/hOviCWMPgj+E+53vLoZohopv5g+FKhtX/4UL4gjhQwaKb+YPhSobV/+FNvEfhRoLV/vt7y6GX4U28QjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwWOGPhTbxH4U28QyM+FiM4B+gKAa89AyXH7AN8LCgkAoPhTaKb+YPhSobV/b1Eg+HP4SW9QIPhzbxH4U28Q+E34TPhLi9wAAAAAAAAAAAAAAAAYyM5VQMjPkGSJqV7Lf85VIMjOWcjOy3/Nzc3JcPsAABZUb28gbG93IGJpZABaQXVjdGlvbiBub3Qgc3RpbGwgc3RhcnRlZCBvciBhbHJlYWR5IGZpbmlzaGVkAxww+EJu4wDR2zzbPH/4ZxoNFQLciPgj+E++8uhn+AD4U28QjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwWOL/hTbxD4TcjPhYjOjQROYloAAAAAAAAAAAAAAAAAAMDPFgHIz5CF7Mwizs3JcPsA3/hNyM+FiM4QDgH+jQVOYloAAAAAAAAAAAAAAAAAAC5ic1tAzxbJcPsA+CdvEIAUqQT4SsjPhYjOAfoCgGvPQMlx+wD4U28R+FNvEPhN+Ez4S4vcAAAAAAAAAAAAAAAAGMjOVUDIz5CAGRuSy3/OVSDIzlnIzst/zc3NyXD7APhMyM+FCM6Ab89AyQ8ACoEAoPsAAChBdWN0aW9uIG5vdCBmaW5pc2hlZAOuMPhCbuMA0ds8Ko5CLNDTAfpAMDHIz4cgznHPC2FegVWQyM+TLB6aDs7Lf1VwyM5VYMjOy3/Lf8t/yx9ZyMsfAW8iAs7Lf83Nzc3JcPsAkl8K4uMAf/hnGhIVAfyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcF8g+Eo3+Es2+Ew1+E00+E4TABr4T/hQNfhRNPhSM/hTA/Iw+EJu4wD4RvJzf/hm+kGV1NHQ+kDf+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf9/XDX+V1NHQ03/f1w0fldTR0NMf39cNH5XU0dDTH9/RiPhJ+ErHBfLoZPgAJvhsJfhtJPhwI/hxIvhyAfhu+G9fBds8f/hnFxYVAIr4U/hS+FH4UPhP+E74TfhM+Ev4SvhG+EP4QsjL/8s/ygDOVYDIy3/OVWDIzssfyx/Lf8t/WcjLfwFvIgLOy3/Nzc3J7VQAME1ldGhvZCBmb3IgdGhlIHJvb3Qgb25seQIW7UTQ10nCAYqOgOIaGAHUcO1E0PQFcSGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GpyIYBA9A6T1wt/kXDi+GuNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bBkA3o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhtcPhucPhvcPhwcPhxcPhyjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcG8C+HOAQPQO8r3XC//4YnD4Y3D4ZgCO7UTQ0//TP9IA+kDU0dDTf/pA1NHQ+kDTH9Mf03/Tf9TR0NN/+kDTf1lvAgHR+HP4cvhx+HD4b/hu+G34bPhr+Gr4Zvhj+GICCvSkIPShHRwAFHNvbCAwLjQ3LjAAAA==",
    code: "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",
    codeHash: "e0a8074ad377a708252b7f81a8c803736451c9cfe1cb5ca92536c48c81a085eb",
};
export default DirectAuctionContract;