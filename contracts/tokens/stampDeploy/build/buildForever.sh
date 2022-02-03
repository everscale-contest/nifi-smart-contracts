#!/bin/bash
set -e

cd ..
cd ..
cd forever
tondev sol compile ForeverToken.sol
tondev sol compile ForeverRoot.sol

tondev js wrap ForeverToken.sol
tondev js wrap ForeverRoot.sol

echo forever built
