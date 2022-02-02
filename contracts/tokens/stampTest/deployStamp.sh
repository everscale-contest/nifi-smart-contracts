#!/bin/bash
set -e

filename=ticketDebot
filenamesol=$filename.sol
filenameabi=$filename.abi.json
filenametvc=$filename.tvc
filenamekeys=$filename.keys.json

CLI_PATH=~/git/tonos-cli/target/release

function get_stamp_payload {
echo $($CLI_PATH/tonos-cli body --abi ../stamp/StampRoot.abi.json create "{\"owner\":\"$msig\",\"manager\":\"$msig\",\"managerUnlockTime\":\"0\",\"creator\":\"$msig\",\"creatorFees\":\"1000\",\"hash\":\"0x54321\"}" | grep "body:" | cut -d ' ' -f 3)
}

msig=0:ab5f48c154f672d2f4c30c4473251e14a05199d1df1300263d8f5b0e80e3e387
stamp_root=0:953aaba17e8930ad29b1df0f682db6645f209208e4386d8bf94f0264e1555ac9
stamp_deploy_value=200000000

pl=$(get_stamp_payload)

$CLI_PATH/tonos-cli --url net.ton.dev call $msig sendTransaction "{\"dest\":\"$stamp_root\",\"value\":$stamp_deploy_value,\"bounce\":\"true\",\"flags\":1,\"payload\":\"$pl\"}" --abi SafeMultisigWallet.abi.json --sign msig.keys.json

#$CLI_PATH/tonos-cli call $msig submitTransaction "{\"dest\":\"$serie_art2\",\"value\":\"200000000\",\"bounce\":\"true\",\"allBalance\":\"false\",\"payload\":\"$payload\"}" --sign msig.keys.json --abi SetcodeMultisigWallet.abi.json 

echo DONE
