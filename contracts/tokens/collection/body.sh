#!/bin/bash
set -e
filename=calc
filenamesol=$filename.sol
filenameabi=$filename.abi.json
filenametvc=$filename.tvc
filenamekeys=$filename.keys.json

CLI_PATH=~/git/tonos-cli/target/release
NET_GIVER_PATH=~/givers/net_giver
LINKER_PATH=~/git/TVM-linker/tvm_linker/target/release

body=te6ccgEBAQEADgAAGGO32HMAAAAAAAAAAQ==

$CLI_PATH/tonos-cli decode body $body --abi CollectionRoot.abi.json
#./tonos-cli decode body <base64_body> --abi efewfew.abi.json

echo DONE


