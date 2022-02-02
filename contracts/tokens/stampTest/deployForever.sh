#!/bin/bash
set -e

filename=ticketDebot
filenamesol=$filename.sol
filenameabi=$filename.abi.json
filenametvc=$filename.tvc
filenamekeys=$filename.keys.json

CLI_PATH=~/git/tonos-cli/target/release

function get_payload {
echo $($CLI_PATH/tonos-cli body --abi ../forever/ForeverRoot.abi.json create "{\"owner\":\"$msig\",\"manager\":\"$msig\",\"managerUnlockTime\":\"0\",\"creator\":\"$msig\",\"creatorFees\":\"1000\",\"hash\":\"0x55555\"}" | grep "body:" | cut -d ' ' -f 3)
}

msig=0:ab5f48c154f672d2f4c30c4473251e14a05199d1df1300263d8f5b0e80e3e387
forever_root=0:cd1aba8a50f8ee3983deeb4cda8100870b9953c0d1b070bd55f832620a16768f
forever_deploy_value=200000000

pl=$(get_payload)

$CLI_PATH/tonos-cli --url net.ton.dev call $msig sendTransaction "{\"dest\":\"$forever_root\",\"value\":$forever_deploy_value,\"bounce\":\"true\",\"flags\":1,\"payload\":\"$pl\"}" --abi SafeMultisigWallet.abi.json --sign msig.keys.json

#$CLI_PATH/tonos-cli call $msig submitTransaction "{\"dest\":\"$serie_art2\",\"value\":\"200000000\",\"bounce\":\"true\",\"allBalance\":\"false\",\"payload\":\"$payload\"}" --sign msig.keys.json --abi SetcodeMultisigWallet.abi.json 

echo DONE
