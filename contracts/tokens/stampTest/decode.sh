#!/bin/bash
set -e
CLI_PATH=~/git/tonos-cli/target/release

body="te6ccgEBAQEAMQAAXSd5xeMAAAAAAAAAAYAZQBLZD6z1rkxpTrHt3M/JuK6JmaZpipyA+OuS0bB2qGBQ"
$CLI_PATH/tonos-cli decode body $body --abi ../stamp/StampToken.abi.json

echo DONE


