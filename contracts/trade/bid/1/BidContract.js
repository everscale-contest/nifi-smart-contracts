const BidContract = {
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
                        "name": "creatorPercentReward",
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
                "name": "BID_AC_nifi_bid_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "BID_CL_nifi_bid_1",
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
                "name": "_token",
                "type": "address"
            },
            {
                "name": "_endTime",
                "type": "uint32"
            },
            {
                "name": "_price",
                "type": "uint128"
            },
            {
                "name": "_fee",
                "type": "uint128"
            }
        ]
    },
    tvc: "te6ccgECJgEABX4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsjBQQlA77tRNDXScMB+GaJ+Gkh2zzTAAGOGoECANcYIPkBAdMAAZTT/wMBkwL4QuL5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPAwJBgNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwiIgYCKCCCEFqYYCS74wIgghBbQLY5uuMCDQcDcDD4Qm7jAPhG8nMhk9TR0N76QNTR0PpA03/TH9GI+En4SscF8uhk+ABVAvhsWPhtAfhv+G7bPPIACQgaADBNZXRob2QgZm9yIHRoZSByb290IG9ubHkCFu1E0NdJwgGOgOMNCiECenDtRND0BXEhgED0Do6A33IigED0DpPXCz+RcOKJIHBfIPhw+G/4bvht+Gz4a/hqgED0DvK91wv/+GJw+GMLDAECiQwAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAEUCCCEBnqKUS64wIgghBGWI5GuuMCIIIQUB1RirrjAiCCEFqYYCS64wIZExAOA5Iw+Eby4Ez4Qm7jANHbPCaOMCjQ0wH6QDAxyM+HIM5xzwthXlDIz5NqYYCSzss/VTDIzlUgyM7Lf8sfzc3NyXD7AJJfBuLjAPIAIQ8UABj4SvhL+Ez4TfhP+E4DJjD4RvLgTPhCbuMA0ds8MNs88gAhERoCdIj4I/hOgQOEoLUfvvLoaPgA+EvbPMjPhyDOghA+f0BwzwuByz/JcPsA+EzIz4UIzoBvz0DJgQCg+wASHQAkT2ZmZXIgbm90IGZpbmlzaGVkAyQw+Eby4Ez4Qm7jANHbPOMA8gAhFRQAKO1E0NP/0z8x+ENYyMv/yz/Oye1UA4KIaKb+YMMA8uhmiPgj+E658uhniGim/mCCEBHhowC88uhp+E1wyM+FgMoAz4RAzoIwb9pz/hnqKUTPC67JgED7ABgXFgBITmVlZCBtb3JlIHRoYW4gMC4zIHRvbiBmb3Igb3BlcmF0aW9uACxPZmZlciBhbHJlYWR5IGZpbmlzaGVkADJSZWNpdmUgb25seSBpbm5lciBtZXNzYWdlA1Iw+Eby4Ez4Qm7jACGT1NHQ3vpA1NHQ+kDTH9TR0PpA0x/R2zww2zzyACEbGgBe+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg87LP1VAyM5VMMjOyx/Lf8t/zc3J7VQE/oj4SfhNxwXy6GWIWPgoxwXy6GqIAfhOgQOEoLUfvPLoa/gnbxAhwgCOIlMBgScQqYS1fyDCAI4SUwPIz4WIzgH6AoBrz0DJcfsA3jDe+E3Iz4WIzoJ4HMS0AAAAAAAAAAAAAAAAAAHPC4b4TMjPkIXszCLOzclw+wD4TcjPhYggHx4cAbrOgpgcxLQAAAAAAAAAAAAAAAAAAFzE5rbPC6bJcPsAgBSpBPhKyM+FiM4B+gKAa89AyXH7AFv4S9s8yM+HIM6CEBW/owHPC4HLP8lw+wDIz4UIzoBvz0DJgQCg+wAdAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwAMldyb25nIG1hbmFnZXIgdW5sb2NrIHRpbWUAGldyb25nIG1hbmFnZXIAMk1ldGhvZCBmb3IgdGhlIHRva2VuIG9ubHkAYu1E0NP/0z/TADH6QNM/1NHQ+kDU0dD6QNMf03/Tf9H4cPhv+G74bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oSUkABRzb2wgMC41OC4yAAA=",
    code: "te6ccgECIwEABVEABCSK7VMg4wMgwP/jAiDA/uMC8gsgAgEiA77tRNDXScMB+GaJ+Gkh2zzTAAGOGoECANcYIPkBAdMAAZTT/wMBkwL4QuL5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPAkGAwNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwfHwMCKCCCEFqYYCS74wIgghBbQLY5uuMCCgQDcDD4Qm7jAPhG8nMhk9TR0N76QNTR0PpA03/TH9GI+En4SscF8uhk+ABVAvhsWPhtAfhv+G7bPPIABgUXADBNZXRob2QgZm9yIHRoZSByb290IG9ubHkCFu1E0NdJwgGOgOMNBx4CenDtRND0BXEhgED0Do6A33IigED0DpPXCz+RcOKJIHBfIPhw+G/4bvht+Gz4a/hqgED0DvK91wv/+GJw+GMICQECiQkAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAEUCCCEBnqKUS64wIgghBGWI5GuuMCIIIQUB1RirrjAiCCEFqYYCS64wIWEA0LA5Iw+Eby4Ez4Qm7jANHbPCaOMCjQ0wH6QDAxyM+HIM5xzwthXlDIz5NqYYCSzss/VTDIzlUgyM7Lf8sfzc3NyXD7AJJfBuLjAPIAHgwRABj4SvhL+Ez4TfhP+E4DJjD4RvLgTPhCbuMA0ds8MNs88gAeDhcCdIj4I/hOgQOEoLUfvvLoaPgA+EvbPMjPhyDOghA+f0BwzwuByz/JcPsA+EzIz4UIzoBvz0DJgQCg+wAPGgAkT2ZmZXIgbm90IGZpbmlzaGVkAyQw+Eby4Ez4Qm7jANHbPOMA8gAeEhEAKO1E0NP/0z8x+ENYyMv/yz/Oye1UA4KIaKb+YMMA8uhmiPgj+E658uhniGim/mCCEBHhowC88uhp+E1wyM+FgMoAz4RAzoIwb9pz/hnqKUTPC67JgED7ABUUEwBITmVlZCBtb3JlIHRoYW4gMC4zIHRvbiBmb3Igb3BlcmF0aW9uACxPZmZlciBhbHJlYWR5IGZpbmlzaGVkADJSZWNpdmUgb25seSBpbm5lciBtZXNzYWdlA1Iw+Eby4Ez4Qm7jACGT1NHQ3vpA1NHQ+kDTH9TR0PpA0x/R2zww2zzyAB4YFwBe+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg87LP1VAyM5VMMjOyx/Lf8t/zc3J7VQE/oj4SfhNxwXy6GWIWPgoxwXy6GqIAfhOgQOEoLUfvPLoa/gnbxAhwgCOIlMBgScQqYS1fyDCAI4SUwPIz4WIzgH6AoBrz0DJcfsA3jDe+E3Iz4WIzoJ4HMS0AAAAAAAAAAAAAAAAAAHPC4b4TMjPkIXszCLOzclw+wD4TcjPhYgdHBsZAbrOgpgcxLQAAAAAAAAAAAAAAAAAAFzE5rbPC6bJcPsAgBSpBPhKyM+FiM4B+gKAa89AyXH7AFv4S9s8yM+HIM6CEBW/owHPC4HLP8lw+wDIz4UIzoBvz0DJgQCg+wAaAEiNCFgAINq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiPwAMldyb25nIG1hbmFnZXIgdW5sb2NrIHRpbWUAGldyb25nIG1hbmFnZXIAMk1ldGhvZCBmb3IgdGhlIHRva2VuIG9ubHkAYu1E0NP/0z/TADH6QNM/1NHQ+kDU0dD6QNMf03/Tf9H4cPhv+G74bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oSIhABRzb2wgMC41OC4yAAA=",
    codeHash: "b1d02eb91fdac140c8cf631c40976b9adb69e6516baf74e510ac01edf631d736",
};
module.exports = { BidContract };