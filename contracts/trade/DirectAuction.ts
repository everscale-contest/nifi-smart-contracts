const DirectAuctionContract = {
    abi: {
        "ABI version": 2,
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
                        "name": "showcaseFees",
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
                        "type": "uint64"
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
                "type": "uint64"
            }
        ],
        "events": [
            {
                "name": "AUC_BS_nifi_auc_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "bidValue",
                        "type": "uint128"
                    },
                    {
                        "name": "bidCreator",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "AUC_SC_nifi_auc_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "finalBidValue",
                        "type": "uint128"
                    },
                    {
                        "name": "bidCreator",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "AUC_EX_nifi_auc_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "te6ccgECKwEACNQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsoBgQqAQAFAviNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8GAcBQiLQ0wP6QDD4aak4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAcCKCCCEGCREAi74wIgghB4uJOeuuMCCwgDrjD4Qm7jANHbPCqOQizQ0wH6QDAxyM+HIM5xzwthXoFVkMjPk+LiTnrOyz9VcMjOVWDIzst/y3/Lf8sfWcjLHwFvIgLOy3/Nzc3NyXD7AJJfCuLjAH/4ZycJHAH8jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBfIPhKN/hLNvhMNfhNNPhOCgAa+E/4UTX4UjT4UzP4VARQIIIQGeopRLrjAiCCEDDx8vm64wIgghBQHVGKuuMCIIIQYJEQCLrjAhsVEQwDHDD4Qm7jANHbPNs8f/hnJw0cA/6I+CP4Tr4gljD4I/hPud7y6GaIaKb+YPhTobV/+FG+II4UMGim/mD4U6G1f/hUbxH4UqC1f77e8uhl+FRvEI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMcFjhj4VG8R+FRvEMjPhYjOAfoCgGvPQMlx+wDfEA8OAXr4VGim/mD4U6G1f29RIPh0+ElvUCD4dG8Q+FRvEfhL2zzIz4cgznHPC2FVIMjPkCEVcNLLP8t/zs3JcPsAJAAWVG9vIGxvdyBiaWQAWkF1Y3Rpb24gbm90IHN0aWxsIHN0YXJ0ZWQgb3IgYWxyZWFkeSBmaW5pc2hlZAMcMPhCbuMA0ds82zx/+GcnEhwCmIj4I/hPvvLoZ4j4I/hQvvLoafgA+COmeLUf+HD4TXDIz4WAygBzz0DOjQaQDk4cAAAAAAAAAAAAAAAAAAA37Tn/DPUUokDPFslw+wAUEwAqVHJ5IGl0IGluIHR3byBtaW51dGVzAChBdWN0aW9uIG5vdCBmaW5pc2hlZAP8MPhCbuMA+Ebyc3/4ZvpBldTR0PpA3/pBldTR0PpA39cNf5XU0dDTf9/XDX+V1NHQ03/f1w1/ldTR0NN/39cNH5XU0dDTH9/XDR+V1NHQ0x/f1w0fldTR0NMf39GI+En4SscF8uhk+AAn+Gwm+G0l+HEk+HIj+HMi+G4h+G8BGBcWARb4cPh1XwbbPH/4ZxwAME1ldGhvZCBmb3IgdGhlIHJvb3Qgb25seQIW7UTQ10nCAYqOgOInGQHUcO1E0PQFcSGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GpyIYBA9A6T1ws/kXDi+GuNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bBoA6o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhtcPhucPhvcPhwcPhxcPhycPhzjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcG8C+HRw+HWAQPQO8r3XC//4YnD4Y3D4ZgN6MPhCbuMA+kGV1NHQ+kDf+kGV1NHQ+kDf1w0fldTR0NMf3/pBldTR0PpA39cNH5XU0dDTH9/R2zzbPH/4ZycdHACc+FX4VPhT+FL4UfhQ+E/4TvhN+Ez4S/hK+Eb4Q/hCyMv/yz/KAM7LP1WQyM5VgMjOyx/LH8sfy3/Lf1UgyMt/AW8iAs7Lf8sfzc3Nye1UBESI+En4TccF8uhoiCL4KMcF8uhqIPgjpjy1H7yOgI6A4l8FJiUgHgLm+FRvEI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMcFjhj4VG8R+FRvEMjPhYjOAfoCgGvPQMlx+wDf+E3Iz4WIzo0FTmJaAAAAAAAAAAAAAAAAAAAuYnNbQM8WyXD7APhL2zzIz4cgziQfAFaNBAAAAAAAAAAAAAAAAAQUTuqIzxbLP8lw+wAkyM+FCM6Ab89AyYEAoPsAAf74J28QI8IAjiJTA4EnEKmEtX8gwgCOElMFyM+FiM4B+gKAa89AyXH7AN4w3vhVwgCOJCD4VYEnEKmEtX8gwgCOEyD4SsjPhYjOAfoCgGvPQMlx+wDeMN74VG8QjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIQKwxwWzjoCOgOL4TcjPhYjOjQVOYloAAAAAAAAAAAAAAAAAAC5ic1tAzxbJcPsA+CdvEIAUqQT4SsjPhYjOAfoCgGvPQMlx+wAlyM+FCM6Ab89AyYEAoPsAMCMiAUj4S9s8yM+HIM6NBAAAAAAAAAAAAAAAAAQUTuqIzxbLP8lw+wAkAa74VG8Q+FRvEfhL2zzIz4cgznHPC2FVIMjPkWrTpfLLP8t/zs3JcPsA+FRvEPhNyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WAcjPkIXszCLOzclw+wAkAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwAGldyb25nIG1hbmFnZXIAMk1ldGhvZCBmb3IgdGhlIHRva2VuIG9ubHkAnu1E0NP/0z/SAPpA0z/U0dD6QNTR0PpA0x/TH9Mf03/Tf9TR0NN/+kDTf1lvAgHTH9H4dfh0+HP4cvhx+HD4b/hu+G34bPhr+Gr4Zvhj+GICCvSkIPShKikAFHNvbCAwLjQ3LjAAAA==",
    code: "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",
    codeHash: "a4af5900dab52a3b08f63fd079d09df16d004267cc8dbb50dabfce23b086cf09",
};
export default DirectAuctionContract;