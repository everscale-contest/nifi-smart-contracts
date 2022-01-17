const StampRootContract = {
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
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "tokenCode",
                        "type": "cell"
                    }
                ],
                "outputs": []
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
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint128"
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
                "name": "getTokenAddress",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "TK_CT_nifi_stamp1_1",
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
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_creationFee",
                "type": "uint128"
            },
            {
                "name": "_creationMinValue",
                "type": "uint128"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_symbol",
                "type": "string"
            },
            {
                "name": "_tokenCode",
                "type": "cell"
            },
            {
                "name": "_totalSupply",
                "type": "uint64"
            }
        ]
    },
    tvc: "te6ccgECJAEABXYAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gshBwQjAQAFAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rkVBgEO0x8B2zzyPAgDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8ICAIAiggghA3kP42u+MCIIIQfp1jFrvjAhAJAzwgghBlPEO7uuMCIIIQZgzpEbrjAiCCEH6dYxa64wIODAoDcjD4RvLgTPhCbuMA0z/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5P6dYxazs3JcPsAkTDi4wDyAB8LEgBy+ELIy/9wbYBA9EP4KHFYgED0FgHIyz9yWIBA9EPI9ADJ+E/Iz4SA9AD0AM+ByfkAyM+KAEDL/8nQA24w+Eby4Ez4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk5gzpEbOzclw+wCRMOLjAPIAHw0SAAT4SgN0MPhG8uBM+EJu4wDR2zwjjiEl0NMB+kAwMcjPhyDOgGLPQF4Rz5OU8Q7uzMzLf8lw+wCSXwPi4wDyAB8PEgAM+E34TvhQBFAgghAKXSNLuuMCIIIQGZOgzrrjAiCCEDcXk6m64wIgghA3kP42uuMCGRcUEQM8MPhG8uBM+EJu4wAhk9TR0N76QNN/0gDR2zzjAPIAHxMSACjtRNDT/9M/MfhDWMjL/8s/zsntVABC+En4SscF8uBm+AASyM+FgMoAc89AzgH6AoBrz0DJcPsAAoQw+EJu4wD4RvJzIZPU0dDe+kDTf9N/1NTU0fhFIG6SMHDe+EK68uBl+ABVBPhqVQP4bFUC+GtY+G0B+G74b9s88gAVGgIW7UTQ10nCAY6A4w0WHwOYcO1E0PQFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gpw+Gtw+GyI+G2I+G6I+G9w+HCAQPQO8r3XC//4YnD4YyMjIwM2MPhG8uBM+EJu4wAhk9TR0N76QNHbPDDbPPIAHxgaABr4SfhKxwXy4Gb4APhqA6Aw+Eby4Ez4Qm7jACGT1NHQ3vpA1NHQ+kDTH9TR0PpA0x/T/9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkil0jS7Ozclw+wCRMOIw2zzyAB8bGgBU+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg85VUMjLf8t/zMzMyz/Nye1UAv5TEYEJYbny4RUwaKb+YPhMvvLhFmim/mD4S6G1f/hQpLU/+HBeUPhCyMv/cG2AQPRD+ChxWIBA9Bb4UMjLP3JYgED0Q8j0AMn4T8jPhID0APQAz4HJIPkAyM+KAEDL/8nQCCjIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WIds8HhwBjMzPg1VQyM+QNzPDos5VQMjOyx9VIMjOyx/L/83Nzclw+wD4UNs8yM+HIM6NBAAAAAAAAAAAAAAAAALmDaeIzxbLP8lw+wAdAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DAFbtRNDT/9M/0wAx+kDU0dDTf9N/1NTU0z/R+HD4b/hu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEjIgAUc29sIDAuNTQuMAAA",
    code: "te6ccgECIQEABUkABCSK7VMg4wMgwP/jAiDA/uMC8gseBAEgAQACAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rkSAwEO0x8B2zzyPAUDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8HR0FAiggghA3kP42u+MCIIIQfp1jFrvjAg0GAzwgghBlPEO7uuMCIIIQZgzpEbrjAiCCEH6dYxa64wILCQcDcjD4RvLgTPhCbuMA0z/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5P6dYxazs3JcPsAkTDi4wDyABwIDwBy+ELIy/9wbYBA9EP4KHFYgED0FgHIyz9yWIBA9EPI9ADJ+E/Iz4SA9AD0AM+ByfkAyM+KAEDL/8nQA24w+Eby4Ez4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk5gzpEbOzclw+wCRMOLjAPIAHAoPAAT4SgN0MPhG8uBM+EJu4wDR2zwjjiEl0NMB+kAwMcjPhyDOgGLPQF4Rz5OU8Q7uzMzLf8lw+wCSXwPi4wDyABwMDwAM+E34TvhQBFAgghAKXSNLuuMCIIIQGZOgzrrjAiCCEDcXk6m64wIgghA3kP42uuMCFhQRDgM8MPhG8uBM+EJu4wAhk9TR0N76QNN/0gDR2zzjAPIAHBAPACjtRNDT/9M/MfhDWMjL/8s/zsntVABC+En4SscF8uBm+AASyM+FgMoAc89AzgH6AoBrz0DJcPsAAoQw+EJu4wD4RvJzIZPU0dDe+kDTf9N/1NTU0fhFIG6SMHDe+EK68uBl+ABVBPhqVQP4bFUC+GtY+G0B+G74b9s88gASFwIW7UTQ10nCAY6A4w0THAOYcO1E0PQFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gpw+Gtw+GyI+G2I+G6I+G9w+HCAQPQO8r3XC//4YnD4YyAgIAM2MPhG8uBM+EJu4wAhk9TR0N76QNHbPDDbPPIAHBUXABr4SfhKxwXy4Gb4APhqA6Aw+Eby4Ez4Qm7jACGT1NHQ3vpA1NHQ+kDTH9TR0PpA0x/T/9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkil0jS7Ozclw+wCRMOIw2zzyABwYFwBU+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg85VUMjLf8t/zMzMyz/Nye1UAv5TEYEJYbny4RUwaKb+YPhMvvLhFmim/mD4S6G1f/hQpLU/+HBeUPhCyMv/cG2AQPRD+ChxWIBA9Bb4UMjLP3JYgED0Q8j0AMn4T8jPhID0APQAz4HJIPkAyM+KAEDL/8nQCCjIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WIds8GxkBjMzPg1VQyM+QNzPDos5VQMjOyx9VIMjOyx/L/83Nzclw+wD4UNs8yM+HIM6NBAAAAAAAAAAAAAAAAALmDaeIzxbLP8lw+wAaAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DAFbtRNDT/9M/0wAx+kDU0dDTf9N/1NTU0z/R+HD4b/hu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEgHwAUc29sIDAuNTQuMAAA",
    codeHash: "82360a424e362c4b85b53ca4944e5203ea9b37351c08917224bb7525627d40af",
};
module.exports = { StampRootContract };