#!/bin/bash
set -e

cd ..
cd seal
tondev sol compile StampToken.sol
tondev sol compile StampRoot.sol

tondev js wrap StampToken.sol
tondev js wrap StampRoot.sol
cd ..

echo DONE
