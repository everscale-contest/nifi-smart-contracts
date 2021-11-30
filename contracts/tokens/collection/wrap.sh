#!/bin/bash
set -e

tondev js wrap CollectionRoot.abi.json 
tondev js wrap Collection.abi.json
tondev js wrap CollectionToken.abi.json

echo DONE


