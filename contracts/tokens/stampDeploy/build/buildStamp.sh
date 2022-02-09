#!/bin/bash
set -e

cd ..
cd ..
cd stamp
tondev sol compile StampToken.sol
tondev sol compile StampRoot.sol

tondev js wrap StampToken.sol
tondev js wrap StampRoot.sol

echo stamp built
