import bidRootData from '../contracts/trade/BidRoot'
import bidData from '../contracts/trade/Bid'
import BidRoot from '../contracts/BidRoot'
import BidToken from '../contracts/Bid'
import config from '../configs/config'
import ArtRoot from '../contracts/ArtRoot'
import {KeyPair} from '@tonclient/core/dist/modules'
import artTokenData from '../contracts/tokens/art/ArtToken'
import artRootData from '../contracts/tokens/art/ArtRoot'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import ArtToken from '../contracts/ArtToken'
import {Ton} from '../library'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'
import SafeMultisigWallet from '../library/ton/contracts/SafeMultisigWallet'
import TonKeysFile from '../library/ton/utils/node/TonKeysFile'
import GiverV2 from '../library/ton/contracts/GiverV2'

TonClient.useBinaryLibrary(libNode)
const kit: KitInterface = Ton.kit.create(config.net.test)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



it('Valid', async done => {
    const newHash: string = '0x0000000000000000000000000000000000000000000000000000001234567890'

    const tip3Seller_multisigKeys: KeyPair = await Ton.keys.random(kit.client)
    const tip3Seller_multisig: SafeMultisigWallet = new SafeMultisigWallet(kit, tip3Seller_multisigKeys)
    const giverKeys: KeyPair = TonKeysFile.read(config.net.test.keys.giver)
    const giverContract: GiverV2 = new GiverV2(kit, giverKeys)
    const rootKeys: KeyPair = await Ton.keys.random(kit.client)
    const artRoot: ArtRoot = new ArtRoot(kit, rootKeys)
    const artToken: ArtToken = new ArtToken(kit, await artRoot.calculateAddress(), 0, rootKeys)

    await giverContract.sendTransaction(await tip3Seller_multisig.calculateAddress(), 10_000_000_000)
    await tip3Seller_multisig.deploy([Ton.hex.x0(tip3Seller_multisigKeys.public)], 1)
    //deploy ArtRoot
    await giverContract.sendTransaction(await artRoot.calculateAddress(), 10_000_000_000)
    await artRoot.deploy(
        '0:0000000000000000000000000000000000000000000000000000000000000001',
        1_000_000_000,
        100_000_000,
        Ton.hex.string('Art'),
        Ton.hex.string('ART')
    )
    //create tip3 token
    await tip3Seller_multisig.callAnotherContract(
        await artRoot.calculateAddress(),
        1_000_000_000,
        true,
        0,
        artRootData.abi,
        'create',
        {
            owner: await tip3Seller_multisig.calculateAddress(),
            manager: '0:0000000000000000000000000000000000000000000000000000000000000001',
            managerUnlockTime: 0,
            creator: await tip3Seller_multisig.calculateAddress(),
            creatorFees: 5000,
            hash: '0x0000000000000000000000000000000000000000000000000000001234567890'
        },
        tip3Seller_multisigKeys
    )
    await artToken.waitForTransaction()
    expect((await artToken.getArtInfo()).hash).toBe(newHash)
    //set hash to token
    /*await tip3Seller_multisig.callAnotherContract(
        await artToken.calculateAddress(),
        1_000_000_000,
        true,
        0,
        artTokenData.abi,
        'addHash',
        {
            hash: newHash
        },
        tip3Seller_multisigKeys
    )
    await artToken.waitForTransaction()
    expect((await artToken.getArtInfo()).hash).toBe(newHash)*/
    //^tip3 token deployed
    //create buyer 1
    const tip3Buyer1_multisigKeys: KeyPair = await Ton.keys.random(kit.client)
    const tip3Buyer1_multisig: SafeMultisigWallet = new SafeMultisigWallet(kit, tip3Buyer1_multisigKeys)
    await giverContract.sendTransaction(await tip3Buyer1_multisig.calculateAddress(), 10_000_000_000)
    await tip3Buyer1_multisig.deploy([Ton.hex.x0(tip3Buyer1_multisigKeys.public)], 1)

    const bidRoot: BidRoot = new BidRoot(kit, rootKeys)
    const bid: BidToken = new BidToken(kit, await bidRoot.calculateAddress(), 1, rootKeys)
    const bid_address = await bid.calculateAddress();
    console.log('bidRoot',await bidRoot.calculateAddress());
    console.log('bid_address',bid_address);
    console.log('tip3Seller_multisig',await tip3Seller_multisig.calculateAddress());    
    console.log('artToken',await artToken.calculateAddress());
    console.log('tip3Buyer1_multisig',await tip3Buyer1_multisig.calculateAddress());   
    //deploy offer root
    await giverContract.sendTransaction(await bidRoot.calculateAddress(), 10_000_000_000)
    await bidRoot.deploy(
        '0:0000000000000000000000000000000000000000000000000000000000000001',
        1_000_000_000,
        100_000_000,
        100_000_000,
        Ton.hex.string('Bid'),
        Ton.hex.string('BID')
    )
    //deploy offer
    await tip3Buyer1_multisig.callAnotherContract(
        await bidRoot.calculateAddress(),
        1_500_000_000,
        true,
        0,
        bidRootData.abi,
        'create',
        {
            creator:  await tip3Buyer1_multisig.calculateAddress(),
            token: await artToken.calculateAddress(),
            price: 1_000_000_000,
            endTime: Math.round(new Date().getTime() / 1000) + 120,
        },
        tip3Buyer1_multisigKeys
    )
    await bid.waitForTransaction()

    expect((await bid.getInfo()).creator).toBe(await tip3Buyer1_multisig.calculateAddress())

    //accept transactoion
    //lock manager
    await tip3Seller_multisig.callAnotherContract(
        await artToken.calculateAddress(),
        1_000_000_000,
        true,
        0,
        artTokenData.abi,
        'lockManager',
        {
            manager: bid_address,
            unlockTime: Math.round(new Date().getTime() / 1000) + 5000
        },
        tip3Seller_multisigKeys
    )
    await artToken.waitForTransaction()

    expect((await artToken.getInfo()).manager).toBe(bid_address)
    expect((await artToken.getInfo()).owner).toBe(await tip3Seller_multisig.calculateAddress())

    console.log('bid balance', await bid.getBalance());
    //accept
    await tip3Seller_multisig.callAnotherContract(
        bid_address,
        510_000_000,
        true,
        0,
        bidData.abi,
        'acceptBid',
        {
        },
        tip3Seller_multisigKeys
    )
    await bid.waitForTransaction()
    await artToken.waitForTransaction()
    await bid.waitForTransaction()

    await sleep(5000);

    //expect((await artToken.getInfo()).manager).toBe(offer_address)
    expect((await artToken.getInfo()).owner).toBe(await tip3Buyer1_multisig.calculateAddress())

    done()
}, 300000)