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
                "name": "AUC_BS_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "AUC_CL_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "te6ccgECKQEACIUAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsmBQQoAsSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zz4R27yfBcGAUIi0NMD+kAw+GmpOADcIccA3CHXDR/yvCHdAds8+Edu8nwGAiggghBQHVGKu+MCIIIQYJEQCLrjAgwHAxww+EJu4wDR2zzbPH/4ZyUIGwP+iPgj+E6+IJYw+CP4T7ne8uhmiGim/mD4U6G1f/hRviCOFDBopv5g+FOhtX/4VG8R+FKgtX++3vLoZfhUbxCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBY4Y+FRvEfhUbxDIz4WIzgH6AoBrz0DJcfsA3wsKCQF0+FRopv5g+FOhtX9vUSD4dPhJb1D4dPhL2zzIz4cgzo0EAAAAAAAAAAAAAAAAB6+l6LjPFst/yXD7ACIAFlRvbyBsb3cgYmlkAFpBdWN0aW9uIG5vdCBzdGlsbCBzdGFydGVkIG9yIGFscmVhZHkgZmluaXNoZWQEUCCCEBnqKUS64wIgghAw8fL5uuMCIIIQSwemg7rjAiCCEFAdUYq64wIaFBENAxww+EJu4wDR2zzbPH/4ZyUOGwKYiPgj+E++8uhniPgj+FC+8uhp+AD4I6Z4tR/4cPhNcMjPhYDKAHPPQM6NBpAOThwAAAAAAAAAAAAAAAAAADftOf8M9RSiQM8WyXD7ABAPACpUcnkgaXQgaW4gdHdvIG1pbnV0ZXMAKEF1Y3Rpb24gbm90IGZpbmlzaGVkA64w+EJu4wDR2zwqjkIs0NMB+kAwMcjPhyDOcc8LYV6BVZDIz5MsHpoOzst/VXDIzlVgyM7Lf8t/y3/LH1nIyx8BbyICzst/zc3Nzclw+wCSXwri4wB/+GclEhsB/I0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwXyD4Sjf4Szb4TDX4TTT4ThMAGvhP+FE1+FI0+FMz+FQD/DD4Qm7jAPhG8nN/+Gb6QZXU0dD6QN/6QZXU0dD6QN/XDX+V1NHQ03/f1w1/ldTR0NN/39cNf5XU0dDTf9/XDR+V1NHQ0x/f1w0fldTR0NMf39cNH5XU0dDTH9/RiPhJ+ErHBfLoZPgAJ/hsJvhtJfhxJPhyI/hzIvhuIfhvARcWFQEW+HD4dV8G2zx/+GcbADBNZXRob2QgZm9yIHRoZSByb290IG9ubHkCFu1E0NdJwgGKjoDiJRgB1HDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOk9cLf5Fw4vhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GwZAOqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bXD4bnD4b3D4cHD4cXD4cnD4c40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBvAvh0cPh1gED0DvK91wv/+GJw+GNw+GYDejD4Qm7jAPpBldTR0PpA3/pBldTR0PpA39cNH5XU0dDTH9/6QZXU0dD6QN/XDR+V1NHQ0x/f0ds82zx/+GclHBsAnPhV+FT4U/hS+FH4UPhP+E74TfhM+Ev4SvhG+EP4QsjL/8s/ygDOVaDIy3/OVYDIzssfyx/LH8t/y39VIMjLfwFvIgLOy3/LH83NzcntVAREiPhJ+E3HBfLoaIgi+CjHBfLoaiD4I6Y8tR+8joCOgOJfBSQjHx0C5vhUbxCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBY4Y+FRvEfhUbxDIz4WIzgH6AoBrz0DJcfsA3/hNyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAALmJzW0DPFslw+wD4S9s8yM+HIM4iHgBWjQQAAAAAAAAAAAAAAAAGd6xBuM8Wy3/JcPsAJMjPhQjOgG/PQMmBAKD7AAH++CdvECPCAI4iUwOBJxCphLV/IMIAjhJTBcjPhYjOAfoCgGvPQMlx+wDeMN74VcIAjiQg+FWBJxCphLV/IMIAjhMg+ErIz4WIzgH6AoBrz0DJcfsA3jDe+FRvEI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCAC+McFji/4VG8Q+E3Iz4WIzo0ETmJaAAAAAAAAAAAAAAAAAADAzxYByM+QhezMIs7NyXD7AN/4TcjPhYjOjQVOYloAAAAAAAAAAAAAAAAAAC5ic1tAzxbJcPsA+CdvEIAUqQT4SsjPhYjOAfoCgGvPQMlx+wD4S9s8yM+HIM4iIQBYjQQAAAAAAAAAAAAAAAAGd6xBuM8Wy3/JcPsAJcjPhQjOgG/PQMmBAKD7ADAASI0IWAAg2roYubBxOdG40QEjGeBKebK4CIki4Hm5abjiGQqI/AAaV3JvbmcgbWFuYWdlcgAyTWV0aG9kIGZvciB0aGUgdG9rZW4gb25seQCe7UTQ0//TP9IA+kDU0dDTf/pA1NHQ+kDTH9Mf0x/Tf9N/1NHQ03/6QNN/WW8CAdMf0fh1+HT4c/hy+HH4cPhv+G74bfhs+Gv4avhm+GP4YgIK9KQg9KEoJwAUc29sIDAuNDcuMAAA",
    code: "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",
    codeHash: "dbd2804c215844a0cf2407e5645c4a1133b9d7ecb919e2bc18f527f2b5d7ca33",
};
export default DirectAuctionContract;