import Art2RootContracts from './tokens/art2/1/Art2Root'
import Art2TokenContract from './tokens/art2/1/Art2Token'
import Art2SeriesContract from './tokens/art2/1/Art2Series'
import {DecodedMessageBody, KeyPair} from '@tonclient/core/dist/modules'
import Contract from '../library/ton/base/Contract'
import KitInterface from '../../library/ton/utils/interfaces/KitInterface'

export default class Art2Root extends Contract {
    public constructor(kit: KitInterface, keys: KeyPair) {
        super(kit, {
            abi: Art2RootContracts.abi,
            tvc: Art2RootContracts.tvc,
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
        mintTopup: number,
        name: string,
        symbol: string
    ): Promise<boolean> {
        return await this._deploy({
            manager: manager,
            minCreationFee: minCreationFee,
            creationTopup: creationTopup,
            mintTopup: mintTopup,
            name: name,
            symbol: symbol,
            seriesCode: Art2SeriesContract.code,
            tokenCode: Art2TokenContract.code
        })
    }


    /***********
     * GETTERS *
     ***********/
    public async getManager(): Promise<string> {
        const result: DecodedMessageBody = await this._run('getManager')
        return result.value['value0']
    }

    public async getCreationFee(): Promise<CreationFee> {
        const result: DecodedMessageBody = await this._run('getCreationFee')
        return result.value
    }

    public async getSeriesAddress(value:number): Promise<string> {
        const result: DecodedMessageBody = await this._run('getSeriesAddress',{id:value})
        return result.value['addr']
    }

}

export interface CreationFee {
    minValue: string
    uint128: string
}