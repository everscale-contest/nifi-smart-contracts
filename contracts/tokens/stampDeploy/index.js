const {TonClient} = require("@tonclient/core")
const {libNode} = require("@tonclient/lib-node")
const { MsigKeys } = require('./msig.keys.js')
const { Msig } = require('./msig.js')
//const {CollectionRootContract} = require ('../collection/CollectionRootContract')
//const {CollectionContract} = require ('../collection/CollectionContract')
//const {CollectionTokenContract} = require ('../collection/CollectionTokenContract')
const {SealRootContract} = require ('../seal/SealRootContract')
const {SealTokenContract} = require ('../seal/SealTokenContract')
const {StampRootContract} = require ('../stamp/StampRootContract')
const {StampTokenContract} = require ('../stamp/StampTokenContract')
const {ForeverRootContract} = require ('../forever/ForeverRootContract')
const {ForeverTokenContract} = require ('../forever/ForeverTokenContract')
const { exec } = require('child_process');
const fs = require('fs');

TonClient.useBinaryLibrary(libNode)

const msgiManager="0:ab5f48c154f672d2f4c30c4473251e14a05199d1df1300263d8f5b0e80e3e387"

async function deploySealRoot (client,rootKeys) {

    const rootAbi = {
        type: 'Contract',
        value: SealRootContract.abi
    }
    const deployOptions = {
        abi: rootAbi,
        deploy_set: {
            tvc: SealRootContract.tvc,
            initial_data: {}
        },
        call_set: {
            function_name: 'constructor',
            input: {
                manager: msgiManager,
                creationMinValue: 200_000_000,
                creationFee : 100_000_000,
                name : "SealRoot1",
                symbol: "SEAL1",
                tokenCode: SealTokenContract.code,
            }
        },
        signer: {
            type: 'Keys',
            keys: rootKeys
        }
    }

    const { address } = await client.abi.encode_message(deployOptions);
    console.log(`Future address of the contract will be: ${address}`);
    await transfer(client,address,100_000_000);

    await client.processing.process_message({
        send_events: false,
        message_encode_params: deployOptions
      });

    console.log(`SealRoot contract was deployed at address: ${address}`);
    //await getCollectionRootInfo(client, address);
    return address;
}

async function deployStampRoot (client,rootKeys) {

    const rootAbi = {
        type: 'Contract',
        value: StampRootContract.abi
    }
    const deployOptions = {
        abi: rootAbi,
        deploy_set: {
            tvc: StampRootContract.tvc,
            initial_data: {}
        },
        call_set: {
            function_name: 'constructor',
            input: {
                manager: msgiManager,
                creationMinValue: 200_000_000,
                creationFee : 100_000_000,
                name : "StampRoot1",
                symbol: "STAMP1",
                tokenCode: StampTokenContract.code,
            }
        },
        signer: {
            type: 'Keys',
            keys: rootKeys
        }
    }

    const { address } = await client.abi.encode_message(deployOptions);
    console.log(`Future address of the contract will be: ${address}`);
    await transfer(client,address,100_000_000);

    await client.processing.process_message({
        send_events: false,
        message_encode_params: deployOptions
      });

    console.log(`StampRoot contract was deployed at address: ${address}`);
    //await getCollectionRootInfo(client, address);
    return address;
}

async function deployForeverRoot (client,rootKeys) {

    const rootAbi = {
        type: 'Contract',
        value: ForeverRootContract.abi
    }
    const deployOptions = {
        abi: rootAbi,
        deploy_set: {
            tvc: ForeverRootContract.tvc,
            initial_data: {}
        },
        call_set: {
            function_name: 'constructor',
            input: {
                manager: msgiManager,
                creationMinValue: 200_000_000,
                creationFee : 100_000_000,
                name : "ForeverRoot1",
                symbol: "FOR1",
                tokenCode: ForeverTokenContract.code,
            }
        },
        signer: {
            type: 'Keys',
            keys: rootKeys
        }
    }

    const { address } = await client.abi.encode_message(deployOptions);
    console.log(`Future address of the contract will be: ${address}`);
    await transfer(client,address,100_000_000);

    await client.processing.process_message({
        send_events: false,
        message_encode_params: deployOptions
      });

    console.log(`ForeverRoot contract was deployed at address: ${address}`);
    //await getCollectionRootInfo(client, address);
    return address;
}

async function createToken(client,root,abiContract,amount,hash) {
    const abi = {
        type: 'Contract',
        value: abiContract.abi
    }
    const body =await client.abi.encode_message_body({
        abi,
        call_set: {
            function_name: "create",
            input: {
                owner:Msig.address,
                manager:Msig.address,
                managerUnlockTime:0,
                creator:Msig.address,
                creatorFee:1000,
                hash:hash
            }
        },
        is_internal: true,
        signer: {
            type:"None"
        }
    })
    const wallet_abi = {
        type: 'Contract',
        value: SafeMultisigWallet.abi
    }
    const params = {
        address: Msig.address,
        abi:wallet_abi,
        call_set: {
            function_name: 'sendTransaction',
            input: {
                dest:root,
                value: amount,
                bounce:true,
                flags:1,
                payload: body.body
            }
        },
        signer: { type: 'Keys', keys: MsigKeys}
    }

    try {
        const message = await client.abi.encode_message(params);
        await client.processing.send_message({
            message:message.message,
            send_events: false
            });
        const in_msg = await client.boc.get_boc_hash({ boc: message.message });
        const res = await client.net.query_transaction_tree({in_msg: in_msg.hash, abi_registry:[abi]});
        console.log('res:', res);
        return "address";
    } catch (error) {
        console.error(error);
        exit(1)
    }
}

async function requestEndrose(client,stamp,seal,places,price,amount) {
    const abi = {
        type: 'Contract',
        value: StampTokenContract.abi
    }
    const body =await client.abi.encode_message_body({
        abi,
        call_set: {
            function_name: "requestEndorse",
            input: {
                seal,
                places,
                price
            }
        },
        is_internal: true,
        signer: {
            type:"None"
        }
    })
    const wallet_abi = {
        type: 'Contract',
        value: SafeMultisigWallet.abi
    }
    const params = {
        address: Msig.address,
        abi:wallet_abi,
        call_set: {
            function_name: 'sendTransaction',
            input: {
                dest:stamp,
                value: amount,
                bounce:true,
                flags:1,
                payload: body.body
            }
        },
        signer: { type: 'Keys', keys: MsigKeys}
    }

    try {
        const message = await client.abi.encode_message(params);
        await client.processing.send_message({
            message:message.message,
            send_events: false
            });
        const in_msg = await client.boc.get_boc_hash({ boc: message.message });
        await client.net.query_transaction_tree({in_msg: in_msg.hash, abi_registry:[abi]});
    } catch (error) {
        console.error(error);
        exit(1)
    }
}

async function endrose(client,seal,stamp,place,amount) {
    const abi = {
        type: 'Contract',
        value: SealTokenContract.abi
    }
    const body =await client.abi.encode_message_body({
        abi,
        call_set: {
            function_name: "endrose",
            input: {
                stamp,
                place
            }
        },
        is_internal: true,
        signer: {
            type:"None"
        }
    })
    const wallet_abi = {
        type: 'Contract',
        value: SafeMultisigWallet.abi
    }
    const params = {
        address: Msig.address,
        abi:wallet_abi,
        call_set: {
            function_name: 'sendTransaction',
            input: {
                dest:seal,
                value: amount,
                bounce:true,
                flags:1,
                payload: body.body
            }
        },
        signer: { type: 'Keys', keys: MsigKeys}
    }

    try {
        const message = await client.abi.encode_message(params);
        await client.processing.send_message({
            message:message.message,
            send_events: false
            });
        const in_msg = await client.boc.get_boc_hash({ boc: message.message });
        await client.net.query_transaction_tree({in_msg: in_msg.hash, abi_registry:[abi]});
    } catch (error) {
        console.error(error);
        exit(1)
    }
}

async function setForever(client,stamp,forever,amount) {
    const abi = {
        type: 'Contract',
        value: StampTokenContract.abi
    }
    const body =await client.abi.encode_message_body({
        abi,
        call_set: {
            function_name: "setForever",
            input: {
                forever
            }
        },
        is_internal: true,
        signer: {
            type:"None"
        }
    })
    const wallet_abi = {
        type: 'Contract',
        value: SafeMultisigWallet.abi
    }
    const params = {
        address: Msig.address,
        abi:wallet_abi,
        call_set: {
            function_name: 'sendTransaction',
            input: {
                dest:stamp,
                value: amount,
                bounce:true,
                flags:1,
                payload: body.body
            }
        },
        signer: { type: 'Keys', keys: MsigKeys}
    }

    try {
        const message = await client.abi.encode_message(params);
        await client.processing.send_message({
            message:message.message,
            send_events: false
            });
        const in_msg = await client.boc.get_boc_hash({ boc: message.message });
        await client.net.query_transaction_tree({in_msg: in_msg.hash, abi_registry:[abi]});
    } catch (error) {
        console.error(error);
        exit(1)
    }
}

async function callGet(client, contract, addr, function_name, input) {
    const abi = {
        type: 'Contract',
        value: contract.abi
    }
    const address = addr;
        const [account, message] = await Promise.all([
        client.net.query_collection({
            collection: 'accounts',
            filter: { id: { eq: address } },
            result: 'boc'
        })
        .then(({ result }) => result[0].boc)
        .catch(() => {
            //throw Error(`Failed to fetch account data`)
            console.log(`Failed to fetch account data`)
            return ""
        }),
        client.abi.encode_message({
            abi,
            address,
            call_set: {
                function_name,
                input
            },
            signer: { type: 'None' }
        }).then(({ message }) => message)
    ]);

    response = await client.tvm.run_tvm({ message, account, abi });
    return response.decoded.output
    //console.log('output:', response.decoded.output);
}

async function transfer (client, dst, amount) {

    const msig_abi = {
        type: 'Contract',
        value: Msig.abi
    }

    const params = {
        send_events: false,
        message_encode_params: {
            address: Msig.address,
            abi:msig_abi,
            call_set: {
                function_name: 'sendTransaction',
                input: {
                    dest:dst,
                    value:amount,
                    bounce:false,
                    flags:1,
                    payload: ""
                }
            },
            signer: { type: 'Keys', keys: MsigKeys}
        }
    }

    try {
        await client.processing.process_message(params);
        console.log(`Evers transfered to ${dst}`);
    } catch (error) {
    console.error(error);
  }
}

async function writeSealContractInfo (sealRoot, pubkey, sealTockenCodeHash, sealTokenCodeDepth) {
    let res = sealRoot.substring(2);
    const path = "../stamp/SealContractInfoLib.sol";
    const content= `pragma ton-solidity >=0.47.0; \n\n\
    library SealContractInfo {\n\
        function SEAL_ROOT() internal inline returns(address){\n\
            return address(0x${res});\n\
        }\n\
        uint256 constant SEAL_ROOT_PUBKEY = 0x${pubkey};\n\
        uint256 constant SEAL_CODEHASH = 0x${sealTockenCodeHash};\n\
        uint16 constant  SEAL_CODEDEPTH = ${sealTokenCodeDepth};\n\
    }`
    fs.writeFileSync(path,content,{encoding:'utf8',flag:'w'})
}

async function writeStampContractInfo (sealRoot, pubkey, sealTockenCodeHash, sealTokenCodeDepth) {
    let res = sealRoot.substring(2);
    const path = "../forever/StampContractInfoLib.sol";
    const content= `pragma ton-solidity >=0.47.0; \n\n\
    library StampContractInfo {\n\
        function STAMP_ROOT() internal inline returns(address){\n\
            return address(0x${res});\n\
        }\n\
        uint256 constant STAMP_ROOT_PUBKEY = 0x${pubkey};\n\
        uint256 constant STAMP_CODEHASH = 0x${sealTockenCodeHash};\n\
        uint16 constant  STAMP_CODEDEPTH = ${sealTokenCodeDepth};\n\
    }`
    fs.writeFileSync(path,content,{encoding:'utf8',flag:'w'})
}

//compile stamp and wrap
(async () => {

    const client = new TonClient({
        network: {
            // Blockchain node URL
            //endpoints: ["https://main.ton.dev"]
            //endpoints: ["https://net.ton.dev"]
            endpoints: ["http://localhost:8080"]
        }
    });
    try {

        const rootKeys = await client.crypto.generate_random_sign_keys();
        console.log('root keys:'+JSON.stringify(rootKeys));

        await exec('sh ./buildSeal.sh');
        //const sealRoot = await deploySealRoot(client,rootKeys)
        const sealRoot = "0:12345"
        const sealCodeInfo = await client.boc.decode_tvc({tvc: SealTokenContract.tvc});
        await writeSealContractInfo(sealRoot, rootKeys.public,sealCodeInfo.code_hash,sealCodeInfo.code_depth)

        await exec('sh ./buildStamp.sh');
        //const stampRoot = await deployStampRoot(client,rootKeys)
        const stampRoot = "0:1234"
        const stampCodeInfo = await client.boc.decode_tvc({tvc: SealTokenContract.tvc});
        await writeStampContractInfo(stampRoot, rootKeys.public,stampCodeInfo.code_hash,stampCodeInfo.code_depth)

        await exec('sh ./buildForever.sh');
        //const foreverRoot = await deployForeverRoot(client,rootKeys)
        const foreverRoot = "0:123"

        const stamp1 =await createToken(client,stampRoot,StampRootContract,200_000_000,"0x1111112")
        const stamp2 =await createToken(client,stampRoot,StampRootContract,200_000_000,"0x1111113")
        const stamp3 =await createToken(client,stampRoot,StampRootContract,200_000_000,"0x1111114")
        const stamp4 =await createToken(client,stampRoot,StampRootContract,200_000_000,"0x1111115")

        const seal1 =await createToken(client,sealRoot,SealRootContract,200_000_000,"0x1111121")

        const forever1 =await createToken(client,foreverRoot,ForeverRootContract,200_000_000,"0x1111131")

        await requestEndrose(client,stamp1,seal1,2|1,500_000_000,650_000_000)
        await endrose(client,seal1,stamp1,1,1500000000)

        await setForever(client,stamp1,forever1,300000000)
        let res = await callGet(client,ForeverTokenContract,forever1,'getStamps',{})
        console.log(res)

        await callGet(client,StampTokenContract,stamp1,'getArtInfo',{})
        await callGet(client,StampTokenContract,stamp1,'getSeal',{})
        await callGet(client,StampTokenContract,stamp1,'getForever',{})

        await callGet(client,SealTokenContract,seal1,'getInfo',{})


        //create 4 stamp
        //create 1 seal
        //create 1 forever

    } catch (err) {
        console.error(err)
    }
    client.close()
})()
