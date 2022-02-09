module.exports = {
    Msig: {
        //address : "0:5832aaf6f19af360129ba3fa1079a1c2104f6d502afb3525640fe7a945abcc62",
        address : "0:ab5f48c154f672d2f4c30c4473251e14a05199d1df1300263d8f5b0e80e3e387",
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
                            "name": "owners",
                            "type": "uint256[]"
                        },
                        {
                            "name": "reqConfirms",
                            "type": "uint8"
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "acceptTransfer",
                    "inputs": [
                        {
                            "name": "payload",
                            "type": "bytes"
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "sendTransaction",
                    "inputs": [
                        {
                            "name": "dest",
                            "type": "address"
                        },
                        {
                            "name": "value",
                            "type": "uint128"
                        },
                        {
                            "name": "bounce",
                            "type": "bool"
                        },
                        {
                            "name": "flags",
                            "type": "uint8"
                        },
                        {
                            "name": "payload",
                            "type": "cell"
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "submitTransaction",
                    "inputs": [
                        {
                            "name": "dest",
                            "type": "address"
                        },
                        {
                            "name": "value",
                            "type": "uint128"
                        },
                        {
                            "name": "bounce",
                            "type": "bool"
                        },
                        {
                            "name": "allBalance",
                            "type": "bool"
                        },
                        {
                            "name": "payload",
                            "type": "cell"
                        }
                    ],
                    "outputs": [
                        {
                            "name": "transId",
                            "type": "uint64"
                        }
                    ]
                },
                {
                    "name": "confirmTransaction",
                    "inputs": [
                        {
                            "name": "transactionId",
                            "type": "uint64"
                        }
                    ],
                    "outputs": []
                },
                {
                    "name": "isConfirmed",
                    "inputs": [
                        {
                            "name": "mask",
                            "type": "uint32"
                        },
                        {
                            "name": "index",
                            "type": "uint8"
                        }
                    ],
                    "outputs": [
                        {
                            "name": "confirmed",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "name": "getParameters",
                    "inputs": [],
                    "outputs": [
                        {
                            "name": "maxQueuedTransactions",
                            "type": "uint8"
                        },
                        {
                            "name": "maxCustodianCount",
                            "type": "uint8"
                        },
                        {
                            "name": "expirationTime",
                            "type": "uint64"
                        },
                        {
                            "name": "minValue",
                            "type": "uint128"
                        },
                        {
                            "name": "requiredTxnConfirms",
                            "type": "uint8"
                        }
                    ]
                },
                {
                    "name": "getTransaction",
                    "inputs": [
                        {
                            "name": "transactionId",
                            "type": "uint64"
                        }
                    ],
                    "outputs": [
                        {
                            "components": [
                                {
                                    "name": "id",
                                    "type": "uint64"
                                },
                                {
                                    "name": "confirmationsMask",
                                    "type": "uint32"
                                },
                                {
                                    "name": "signsRequired",
                                    "type": "uint8"
                                },
                                {
                                    "name": "signsReceived",
                                    "type": "uint8"
                                },
                                {
                                    "name": "creator",
                                    "type": "uint256"
                                },
                                {
                                    "name": "index",
                                    "type": "uint8"
                                },
                                {
                                    "name": "dest",
                                    "type": "address"
                                },
                                {
                                    "name": "value",
                                    "type": "uint128"
                                },
                                {
                                    "name": "sendFlags",
                                    "type": "uint16"
                                },
                                {
                                    "name": "payload",
                                    "type": "cell"
                                },
                                {
                                    "name": "bounce",
                                    "type": "bool"
                                }
                            ],
                            "name": "trans",
                            "type": "tuple"
                        }
                    ]
                },
                {
                    "name": "getTransactions",
                    "inputs": [],
                    "outputs": [
                        {
                            "components": [
                                {
                                    "name": "id",
                                    "type": "uint64"
                                },
                                {
                                    "name": "confirmationsMask",
                                    "type": "uint32"
                                },
                                {
                                    "name": "signsRequired",
                                    "type": "uint8"
                                },
                                {
                                    "name": "signsReceived",
                                    "type": "uint8"
                                },
                                {
                                    "name": "creator",
                                    "type": "uint256"
                                },
                                {
                                    "name": "index",
                                    "type": "uint8"
                                },
                                {
                                    "name": "dest",
                                    "type": "address"
                                },
                                {
                                    "name": "value",
                                    "type": "uint128"
                                },
                                {
                                    "name": "sendFlags",
                                    "type": "uint16"
                                },
                                {
                                    "name": "payload",
                                    "type": "cell"
                                },
                                {
                                    "name": "bounce",
                                    "type": "bool"
                                }
                            ],
                            "name": "transactions",
                            "type": "tuple[]"
                        }
                    ]
                },
                {
                    "name": "getTransactionIds",
                    "inputs": [],
                    "outputs": [
                        {
                            "name": "ids",
                            "type": "uint64[]"
                        }
                    ]
                },
                {
                    "name": "getCustodians",
                    "inputs": [],
                    "outputs": [
                        {
                            "components": [
                                {
                                    "name": "index",
                                    "type": "uint8"
                                },
                                {
                                    "name": "pubkey",
                                    "type": "uint256"
                                }
                            ],
                            "name": "custodians",
                            "type": "tuple[]"
                        }
                    ]
                }
            ],
            "data": [],
            "events": [
                {
                    "name": "TransferAccepted",
                    "inputs": [
                        {
                            "name": "payload",
                            "type": "bytes"
                        }
                    ],
                    "outputs": []
                }
            ]
        }
    }
}