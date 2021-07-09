const Art2SeriesContract = {
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
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "limit",
                        "type": "uint128"
                    },
                    {
                        "name": "tokenCode",
                        "type": "cell"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "create",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
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
                "name": "getManager",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "changeManager",
                "inputs": [
                    {
                        "name": "newManager",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "id",
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
                        "name": "totalSupply",
                        "type": "uint128"
                    },
                    {
                        "name": "limit",
                        "type": "uint128"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
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
        "events": []
    },
    tvc: "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",
    code: "te6ccgECHgEABqAABCSK7VMg4wMgwP/jAiDA/uMC8gsbAgEdAsSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zz4R27yfAYDAWoi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDcIdcNH/K8Id0B2zz4R27yfAMCKCCCEBmcpM274wIgghBy3EBwu+MCDgQEUCCCEDeQ/ja64wIgghA91oD6uuMCIIIQZgzpEbrjAiCCEHLcQHC64wIMCwkFAvYw+EJu4wD4RvJzf/hm+kGV1NHQ+kDfINdKwAGT1NHQ3tQg10rAAZPU0dDe1NcNf5XU0dDTf98g10vAAQHAALCT1NHQ3tTXDf+V1NHQ0//f0SX4bCT4bSP4biH4byL4cfhSIcjL/wFvIiGkVSCAIPRDbwL4cl8G2zx/+GcGGAIW7UTQ10nCAYqOgOIaBwT+cO1E0PQFcSGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GpyIYBA9A6T1wt/kXDi+GuNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bIj4bYj4boj4b3D4cHD4cXBtbwL4ch0dHQgAIoBA9A7yvdcL//hicPhjcPhmA2Yw+EJu4wDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5OYM6RGzs3JcPsAkTDi4wB/+GcaChgABPhMA2ow+EJu4wDTf9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkvdaA+rOzclw+wCRMOLjAH/4ZxoZGANWMPhCbuMA+kGV1NHQ+kDf1w1/ldTR0NN/39cMAJXU0dDSAN/R2zzjAH/4ZxoNGABK+En4TMcF8uBm+ABUcSDIz4WAygBzz0DOAfoCgGvPQMlw+wBfAwROIIIKEZtpuuMCIIIQFlzf5rrjAiCCEBmToM664wIgghAZnKTNuuMCFhQSDwOgMPhCbuMA+kGV1NHQ+kDf1w0fldTR0NMf39cNH5XU0dDTH9/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5JmcpM2zs3JcPsAkTDi2zx/+GcaEBgB/o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGim+2Dy0Ej4UPhRufLgZ/hJ+EzHBfLgZmim/mBw+FJvEYAg9A7ystcL/yP4TFNn+Ext+ELIy/9wWIBA9EP4SnFYgED0Fvgoc1iAQPQW+FDIy39yWIBA9EPI9AARAMjJ+E/Iz4SA9AD0AM+BySD5AMjPigBAy//J0FVgXyjIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WzM+DVVDIz5A3M8OizlVAyM7LH1UgyM7LH8v/zc3NyXD7ADIw+FCktX/4cGwxAy4w+EJu4wD6QZXU0dD6QN/R2zzbPH/4ZxoTGAAa+En4TMcF8uBm+AD4bAOAMPhCbuMA0ds8Jo4rKNDTAfpAMDHIz4cgznHPC2FeQVVQyM+SWXN/mst/zMzLf8t/y//NyXD7AJJfBuLjAH/4ZxoVGAJIcIiIcF8g+Es2+E01+E40+FAz+FEycPhSbxGAIPQO8rLXC/8xHR0D1jD4Qm7jANMf+ERYb3X4ZNN/0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhEcG9ycG9xgEBvdPhkIds8MTEhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5IIRm2mzs3JcPsAGhkXAXaOM/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaQHI+ERvFc8LH87NyfhEbxT7AOLjAH/4ZxgAdvhS+FH4UPhP+E74TfhM+Ev4SvhG+EP4QsjL/8s/ygDOVXDIy3/OzMzMy3/Lf8hYbyICyx/0AM3Nye1UANiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARt+ELIy/9wWIBA9EP4SnFYgED0Fvgoc1iAQPQWIsjLf3JYgED0Q8j0AMn4T8jPhID0APQAz4HJIPkAyM+KAEDL/8nQbBIBMDEAeu1E0NP/0z/SAPpA1NHQ03/6QNTU1NN/03/U0dDTH/QEWW8CAdH4cvhx+HD4b/hu+G34bPhr+Gr4Zvhj+GICCvSkIPShHRwAFHNvbCAwLjQ3LjAAAA==",
    codeHash: "173247056084ba1560fc6fb304fe5f08bb0f49095820c7e87367c8f66772e6ff",
};
export default Art2SeriesContract;