#!/bin/bash
set -e

filename=flexTip3TonDebot
filenamesol=$filename.sol
filenameabi=$filename.abi.json
filenametvc=$filename.tvc
filenamekeys=$filename.keys.json

CLI_PATH=~/git/tonos-cli/target/release

address=0:39782032eb8c500b69ae9fc09add6eb224df307e397f6542cc176bc06a030d99
$CLI_PATH/tonos-cli run $address getInfo "{}"  --abi ArtToken.abi.json

echo DONE
