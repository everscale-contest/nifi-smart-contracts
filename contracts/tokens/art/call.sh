#!/bin/bash
set -e

filename=flexTip3TonDebot
filenamesol=$filename.sol
filenameabi=$filename.abi.json
filenametvc=$filename.tvc
filenamekeys=$filename.keys.json

CLI_PATH=~/git/tonos-cli/target/release

address=0:63747659b8d4f55debfca8dfd2f3ef3cc686d81fdcd3fb4d04dc72d2ae53b320
$CLI_PATH/tonos-cli run $address getInfo "{}"  --abi ArtToken.abi.json

echo DONE
