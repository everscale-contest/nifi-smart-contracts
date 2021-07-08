const OfferContract = {
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
                "name": "acceptOffer",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "onReceiveInfo",
                "inputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    },
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
                "name": "OfferCreated",
                "inputs": [
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
                ],
                "outputs": []
            },
            {
                "name": "OfferAccepted",
                "inputs": [
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
                    }
                ],
                "outputs": []
            },
            {
                "name": "OfferFinished",
                "inputs": [
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
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "259a08abb8b9a1bd927b0a98ae11d30dc737155af2e8707f056530c735929473",
};
export default OfferContract;