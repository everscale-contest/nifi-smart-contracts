import Art2SeriesContract from './tokens/art2/Art2Series'
import {DecodedMessageBody, KeyPair} from '@tonclient/core/dist/modules'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'
import Contract from '../library/ton/base/Contract'

export default class Art2Series extends Contract {
    public constructor(kit: KitInterface, root: string, id: number, keys: KeyPair) {
        super(kit, {
            abi: Art2SeriesContract.abi,
            tvc: Art2SeriesContract.tvc,
            initialData: {
                _root: root,
                _id: id
            },
            keys: keys
        })
    }

    /***********
     * GETTERS *
     ***********/
    public async getInfo(): Promise<Info> {
        const result: DecodedMessageBody = await this._run('getInfo')
        return result.value
    }

    public async getTokenAddress(value:number): Promise<string> {
        const result: DecodedMessageBody = await this._run('getTokenAddress',{id:value})
        return result.value['addr']
    }

}

export interface Info {
    name: string
    symbol: string
    totalSupply: string
    limit: string
    hash: string
}
