const StampRootContract = {
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
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
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
        ]
    },
    tvc: "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",
    code: "te6ccgECHQEABaIABCSK7VMg4wMgwP/jAiDA/uMC8gsaAwEcAQACAv6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8DgQBQiLQ0wP6QDD4aak4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAQCKCCCEDvyGsO74wIgghB+nWMWu+MCDAUDPCCCEGYM6RG64wIgghBpx49OuuMCIIIQfp1jFrrjAgoIBgNqMPhCbuMA0z/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5P6dYxazs3JcPsAkTDi4wB/+GcZBxUAyI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABG34QsjL/3BYgED0Q/gocViAQPQWIsjLP3JYgED0Q8j0AMn4T8jPhID0APQAz4HJIPkAyM+KAEDL/8nQbBIBMDEDbDD4Qm7jANHbPCOOISXQ0wH6QDAxyM+HIM6AYs9AXhHPk6cePTrMzMt/yXD7AJJfA+LjAH/4ZxkJFQISiIhb+E34TvhQHBwDZjD4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk5gzpEbOzclw+wCRMOLjAH/4ZxkLFQAE+EoEUCCCEApdI0u64wIgghAZk6DOuuMCIIIQN5D+NrrjAiCCEDvyGsO64wIUEhANAtQw+EJu4wD4RvJzf/hm+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf98g10rAAZPU0dDe1CDXSsABk9TR0N7U1NH4RSBukjBw3vhCuvLgZfgAJfhqJPhsI/hrIvhtAfhu+G9fBNs8f/hnDhUCFu1E0NdJwgGKjoDiGQ8DnnDtRND0BY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhqcPhrcPhsiPhtiPhuiPhvcPhwgED0DvK91wv/+GJw+GNw+GYcHBwDVjD4Qm7jAPpBldTR0PpA39cNf5XU0dDTf9/XDACV1NHQ0gDf0ds84wB/+GcZERUASvhJ+ErHBfLgZvgAVHEgyM+FgMoAc89AzgH6AoBrz0DJcPsAXwMDLjD4Qm7jAPpBldTR0PpA39HbPNs8f/hnGRMVABr4SfhKxwXy4Gb4APhqA9gw+EJu4wD6QZXU0dD6QN/6QZXU0dD6QN/XDR+V1NHQ0x/f+kGV1NHQ+kDf1w0fldTR0NMf39cN/5XU0dDT/9/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5IpdI0uzs3JcPsAkTDi2zx/+GcZFhUAWPhQ+E/4TvhN+Ez4S/hK+Eb4Q/hCyMv/yz/KAM5VUMjLf8t/zMzMyz/Nye1UAfyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARTIoEJYbny4RVopv5g+Ey+8uEWaKb+YPhLobV/+FCktT/4cFRzRVR5q234QsjL/3BYgED0Q/gocViAQPQW+FDIyz9yWIBA9EPI9ADJ+E/Iz4SA9AD0AM+BySAXAeT5AMjPigBAy//J0FVgXyjIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WzM+DVVDIz5A3M8OizlVAyM7LH1UgyM7LH8v/zc3NyXD7ADP4UNs8yM+HIM6NBAAAAAAAAAAAAAAAAALmDaeIzxbLP8lw+wBbbGEYAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwAWO1E0NP/0z/SAPpA1NHQ03/Tf9TU1NM/0fhw+G/4bvht+Gz4a/hq+Gb4Y/hiAgr0pCD0oRwbABRzb2wgMC40Ny4wAAA=",
    codeHash: "6a79018af93d2b2ff3d97fa1b6d5b3d3b6863747fabd089bd457c69fe2573ce4",
};
module.exports = { StampRootContract };