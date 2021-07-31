import BidContract from './trade/Bid'
import {DecodedMessageBody, KeyPair} from '@tonclient/core/dist/modules'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'
import Contract from '../library/ton/base/Contract'

export default class BidToken extends Contract {
    public constructor(kit: KitInterface, root: string, id: number, keys: KeyPair) {
        super(kit, {
            abi: BidContract.abi,
            tvc: BidContract.tvc,
            initialData: {
                _root: root,
                _id: id
            },
            keys: keys
        })
    }

    public async finish(): Promise<void>  {
        await this._call('finish');
    }

    /***********
     * GETTERS *
     ***********/
    public async getInfo(): Promise<BidInfo> {
        const result: DecodedMessageBody = await this._run('getInfo')
        return result.value
    }
}

export interface BidInfo {
    endTime: string
    price: string
    token: string
    creator: string
    root: string
    id: string
}