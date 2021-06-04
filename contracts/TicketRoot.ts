import TicketRootContracts from './tokens/ticket/TicketRoot'
import TicketContract from './tokens/ticket/TicketToken'
import {DecodedMessageBody, KeyPair} from '@tonclient/core/dist/modules'
import Contract from '../library/ton/base/Contract'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'

export default class OfferRoot extends Contract {
    public constructor(kit: KitInterface, keys: KeyPair) {
        super(kit, {
            abi: TicketRootContracts.abi,
            tvc: TicketRootContracts.tvc,
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
        limit: number,
        freezingTimeStart:number,
        freezingTimeEnd:number,
        name: string,
        symbol: string
    ): Promise<boolean> {
        return await this._deploy({
            manager: manager,
            creationMinValue: creationMinValue,
            creationFee: creationFee,
            limit: limit,
            freezingTimeStart:freezingTimeStart,
            freezingTimeEnd: freezingTimeEnd,
            name: name,
            symbol: symbol,
            tokenCode: TicketContract.code
        })
    }



    /***********
     * GETTERS *
     ***********/
  /*  public async getManager(): Promise<string> {
        const result: DecodedMessageBody = await this._run('getManager')
        return result.value['manager']
    }

    public async getCreationFee(): Promise<CreationFee> {
        const result: DecodedMessageBody = await this._run('getCreationFee')
        return result.value
    }*/
}

/*export interface CreationFee {
    minValue: string
    uint128: string
}*/