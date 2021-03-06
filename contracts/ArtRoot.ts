import ArtRootContracts from './tokens/art/1/ArtRoot'
import ArtTokenContract from './tokens/art/1/ArtToken'
import {DecodedMessageBody, KeyPair} from '@tonclient/core/dist/modules'
import Contract from '../library/ton/base/Contract'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'

export default class ArtRoot extends Contract {
    public constructor(kit: KitInterface, keys: KeyPair) {
        super(kit, {
            abi: ArtRootContracts.abi,
            tvc: ArtRootContracts.tvc,
            initialData: {},
            keys: keys
        })
    }



    /**********
     * DEPLOY *
     **********/
    public async deploy(
        manager: string,
        minCreationFee: number,
        creationTopup: number,
        name: string,
        symbol: string
    ): Promise<boolean> {
        return await this._deploy({
            manager: manager,
            minCreationFee: minCreationFee,
            creationTopup: creationTopup,
            name: name,
            symbol: symbol,
            tokenCode: ArtTokenContract.code
        })
    }



    /***********
     * GETTERS *
     ***********/
    public async getManager(): Promise<string> {
        const result: DecodedMessageBody = await this._run('getManager')
        return result.value['manager']
    }

    public async getCreationFee(): Promise<CreationFee> {
        const result: DecodedMessageBody = await this._run('getCreationFee')
        return result.value
    }
}

export interface CreationFee {
    minValue: string
    uint128: string
}