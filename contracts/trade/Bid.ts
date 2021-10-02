const BidContract = {
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
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "acceptBid",
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
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
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
                "type": "uint128"
            }
        ],
        "events": [
            {
                "name": "BID_AC_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "BID_CL_1",
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
    tvc: "te6ccgECIwEABe4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsgBQQiAsSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zz4R27yfAwGAUIi0NMD+kAw+GmpOADcIccA3CHXDR/yvCHdAds8+Edu8nwGAiggghBbQLY5u+MCIIIQXzRR/7rjAgkHA44w+EJu4wDR2zwmjjIo0NMB+kAwMcjPhyDOcc8LYV5BVVDIz5N80Uf+zst/VTDIzlUgyM7Lf8sfzc3NyXD7AJJfBuLjAH/4Zx8IGAAY+Er4S/hM+E34T/hOBFAgghAZ6ilEuuMCIIIQRliORrrjAiCCEFAdUYq64wIgghBbQLY5uuMCFxIPCgOiMPhCbuMA+Ebyc3/4ZvpBldTR0PpA3/pBldTR0PpA39cNf5XU0dDTf9/XDR+V1NHQ0x/f0Yj4SfhKxwXy6GT4ACP4bCL4bQH4b/huW9s8f/hnDAsYADBNZXRob2QgZm9yIHRoZSByb290IG9ubHkCFu1E0NdJwgGKjoDiHw0B1HDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOk9cLf5Fw4vhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GwOAICNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bXD4bnD4b3D4cIBA9A7yvdcL//hicPhjcPhmAxww+EJu4wDR2zzbPH/4Zx8QGAKMiPgj+E6BA4SgtR++8uho+AD4S9s8yM+HIM6NBAAAAAAAAAAAAAAAAAY07VeIzxbLf8lw+wD4TMjPhQjOgG/PQMmBAKD7ABEbACRPZmZlciBub3QgZmluaXNoZWQDHDD4Qm7jANHbPOMAf/hnHxMYA56IaKb+YMMA8uhmiPgj+E658uhniGim/mCCEBHhowC88uhp+E1wyM+FgMoAc89Azo0FgAAAAAAAAAAAAAAAAAA37Tn/DPUUokDPFsmAQPsAFhUUAEhOZWVkIG1vcmUgdGhhbiAwLjMgdG9uIGZvciBvcGVyYXRpb24ALE9mZmVyIGFscmVhZHkgZmluaXNoZWQAMlJlY2l2ZSBvbmx5IGlubmVyIG1lc3NhZ2UDejD4Qm7jAPpBldTR0PpA3/pBldTR0PpA39cNH5XU0dDTH9/6QZXU0dD6QN/XDR+V1NHQ0x/f0ds82zx/+GcfGRgAYvhQ+E/4TvhN+Ez4S/hK+Eb4Q/hCyMv/yz/KAM5VUMjLf85VMMjOyx/Lf8t/zc3J7VQE+oj4SfhNxwXy6GWIIvgoxwXy6GqIIfhOgQOEoLUfvPLoa/gnbxAjwgCOIlMDgScQqYS1fyDCAI4SUwXIz4WIzgH6AoBrz0DJcfsA3jDe+Ez4TcjPhYjOjQROYloAAAAAAAAAAAAAAAAAAMDPFgHIz5CF7Mwizs3JcPsA+E3IHh0cGgHez4WIzo0FTmJaAAAAAAAAAAAAAAAAAAAuYnNbQM8WyXD7ACCAFKkE+ErIz4WIzgH6AoBrz0DJcfsA+EvbPMjPhyDOjQQAAAAAAAAAAAAAAAAF6FY9SM8Wy3/JcPsAJcjPhQjOgG/PQMmBAKD7AF8GGwBIjQhYACDauhi5sHE50bjRASMZ4Ep5srgIiSLgeblpuOIZCoj8ADJXcm9uZyBtYW5hZ2VyIHVubG9jayB0aW1lABpXcm9uZyBtYW5hZ2VyADJNZXRob2QgZm9yIHRoZSB0b2tlbiBvbmx5AGTtRNDT/9M/0gD6QNTR0NN/+kDU0dD6QNMf03/Tf9H4cPhv+G74bfhs+Gv4avhm+GP4YgIK9KQg9KEiIQAUc29sIDAuNDcuMAAA",
    code: "te6ccgECIAEABcEABCSK7VMg4wMgwP/jAiDA/uMC8gsdAgEfAsSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zz4R27yfAkDAUIi0NMD+kAw+GmpOADcIccA3CHXDR/yvCHdAds8+Edu8nwDAiggghBbQLY5u+MCIIIQXzRR/7rjAgYEA44w+EJu4wDR2zwmjjIo0NMB+kAwMcjPhyDOcc8LYV5BVVDIz5N80Uf+zst/VTDIzlUgyM7Lf8sfzc3NyXD7AJJfBuLjAH/4ZxwFFQAY+Er4S/hM+E34T/hOBFAgghAZ6ilEuuMCIIIQRliORrrjAiCCEFAdUYq64wIgghBbQLY5uuMCFA8MBwOiMPhCbuMA+Ebyc3/4ZvpBldTR0PpA3/pBldTR0PpA39cNf5XU0dDTf9/XDR+V1NHQ0x/f0Yj4SfhKxwXy6GT4ACP4bCL4bQH4b/huW9s8f/hnCQgVADBNZXRob2QgZm9yIHRoZSByb290IG9ubHkCFu1E0NdJwgGKjoDiHAoB1HDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOk9cLf5Fw4vhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GwLAICNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bXD4bnD4b3D4cIBA9A7yvdcL//hicPhjcPhmAxww+EJu4wDR2zzbPH/4ZxwNFQKMiPgj+E6BA4SgtR++8uho+AD4S9s8yM+HIM6NBAAAAAAAAAAAAAAAAAY07VeIzxbLf8lw+wD4TMjPhQjOgG/PQMmBAKD7AA4YACRPZmZlciBub3QgZmluaXNoZWQDHDD4Qm7jANHbPOMAf/hnHBAVA56IaKb+YMMA8uhmiPgj+E658uhniGim/mCCEBHhowC88uhp+E1wyM+FgMoAc89Azo0FgAAAAAAAAAAAAAAAAAA37Tn/DPUUokDPFsmAQPsAExIRAEhOZWVkIG1vcmUgdGhhbiAwLjMgdG9uIGZvciBvcGVyYXRpb24ALE9mZmVyIGFscmVhZHkgZmluaXNoZWQAMlJlY2l2ZSBvbmx5IGlubmVyIG1lc3NhZ2UDejD4Qm7jAPpBldTR0PpA3/pBldTR0PpA39cNH5XU0dDTH9/6QZXU0dD6QN/XDR+V1NHQ0x/f0ds82zx/+GccFhUAYvhQ+E/4TvhN+Ez4S/hK+Eb4Q/hCyMv/yz/KAM5VUMjLf85VMMjOyx/Lf8t/zc3J7VQE+oj4SfhNxwXy6GWIIvgoxwXy6GqIIfhOgQOEoLUfvPLoa/gnbxAjwgCOIlMDgScQqYS1fyDCAI4SUwXIz4WIzgH6AoBrz0DJcfsA3jDe+Ez4TcjPhYjOjQROYloAAAAAAAAAAAAAAAAAAMDPFgHIz5CF7Mwizs3JcPsA+E3IGxoZFwHez4WIzo0FTmJaAAAAAAAAAAAAAAAAAAAuYnNbQM8WyXD7ACCAFKkE+ErIz4WIzgH6AoBrz0DJcfsA+EvbPMjPhyDOjQQAAAAAAAAAAAAAAAAF6FY9SM8Wy3/JcPsAJcjPhQjOgG/PQMmBAKD7AF8GGABIjQhYACDauhi5sHE50bjRASMZ4Ep5srgIiSLgeblpuOIZCoj8ADJXcm9uZyBtYW5hZ2VyIHVubG9jayB0aW1lABpXcm9uZyBtYW5hZ2VyADJNZXRob2QgZm9yIHRoZSB0b2tlbiBvbmx5AGTtRNDT/9M/0gD6QNTR0NN/+kDU0dD6QNMf03/Tf9H4cPhv+G74bfhs+Gv4avhm+GP4YgIK9KQg9KEfHgAUc29sIDAuNDcuMAAA",
    codeHash: "bfe1f9240c992451dddf5b6784bc3f8525616e41709a96579c807a84a926a182",
};
export default BidContract;