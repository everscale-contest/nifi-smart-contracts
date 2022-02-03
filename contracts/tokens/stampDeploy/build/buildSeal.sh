#!/bin/bash
set -e

cd ..
cd ..
cd seal
tondev sol compile SealToken.sol
tondev sol compile SealRoot.sol

tondev js wrap SealToken.sol
tondev js wrap SealRoot.sol

echo seal built
