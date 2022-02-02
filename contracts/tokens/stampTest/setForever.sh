#!/bin/bash
set -e

filename=ticketDebot
filenamesol=$filename.sol
filenameabi=$filename.abi.json
filenametvc=$filename.tvc
filenamekeys=$filename.keys.json

CLI_PATH=~/git/tonos-cli/target/release

function get_stamp_payload {
echo $($CLI_PATH/tonos-cli body --abi ../stamp/StampToken.abi.json setForever "{\"forever\":\"$forever_token\"}" | grep "body:" | cut -d ' ' -f 3)
}

stamp_token=0:0f801ad3529cf7d365310c39e8bf6895c4b594a8a048f485de8577ee3e624e68
forever_token=0:cb9ca76b305c8f49a8adc6dc86d4f1f7cd38b373da4f74fb7427d908ec102caa

msig=0:ab5f48c154f672d2f4c30c4473251e14a05199d1df1300263d8f5b0e80e3e387
value=300000000

pl=$(get_stamp_payload)

$CLI_PATH/tonos-cli --url net.ton.dev call $msig sendTransaction "{\"dest\":\"$stamp_token\",\"value\":$value,\"bounce\":\"true\",\"flags\":1,\"payload\":\"$pl\"}" --abi SafeMultisigWallet.abi.json --sign msig.keys.json

#$CLI_PATH/tonos-cli call $msig submitTransaction "{\"dest\":\"$serie_art2\",\"value\":\"200000000\",\"bounce\":\"true\",\"allBalance\":\"false\",\"payload\":\"$payload\"}" --sign msig.keys.json --abi SetcodeMultisigWallet.abi.json 

echo DONE
