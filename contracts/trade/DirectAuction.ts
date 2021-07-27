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
                ],
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
                        "name": "startTime",
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
    tvc: "te6ccgECJwEACHcAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gskBQQmAsSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zz4R27yfCAGAUIi0NMD+kAw+GmpOADcIccA3CHXDR/yvCHdAds8+Edu8nwGAiggghBQHVGKu+MCIIIQYJEQCLrjAgwHAxww+EJu4wDR2zzbPH/4ZyMIHgP+iPgj+E6+IJYw+CP4T7ne8uhmiGim/mD4U6G1f/hRviCOFDBopv5g+FOhtX/4VG8R+FKgtX++3vLoZfhUbxCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBY4Y+FRvEfhUbxDIz4WIzgH6AoBrz0DJcfsA3wsKCQCg+FRopv5g+FOhtX9vUSD4dPhJb1Ag+HRvEfhUbxD4TfhM+EuL3AAAAAAAAAAAAAAAABjIzlVAyM+QZImpXst/zlUgyM5ZyM7Lf83Nzclw+wAAFlRvbyBsb3cgYmlkAFpBdWN0aW9uIG5vdCBzdGlsbCBzdGFydGVkIG9yIGFscmVhZHkgZmluaXNoZWQEUCCCEBb/CPy64wIgghAZ6ilEuuMCIIIQSwemg7rjAiCCEFAdUYq64wIdFBENAxww+EJu4wDR2zzbPH/4ZyMOHgKYiPgj+E++8uhniPgj+FC+8uhp+AD4I6Z4tR/4cPhNcMjPhYDKAHPPQM6NBpB3NZQAAAAAAAAAAAAAAAAAADftOf8M9RSiQM8WyXD7ABAPACpUcnkgaXQgaW4gdHdvIG1pbnV0ZXMAKEF1Y3Rpb24gbm90IGZpbmlzaGVkA64w+EJu4wDR2zwqjkIs0NMB+kAwMcjPhyDOcc8LYV6BVZDIz5MsHpoOzst/VXDIzlVgyM7Lf8t/y3/LH1nIyx8BbyICzst/zc3Nzclw+wCSXwri4wB/+GcjEh4B/I0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwXyD4Sjf4Szb4TDX4TTT4ThMAGvhP+FE1+FI0+FMz+FQDejD4Qm7jAPpBldTR0PpA3/pBldTR0PpA39cNH5XU0dDTH9/6QZXU0dD6QN/XDR+V1NHQ0x/f0ds82zx/+GcjFR4ERIj4SfhNxwXy6GiIIvgoxwXy6Gog+COmPLUfvI6AjoDiXwUcGxgWAdb4VG8QjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwWOGPhUbxH4VG8QyM+FiM4B+gKAa89AyXH7AN/4TcjPhYjOjQVOYloAAAAAAAAAAAAAAAAAAC5ic1tAzxbJcPsAcBcAzo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhN+Ez4S4vcAAAAAAAAAAAAAAAAGMjOVUDIz5CAGRuSy3/OVSDIzlnIzst/zc3NyXD7ACTIz4UIzoBvz0DJgQCg+wABrPgnbxAjwgCOIlMDgScQqYS1fyDCAI4SUwXIz4WIzgH6AoBrz0DJcfsA3jDe+FRvEI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMcFGQH+ji/4VG8Q+E3Iz4WIzo0ETmJaAAAAAAAAAAAAAAAAAADAzxYByM+QhezMIs7NyXD7AN/4TcjPhYjOjQVOYloAAAAAAAAAAAAAAAAAAC5ic1tAzxbJcPsA+CdvEIAUqQT4SsjPhYjOAfoCgGvPQMlx+wD4VG8R+FRvEPhN+Ez4SxoAfovcAAAAAAAAAAAAAAAAGMjOVUDIz5CAGRuSy3/OVSDIzlnIzst/zc3NyXD7APhMyM+FCM6Ab89AyYEAoPsAMAAaV3JvbmcgbWFuYWdlcgAyTWV0aG9kIGZvciB0aGUgdG9rZW4gb25seQP4MPhCbuMA+Ebyc3/4ZvpBldTR0PpA3/pBldTR0PpA39cNf5XU0dDTf9/XDX+V1NHQ03/f1w1/ldTR0NN/39cNH5XU0dDTH9/XDR+V1NHQ0x/f0Yj4SfhKxwXy6GT4ACb4bCX4bST4cSP4ciL4cwH4biD4b/hwXwXbPH/4ZyAfHgCS+FT4U/hS+FH4UPhP+E74TfhM+Ev4SvhG+EP4QsjL/8s/ygDOVZDIy3/OVXDIzssfyx/LH8t/y39ZyMt/AW8iAs7Lf83NzcntVAAwTWV0aG9kIGZvciB0aGUgcm9vdCBvbmx5AhbtRNDXScIBio6A4iMhAdRw7UTQ9AVxIYBA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4anIhgED0DpPXC3+RcOL4a40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhsIgDkjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+G1w+G5w+G9w+HBw+HFw+HJw+HONCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwbwL4dIBA9A7yvdcL//hicPhjcPhmAJbtRNDT/9M/0gD6QNTR0NN/+kDU0dD6QNMf0x/TH9N/03/U0dDTf/pA039ZbwIB0fh0+HP4cvhx+HD4b/hu+G34bPhr+Gr4Zvhj+GICCvSkIPShJiUAFHNvbCAwLjQ3LjAAAA==",
    code: "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",
    codeHash: "55897c54106e6c0435ac89b1aeca1bf2330b5cc9c4dcbecc606480473138b695",
};
export default DirectAuctionContract;