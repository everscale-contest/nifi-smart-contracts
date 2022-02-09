import {SealRootContract} from './tokens/seal/SealRootContract'
import {SealTokenContract} from './tokens/seal/SealTokenContract'
import {DecodedMessageBody, KeyPair} from '@tonclient/core/dist/modules'
import Contract from '../library/ton/base/Contract'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'

export default class StampRoot extends Contract {

    public constructor(kit: KitInterface, keys: KeyPair) {
        super(kit, {
            abi: SealRootContract.abi,
            tvc: SealRootContract.tvc,
            initialData: {},
            keys: keys
        })
    }



    /**********
     * DEPLOY *
     **********/
    public async deploy(
        manager: string,
        creationMinValue: number,
        creationFee: number,
        name: string,
        symbol: string
    ): Promise<boolean> {
        return await this._deploy({
            manager: manager,
            creationMinValue: creationMinValue,
            creationFee: creationFee,
            name: name,
            symbol: symbol,
            tokenCode: SealTokenContract.code
        })
    }

}
