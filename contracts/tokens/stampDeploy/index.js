const {TonClient} = require("@tonclient/core")
const {libNode} = require("@tonclient/lib-node")
const { MsigKeys } = require('./msig.keys.js')
const { Msig } = require('./msig.js')
//const {CollectionRootContract} = require ('../collection/CollectionRootContract')
//const {CollectionContract} = require ('../collection/CollectionContract')
//const {CollectionTokenContract} = require ('../collection/CollectionTokenContract')
const {SealRootContract} = require ('../seal/SealRootContract')
const {SealTokenContract} = require ('../seal/SealTokenContract')
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
            tvc: CollectionRootContract.tvc,
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

async function getCollectionRootInfo(client, root) {
    const abi = {
        type: 'Contract',
        value: CollectionRootContract.abi
    }
    const address = root;
        const [account, message] = await Promise.all([
        client.net.query_collection({
            collection: 'accounts',
            filter: { id: { eq: address } },
            result: 'boc'
        })
        .then(({ result }) => result[0].boc)
        .catch(() => {
            throw Error(`Failed to fetch account data`)
        }),
        client.abi.encode_message({
            abi,
            address,
            call_set: {
                function_name: 'getInfo',
                input: {}
            },
            signer: { type: 'None' }
        }).then(({ message }) => message)
    ]);

    response = await client.tvm.run_tvm({ message, account, abi });
    console.log('CollectionRoot getInfo:', response.decoded.output);
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

        await exec('sh ./buildSeal.sh');
        //console.log('stdout:', stdout);
        //console.log('stderr:', stderr);
        const rootKeys = await client.crypto.generate_random_sign_keys();
        console.log('root keys:'+JSON.stringify(rootKeys));
        //const sealRoot = await deploySealRoot(client,rootKeys)
        const sealRoot = "0:12345"
        const res = await client.boc.decode_tvc({tvc: SealTokenContract.tvc});
        await writeSealContractInfo(sealRoot, rootKeys.public,res.code_hash,res.code_depth)
        //const stampRoot = await deployStampRoot(client,rootKeys)
    } catch (err) {
        console.error(err)
    }
    client.close()
})()
