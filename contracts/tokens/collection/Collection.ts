const CollectionContract = {
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
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "manager",
                        "type": "address"
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
                        "name": "limit",
                        "type": "uint64"
                    },
                    {
                        "name": "tokenCode",
                        "type": "cell"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "mintCost",
                        "type": "uint128"
                    },
                    {
                        "name": "level1",
                        "type": "string[]"
                    },
                    {
                        "name": "level2",
                        "type": "string[]"
                    },
                    {
                        "name": "level3",
                        "type": "string[]"
                    },
                    {
                        "name": "level4",
                        "type": "string[]"
                    },
                    {
                        "name": "level5",
                        "type": "string[]"
                    },
                    {
                        "name": "hash",
                        "type": "string"
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "mint",
                "inputs": [
                    {
                        "name": "mintId",
                        "type": "uint32"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "id1",
                        "type": "uint8"
                    },
                    {
                        "name": "id2",
                        "type": "uint8"
                    },
                    {
                        "name": "id3",
                        "type": "uint8"
                    },
                    {
                        "name": "id4",
                        "type": "uint8"
                    },
                    {
                        "name": "id5",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "mintToken",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getTokenAddress",
                "inputs": [
                    {
                        "name": "id1",
                        "type": "uint8"
                    },
                    {
                        "name": "id2",
                        "type": "uint8"
                    },
                    {
                        "name": "id3",
                        "type": "uint8"
                    },
                    {
                        "name": "id4",
                        "type": "uint8"
                    },
                    {
                        "name": "id5",
                        "type": "uint8"
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
                        "type": "uint64"
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
                        "name": "totalSupply",
                        "type": "uint64"
                    },
                    {
                        "name": "limit",
                        "type": "uint64"
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
                        "type": "string"
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "getLevels",
                "inputs": [],
                "outputs": [
                    {
                        "name": "level1",
                        "type": "string[]"
                    },
                    {
                        "name": "level2",
                        "type": "string[]"
                    },
                    {
                        "name": "level3",
                        "type": "string[]"
                    },
                    {
                        "name": "level4",
                        "type": "string[]"
                    },
                    {
                        "name": "level5",
                        "type": "string[]"
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
                "name": "TK_MT_nifi_col1_1",
                "inputs": [
                    {
                        "name": "collectionId",
                        "type": "uint64"
                    },
                    {
                        "name": "index",
                        "type": "uint32"
                    },
                    {
                        "name": "id1",
                        "type": "uint8"
                    },
                    {
                        "name": "id2",
                        "type": "uint8"
                    },
                    {
                        "name": "id3",
                        "type": "uint8"
                    },
                    {
                        "name": "id4",
                        "type": "uint8"
                    },
                    {
                        "name": "id5",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SRC_PY_nifi_col1_1",
                "inputs": [
                    {
                        "name": "collectionId",
                        "type": "uint64"
                    },
                    {
                        "name": "futureId",
                        "type": "uint32"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "owner",
                        "type": "address"
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
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_manager",
                "type": "address"
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
                "type": "uint32"
            },
            {
                "name": "_ready2Mint",
                "type": "uint32"
            },
            {
                "name": "_limit",
                "type": "uint64"
            },
            {
                "name": "_creatorFees",
                "type": "uint32"
            },
            {
                "name": "_mintCost",
                "type": "uint128"
            },
            {
                "name": "_level1",
                "type": "string[]"
            },
            {
                "name": "_level2",
                "type": "string[]"
            },
            {
                "name": "_level3",
                "type": "string[]"
            },
            {
                "name": "_level4",
                "type": "string[]"
            },
            {
                "name": "_level5",
                "type": "string[]"
            },
            {
                "name": "_hash",
                "type": "string"
            },
            {
                "name": "_startTime",
                "type": "uint32"
            }
        ]
    },
    tvc: "te6ccgECLQEACWsAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsqBwQsAQAFAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwEVBgEI2zzyPAgDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8KSkIAiggghAr+lGlu+MCIIIQf32j07vjAhwJBFAgghBYvIB2uuMCIIIQZgzpEbrjAiCCEGw1fGK64wIgghB/faPTuuMCGhgRCgOeMPhG8uBM+EJu4wDTH/pBldTR0PpA39cNB5XU0dDTB9/XDQeV1NHQ0wff1w0HldTR0NMH39cNB5XU0dDTB9/XDQeV1NHQ0wff0ds82zzyACgLIwH++CP4XLzy4HD4UfhTufLgZ/hJ+E3HBfLgZmim/mCCEB3NZQC+8uBk+FGktR8nuvLgavhRpLUf+HFVBfhU+Ewo+ELIy/9wbYBA9EP4SnFYgED0FvgocliAQPQW+EvIyz9zWIBA9EMpyMsHdFiAQPRDKMjLB3VYgED0QyfIywd2WAwC6IBA9EMmyMsHd1iAQPRDJcjLB3hYgED0Q8j0AMn4UMjPhID0APQAz4HJIPkAyM+KAEDL/8jPhYjPE40EkC+vCAAAAAAAAAAAAAAAAAABwM8WIds8zM+DVTDIz5B+gbMSzlUgyM7LH8sfzc3JcPsAVQT4TMcFEA0Bko5HaKb+YIIQBfXhAKG1f4IQC+vCAKG1f4IImJaAvI4oaKb+YIIQBfXhAKG1f4IQC+vCAKG1f/hKyM+FiM4B+gKAa89AyXD7AN4OAvyOSWim/mCCEAX14QChtX+CEAvrwgChtX+rACCCCJiWgLyOJiD4TMjPhYjOAfoCgGvPQMlw+wAg+ErIz4WIzgH6AoBrz0DJcPsA3jDiXjD4UfhL2zzIz4cgzo0EAAAAAAAAAAAAAAAABAxuAnjPFss/yx/LB8sHywfLB8sHyXAfDwAE+wAANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DAvww+EJu4wD4RvJz+kGV1NHQ+kDf+kGV1NHQ+kDfINdKwAGT1NHQ3tQg10rAAZPU0dDe1NcNP5XU0dDTP98g10rAAZPU0dDe1NcNH5XU0dDTH9/XDX+V1NHQ03/fIMcBk9TR0N7TH/QEWW8CASDHAZPU0dDe0x/0BFlvAgEgxwEVEgL+k9TR0N7TH/QEWW8CASDHAZPU0dDe0x/0BFlvAgEgxwGT1NHQ3tMf9ARZbwIBINdLwAEBwACwk9TR0N7U1w0fldTR0NMf39GI+En4SscF8uhlVQ34bFUM+G1VC/huVQr4b1UI+HBVCPhzVQf4dFUG+HVVBfh2VQT4d1UD+HhVAhQTARz4eVj4egH4e/h82zzyACMAME1ldGhvZCBmb3IgdGhlIHJvb3Qgb25seQIW7UTQ10nCAYqOgOIoFgL8cO1E0PQFcPhA+EH4QvhD+ET4RfhG+Ef4SPhJcSuAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfciyAQPQOk9cLP5Fw4o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCCIXyBwLBcBVl9QbW8CcG1vAnBtbwJwbW8CcG1vAohwgB1vgO1XgED0DvK91wv/+GJw+GMsA24w+Eby4Ez4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk5gzpEbOzclw+wCRMOLjAPIAKBkmAAT4TQPGMPhG8uBM+EJu4wDR2zwljkon0NMB+kAwMcjPhyDOcc8LYV5AyM+TYvIB2gFvIgLLH/QAAW8iAssf9AABbyICyx/0AFnIAW8iAssf9AABbyICyx/0AM3NyXD7AJJfBeLjAPIAKBsmABT4VvhX+Fj4WfhaBFAgghAWGQtmuuMCIIIQGZOgzrrjAiCCEBvB20G64wIgghAr+lGluuMCJSIgHQMkMPhG8uBM+EJu4wDR2zzbPPIAKB4jAdj4I/hcvPLgcGim/mD4Vb74SfhMxwVopv5gghAdzWUAvrCx8uBpaKb+YPhNyM+FCM4B+gKAa89AyXD7APhSpLUf+HL4SWim/mD4UvhL2zzIz4cgznHPC2FVMMjPkVn5w+7LP8sfy3/Ozclw+wAfAEiNCFgGKnguR+I56eZm/4ZqPt29UdbflN4cxl7Au3fPqrnuKHQDgjD4RvLgTPhCbuMA0wfTB9MH0wfTB9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkm8HbQbOzclw+wCRMOLjAPIAKCEmAO74QsjL/3BtgED0Q/hKcViAQPQW+ChyWIBA9Bb4S8jLP3NYgED0Q1UEyMsHdFiAQPRDVQPIywd1WIBA9ENVAsjLB3ZYgED0Q1jIywd3WIBA9EMByMsHeFiAQPRDyPQAyfhQyM+EgPQA9ADPgcn5AMjPigBAy//J0AM2MPhG8uBM+EJu4wD6QZXU0dD6QN/R2zzbPPIAKCQjANztR3CAHW+HgB5vgjCAHXBkXwr4Q/hCyMv/yz/Pg87LP4ARYsjOVfDIzszMzMsfyx/LP8sfy39VYMgBbyICyx/0AAFvIgLLH/QAAW8iAssf9ABVMMgBbyICyx/0AAFvIgLLH/QAzMsfzc3NzcntVAAa+En4TccF8uBm+AD4bQOMMPhG8uBM+EJu4wDR2zwpji0r0NMB+kAwMcjPhyDOcc8LYV6AyM+SWGQtmss/zMzLP8s/zssfzMsfzclw+wCSXwni4wDyACgnJgAo7UTQ0//TPzH4Q1jIy//LP87J7VQAJPhL+E74T/hR+FP4TPhU+Fv4XAD07UTQ0//TP9MAMfpA0z/U0dD6QNTR0PpA1NTU0x/TH9M/0x/Tf9TR0NMf9ARZbwIB0x/0BFlvAgHTH/QEWW8CAdTR0NMf9ARZbwIB0x/0BFlvAgHU0x/RcPhA+EH4QvhD+ET4RfhG+Ef4SPhJgBN6Y4Adb4DtV/hj+GIACvhG8uBMAgr0pCD0oSwrABRzb2wgMC41Mi4wAAA=",
    code: "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",
    codeHash: "8d1a959507ee7c2ecc92ba5e9106a36e7dad39279a2d5679e7dc1b5846af2137",
};
export default CollectionContract;