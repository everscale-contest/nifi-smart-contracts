const {TonClient} = require("@eversdk/core")
const {libNode} = require("@eversdk/lib-node")

const {SealRootContract} = require ('../../seal/1/SealRootContract')
const {SealTokenContract} = require ('../../seal/1/SealTokenContract')
const {transfer} = require('../utils/transfer')
const {config} = require('../config')
const fs = require('fs');

TonClient.useBinaryLibrary(libNode)

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
                manager: config.msgiManager,
                minCreationFee: config.creationMinValue,
                creationFixIncome : config.creationFee,
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
    await transfer(client,address,100_000_000,"");

    await client.processing.process_message({
        send_events: false,
        message_encode_params: deployOptions
      });

    console.log(`SealRoot contract was deployed at address: ${address}`);
    return address;
}

async function writeSealContractInfo (sealRoot, pubkey, sealTockenCodeHash, sealTokenCodeDepth) {
    let res = sealRoot.substring(2);
    const path = "../../stamp/1/SealContractInfoLib.sol";
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

(async () => {

    const client = new TonClient({
        network: {
            // Blockchain node URL
            endpoints: config.endpoints
        }
    });
    try {
        console.log('net: '+config.endpoints.toString());
        let root_json = JSON.parse(fs.readFileSync("../root.json").toString());

        const rootKeys = await client.crypto.generate_random_sign_keys();
        /*const rootKeys = {public:"a32b6119b77e79ee370e173a3383e517d2d235c796bd38198af22b6673300cb8",
        secret:"5707985ddf6b95a2a11d8503dbc52fee5be330dbc0020023a1180f08aaaef843"}*/
        console.log('root keys:'+JSON.stringify(root_json));

        root_json.keys = rootKeys;
        root_json.seal="";
        root_json.stamp="";
        root_json.forever="";

        const sealRoot = await deploySealRoot(client,root_json.keys)
        root_json.seal = sealRoot;
        const sealCodeInfo = await client.boc.decode_tvc({tvc: SealTokenContract.tvc});
        await writeSealContractInfo(sealRoot, root_json.keys.public,sealCodeInfo.code_hash,sealCodeInfo.code_depth)

        fs.writeFileSync("../root.json",JSON.stringify(root_json),{encoding:'utf8',flag:'w'})

    } catch (err) {
        console.error(err)
    }
    client.close()
})()
