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
    tvc: "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",
    code: "te6ccgECJAEABbAABCSK7VMg4wMgwP/jAiDA/uMC8gshAgEjA8TtRNDXScMB+GaJ+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPBYUAwNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwgIAMDPCCCEDeQ/ja74wIgghB+nWMWu+MCIIIQf5ggJ7rjAg8GBAN0MPhG8uBM+EJu4wDR2zwijiEk0NMB+kAwMcjPhyDOgGLPQF4Bz5P+YICey3/Lf8lw+wCRW+Iw2zzyAB8FGgAI+Ez4SwRQIIIQQeZ1T7rjAiCCEGU8Q7u64wIgghBmDOkRuuMCIIIQfp1jFrrjAg0LCQcDcjD4RvLgTPhCbuMA0z/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5P6dYxazs3JcPsAkTDi4wDyAB8IEQBy+ELIy/9wbYBA9EP4KHFYgED0FgHIyz9yWIBA9EPI9ADJ+E/Iz4SA9AD0AM+ByfkAyM+KAEDL/8nQA24w+Eby4Ez4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk5gzpEbOzclw+wCRMOLjAPIAHwoRAAT4SgN0MPhG8uBM+EJu4wDR2zwjjiEl0NMB+kAwMcjPhyDOgGLPQF4Rz5OU8Q7uzMzLf8lw+wCSXwPi4wDyAB8MEQAM+E34TvhQAzow+Eby4Ez4Qm7jACGT1NHQ3tN/03/R2zww2zzyAB8OGgAg+En4SscF8uBm+AAB+Gz4awRQIIIQCl0jS7rjAiCCEBmToM664wIgghA3F5OpuuMCIIIQN5D+NrrjAhkXExADPDD4RvLgTPhCbuMAIZPU0dDe+kDTf9IA0ds84wDyAB8SEQAo7UTQ0//TPzH4Q1jIy//LP87J7VQAQvhJ+ErHBfLgZvgAEsjPhYDKAHPPQM4B+gKAa89AyXD7AAKEMPhCbuMA+EbycyGT1NHQ3vpA03/Tf9TU1NH4RSBukjBw3vhCuvLgZfgAVQT4alUD+GxVAvhrWPhtAfhu+G/bPPIAFBoCFu1E0NdJwgGOgOMNFR8CUnDtRND0BYlwIIhfIHD4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjFiMAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADNjD4RvLgTPhCbuMAIZPU0dDe+kDR2zww2zzyAB8YGgAa+En4SscF8uBm+AD4agOgMPhG8uBM+EJu4wAhk9TR0N76QNTR0PpA0x/U0dD6QNMf0//R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5IpdI0uzs3JcPsAkTDiMNs88gAfGxoAVPhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4POVVDIy3/Lf8zMzMs/zcntVAL+UxGBCWG58uEVMGim/mD4TL7y4RZopv5g+EuhtX/4UKS1P/hwXlD4QsjL/3BtgED0Q/gocViAQPQW+FDIyz9yWIBA9EPI9ADJ+E/Iz4SA9AD0AM+BySD5AMjPigBAy//J0AgoyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFiHbPB4cAYzMz4NVUMjPkDczw6LOVUDIzssfVSDIzssfy//Nzc3JcPsA+FDbPMjPhyDOjQQAAAAAAAAAAAAAAAAC5g2niM8Wyz/JcPsAHQBIjQhYACDauhi5sHE50bjRASMZ4Ep5srgIiSLgeblpuOIZCoj8ADTQ0gABk9IEMd7SAAGT0gEx3vQE9AT0BNFfAwBW7UTQ0//TP9MAMfpA1NHQ03/Tf9TU1NM/0fhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShIyIAFHNvbCAwLjU3LjMAAA==",
    codeHash: "9aa418c5e3e05cca72c62f24ee0cace3e8dcf5d82a1b5687124b4fea9c8a3a9c",
};
module.exports = { StampRootContract };