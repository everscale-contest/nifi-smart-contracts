const AskContract = {
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
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "showcaseFee",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "acceptAsk",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "cancel",
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
                        "name": "creator",
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
                    },
                    {
                        "name": "showcaseFee",
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
                "name": "ASK_AC_nifi_ask_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "ASK_CL_nifi_ask_1",
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
    tvc: "te6ccgECHgEABRsAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsbBgQdAQAFAviNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8EgcBQiLQ0wP6QDD4aak4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAcEUCCCEAzad+264wIgghAb8O/juuMCIIIQIHxJ0LrjAiCCEEmMDym64wIVEA4IAxww+EJu4wDR2zzbPH/4ZxoJFgT6iGim/mDDAPLoZoj4I/hPufLoZ4hopv5g+FC88uhpaKb+YPhOwgCOJCD4ToEnEKmEtX8gwgCOEyD4SsjPhYjOAfoCgGvPQMlx+wDeMN74SfhNyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WAcjPkIXszCLOzclw+wD4TcgNDAsKAd7PhYjOjQVOYloAAAAAAAAAAAAAAAAAAC5ic1tAzxbJcPsAIIAUqQT4SsjPhYjOAfoCgGvPQMlx+wD4S9s8yM+HIM6NBAAAAAAAAAAAAAAAAAOEGdfIzxbLP8lw+wD4TMjPhQjOgG/PQMmBAKD7ADAYACJOb3QgZW5vdWd0aCBtb25leQAsT2ZmZXIgYWxyZWFkeSBmaW5pc2hlZAAyUmVjaXZlIG9ubHkgaW5uZXIgbWVzc2FnZQOSMPhCbuMA0ds8J440KdDTAfpAMDHIz4cgznHPC2FeUVVgyM+SgfEnQs7LP1VAyM5VMMjOy3/LH8sfzc3NyXD7AJJfB+LjAH/4ZxoPFgAc+Er4S/hM+E34UPhP+E4DvjD4Qm7jAPhG8nN/+Gb6QZXU0dD6QN/6QZXU0dD6QN/XDX+V1NHQ03/f1w0fldTR0NMf39cNH5XU0dDTH9/RiPhJ+ErHBfLoZPgAJPhsI/htIvhwAfhv+G5fA9s8f/hnEhEWADBNZXRob2QgZm9yIHRoZSByb290IG9ubHkCFu1E0NdJwgGKjoDiGhMB1HDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOk9cLP5Fw4vhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GwUAICNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bXD4bnD4b3D4cIBA9A7yvdcL//hicPhjcPhmAxww+EJu4wDR2zzbPH/4ZxoXFgBi+FD4T/hO+E34TPhL+Er4RvhD+ELIy//LP8oAzss/VUDIzlUwyM7LH8sfy3/NzcntVAKCiPhJ+EzHBfLoZfgA+EvbPMjPhyDOjQQAAAAAAAAAAAAAAAAGhec4OM8Wyz/JcPsA+EzIz4UIzoBvz0DJgQCg+wAZGABIjQhYACDauhi5sHE50bjRASMZ4Ep5srgIiSLgeblpuOIZCoj8ADZNZXRob2QgZm9yIHRoZSBjcmVhdG9yIG9ubHkAZO1E0NP/0z/SAPpA0z/U0dD6QNTR0PpA0x/TH9N/0fhw+G/4bvht+Gz4a/hq+Gb4Y/hiAgr0pCD0oR0cABRzb2wgMC40Ny4wAAA=",
    code: "te6ccgECGwEABO4ABCSK7VMg4wMgwP/jAiDA/uMC8gsYAwEaAQACAviNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8DwQBQiLQ0wP6QDD4aak4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAQEUCCCEAzad+264wIgghAb8O/juuMCIIIQIHxJ0LrjAiCCEEmMDym64wISDQsFAxww+EJu4wDR2zzbPH/4ZxcGEwT6iGim/mDDAPLoZoj4I/hPufLoZ4hopv5g+FC88uhpaKb+YPhOwgCOJCD4ToEnEKmEtX8gwgCOEyD4SsjPhYjOAfoCgGvPQMlx+wDeMN74SfhNyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WAcjPkIXszCLOzclw+wD4TcgKCQgHAd7PhYjOjQVOYloAAAAAAAAAAAAAAAAAAC5ic1tAzxbJcPsAIIAUqQT4SsjPhYjOAfoCgGvPQMlx+wD4S9s8yM+HIM6NBAAAAAAAAAAAAAAAAAOEGdfIzxbLP8lw+wD4TMjPhQjOgG/PQMmBAKD7ADAVACJOb3QgZW5vdWd0aCBtb25leQAsT2ZmZXIgYWxyZWFkeSBmaW5pc2hlZAAyUmVjaXZlIG9ubHkgaW5uZXIgbWVzc2FnZQOSMPhCbuMA0ds8J440KdDTAfpAMDHIz4cgznHPC2FeUVVgyM+SgfEnQs7LP1VAyM5VMMjOy3/LH8sfzc3NyXD7AJJfB+LjAH/4ZxcMEwAc+Er4S/hM+E34UPhP+E4DvjD4Qm7jAPhG8nN/+Gb6QZXU0dD6QN/6QZXU0dD6QN/XDX+V1NHQ03/f1w0fldTR0NMf39cNH5XU0dDTH9/RiPhJ+ErHBfLoZPgAJPhsI/htIvhwAfhv+G5fA9s8f/hnDw4TADBNZXRob2QgZm9yIHRoZSByb290IG9ubHkCFu1E0NdJwgGKjoDiFxAB1HDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOk9cLP5Fw4vhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GwRAICNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bXD4bnD4b3D4cIBA9A7yvdcL//hicPhjcPhmAxww+EJu4wDR2zzbPH/4ZxcUEwBi+FD4T/hO+E34TPhL+Er4RvhD+ELIy//LP8oAzss/VUDIzlUwyM7LH8sfy3/NzcntVAKCiPhJ+EzHBfLoZfgA+EvbPMjPhyDOjQQAAAAAAAAAAAAAAAAGhec4OM8Wyz/JcPsA+EzIz4UIzoBvz0DJgQCg+wAWFQBIjQhYACDauhi5sHE50bjRASMZ4Ep5srgIiSLgeblpuOIZCoj8ADZNZXRob2QgZm9yIHRoZSBjcmVhdG9yIG9ubHkAZO1E0NP/0z/SAPpA0z/U0dD6QNTR0PpA0x/TH9N/0fhw+G/4bvht+Gz4a/hq+Gb4Y/hiAgr0pCD0oRoZABRzb2wgMC40Ny4wAAA=",
    codeHash: "7470a52892b9d41072cef1d9bf88ad5d8c0ebfff6be2f435349e64b0cf781288",
};
export default AskContract;