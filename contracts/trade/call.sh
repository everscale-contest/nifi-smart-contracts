#!/bin/bash
set -e

filename=flexTip3TonDebot
filenamesol=$filename.sol
filenameabi=$filename.abi.json
filenametvc=$filename.tvc
filenamekeys=$filename.keys.json

CLI_PATH=~/git/tonos-cli/target/release

address=0:9f52250afe4b544bedadf33dae0b44674a6ea2bc04fa6fddcbd8e0f48d19bd2f
$CLI_PATH/tonos-cli call $address finish "{}"  --abi DirectAuction.abi.json

echo DONE
