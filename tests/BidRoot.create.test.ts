import config from '../configs/config'
import BidRoot from '../contracts/BidRoot'
import {KeyPair} from '@tonclient/core/dist/modules'
import bidRootData from '../contracts/trade/BidRoot'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import BidToken from '../contracts/Bid'
import {Ton} from '../library'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'
import SafeMultisigWallet from '../library/ton/contracts/SafeMultisigWallet'
import TonKeysFile from '../library/ton/utils/node/TonKeysFile'
import GiverV2 from '../library/ton/contracts/GiverV2'

TonClient.useBinaryLibrary(libNode)
const kit: KitInterface = Ton.kit.create(config.net.test)

it('Valid', async done => {
    const hash: string = '0x0000000000000000000000000000000000000000000000000000000012345678'

    const multisigKeys: KeyPair = await Ton.keys.random(kit.client)
    const multisig: SafeMultisigWallet = new SafeMultisigWallet(kit, multisigKeys)
    const giverKeys: KeyPair = TonKeysFile.read(config.net.test.keys.giver)
    const giverContract: GiverV2 = new GiverV2(kit, giverKeys)
    const rootKeys: KeyPair = await Ton.keys.random(kit.client)
    const bidRoot: BidRoot = new BidRoot(kit, rootKeys)
    const bidToken: BidToken = new BidToken(kit, await bidRoot.calculateAddress(), 1, rootKeys)

    await giverContract.sendTransaction(await multisig.calculateAddress(), 10_000_000_000)
    await multisig.deploy([Ton.hex.x0(multisigKeys.public)], 1)

    console.log('bidRoot',await bidRoot.calculateAddress())
    console.log('bidToken',await bidToken.calculateAddress())

    await giverContract.sendTransaction(await bidRoot.calculateAddress(), 10_000_000_000)
    await bidRoot.deploy(
        '0:0000000000000000000000000000000000000000000000000000000000000001',
        1_000_000_000,
        100_000_000,
        100_000_000,
        Ton.hex.string('Bid'),
        Ton.hex.string('BID')
    )

    await multisig.callAnotherContract(
        await bidRoot.calculateAddress(),
        1_000_000_000,
        true,
        0,
        bidRootData.abi,
        'create',
        {
            creator:  await multisig.calculateAddress(),
            token: '0:0000000000000000000000000000000000000000000000000000000000012345',
            price: 100_000_000,
            endTime: Math.round(new Date().getTime() / 1000) + 120,
        },
        multisigKeys
    )
    await bidToken.waitForTransaction()
    

    expect((await bidToken.getInfo()).token).toBe('0:0000000000000000000000000000000000000000000000000000000000012345')
    //expect(1).toBe(1)

    done()
}, 30000)