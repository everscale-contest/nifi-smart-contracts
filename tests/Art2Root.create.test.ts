import config from '../configs/config'
import Art2Root from '../contracts/Art2Root'
import Art2RootData from '../contracts/tokens/art2/Art2Root'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import Art2Series from '../contracts/Art2Series'
import Art2SeriesData from '../contracts/tokens/art2/Art2Series'
import Art2Token from '../contracts/Art2Token'
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
    const art2Root: Art2Root = new Art2Root(kit, rootKeys)
    const art2Series: Art2Series = new Art2Series(kit, await art2Root.calculateAddress(), 0, rootKeys)
    const art2Token: Art2Token = new Art2Token(kit, await art2Root.calculateAddress(), await art2Series.calculateAddress(), 0, rootKeys)

    await giverContract.sendTransaction(await multisig.calculateAddress(), 10_000_000_000)
    await multisig.deploy([Ton.hex.x0(multisigKeys.public)], 1)

    await giverContract.sendTransaction(await art2Root.calculateAddress(), 10_000_000_000)
    await art2Root.deploy(
        '0:0000000000000000000000000000000000000000000000000000000000000001',
        1_000_000_000,
        100_000_000,
        Ton.hex.string('Art2'),
        Ton.hex.string('ART2')
    )

    expect(await art2Root.getManager()).toBe('0:0000000000000000000000000000000000000000000000000000000000000001')

    await multisig.callAnotherContract(
        await art2Root.calculateAddress(),
        1_000_000_000,
        true,
        0,
        Art2RootData.abi,
        'createSerie',
        {
            manager: await multisig.calculateAddress(),
            limit: 10,
            hash: hash
        },
        multisigKeys
    )

    expect((await art2Series.getInfo()).hash).toBe(hash)

    await multisig.callAnotherContract(
        await art2Series.calculateAddress(),
        1_000_000_000,
        true,
        0,
        Art2SeriesData.abi,
        'create',
        {
            manager: await multisig.calculateAddress(),
            managerUnlockTime: 0,
            creatorFees: 1
        },
        multisigKeys
    )
    expect((await art2Token.getArtInfo()).hash).toBe(hash)

    done()
}, 30000)