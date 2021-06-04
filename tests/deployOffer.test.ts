import offerRootData from '../contracts/trade/OfferRoot'
import offerData from '../contracts/trade/Offer'
import OfferRoot from '../contracts/OfferRoot'
import Offer from '../contracts/Offer'
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
    const giverKeys: KeyPair = TonKeysFile.read(config.net.test.keys.giver)
    const giverContract: GiverV2 = new GiverV2(kit, giverKeys)
    //console.log(await giverContract.calculateAddress())

    //const tip3Seller_multisigKeys: KeyPair = await Ton.keys.random(kit.client)
    const tip3Seller_multisigKeys: KeyPair = 
        {public: '2f9b6c5877372f51cde01462dfb26bc24c6dd5d7f4165e2df406b8c8f75bfac9',
         secret: '518e201a64e748c80d706f32e0f9ba09c996acaf532c6bf43ad95fa62584b5ff'}
    //console.log('tip3Seller_multisigKeys '+tip3Seller_multisigKeys.public+"\n secret "+tip3Seller_multisigKeys.secret)
    const tip3Seller_multisig: SafeMultisigWallet = new SafeMultisigWallet(kit, tip3Seller_multisigKeys)
    console.log('tip3Seller_multisig '+await tip3Seller_multisig.calculateAddress());
    //await giverContract.sendTransaction(await tip3Seller_multisig.calculateAddress(), 5_000_000_000)
    //await tip3Seller_multisig.deploy([Ton.hex.x0(tip3Seller_multisigKeys.public)], 1)

    /*const rootKeys: KeyPair = await Ton.keys.random(kit.client)
    const offerRoot: OfferRoot = new OfferRoot(kit, rootKeys)
    console.log('offerRoot '+await offerRoot.calculateAddress());

    await giverContract.sendTransaction(await offerRoot.calculateAddress(), 500_000_000)
    await offerRoot.deploy(
        '0:0000000000000000000000000000000000000000000000000000000000000001',
        100_000_000,
        100_000_000,
        100_000_000,
        Ton.hex.string('Offer'),
        Ton.hex.string('OFFER')
    )*/

     //create art token
     /*await tip3Seller_multisig.callAnotherContract(
        '0:dc9795e263c5dfe7ef91f311dcc432ea83e2c083ec59dc5deae9cfda566b9032',
        550_000_000,
        true,
        0,
        artRootData.abi,
        'create',
        {
            owner: await tip3Seller_multisig.calculateAddress(),
            manager: '0:0000000000000000000000000000000000000000000000000000000000000001',
            managerUnlockTime: 0,
            creator: await tip3Seller_multisig.calculateAddress(),
            creatorFees: 0,
            hash: '0x1100000000000000000000000000000000000000000000000000000000012345'
        },
        tip3Seller_multisigKeys
    )*/
    //art 0:d6f97984fbb87cba24d7417c32b7046b07b1e1a592cd1f5c9bc0840239b2bc37
    //art 0:9f8730fc11294e6139320b7386f17e0eed6bf3f3407770aab8bfea632b26d968
    //art 0:2ba1a257710667fb7aacf856ea521459fd8c86659174f1297b7199f4da867647

    const tip3Buyer1_multisigKeys: KeyPair = 
        {public: '2d63aa848a4ddef7369288ab8552d745bb2355c29735c3eb21e2086b473e5ddc',
         secret: '578eb00d401b10fec61f3f89320137bf820cbab60af33de09e9e5d22ac3676be'}
    const tip3Buyer1_multisig: SafeMultisigWallet = new SafeMultisigWallet(kit, tip3Buyer1_multisigKeys)
    //await giverContract.sendTransaction(await tip3Buyer1_multisig.calculateAddress(), 10_000_000_000)
    //await tip3Buyer1_multisig.deploy([Ton.hex.x0(tip3Buyer1_multisigKeys.public)], 1)
    console.log('tip3Buyer1_multisig '+await tip3Buyer1_multisig.calculateAddress());
    //0:bb968aa72a0ca24cd76d350b3b10ad7276d3207e69ce3b478bf6752847e0c08b

    /*await tip3Buyer1_multisig.callAnotherContract(
        '0:6bf26ff3e97f327b227223d2e1686409a50b3066697aab931c92a54b840a183c',
        2_500_000_000,
        true,
        0,
        offerRootData.abi,
        'create',
        {
            creator:  await tip3Buyer1_multisig.calculateAddress(),
            token: '0:2ba1a257710667fb7aacf856ea521459fd8c86659174f1297b7199f4da867647',
            price: 2_000_000_000,
            endTime: Math.round(new Date().getTime() / 1000) + 36000,
        },
        tip3Buyer1_multisigKeys
    )*/

     //accept transactoion
    //lock manager
    /*await tip3Seller_multisig.callAnotherContract(
        '0:2ba1a257710667fb7aacf856ea521459fd8c86659174f1297b7199f4da867647',
        200_000_000,
        true,
        0,
        artTokenData.abi,
        'lockManager',
        {
            manager: '0:fe29112f40461b30720acfb72be0f83e86b655866b1b774320d85f7b90f8b654',
            unlockTime: Math.round(new Date().getTime() / 1000) + 36000 + 50000
        },
        tip3Seller_multisigKeys
    )*/


    //accept
    await tip3Seller_multisig.callAnotherContract(
        '0:fe29112f40461b30720acfb72be0f83e86b655866b1b774320d85f7b90f8b654',
        550_000_000,
        true,
        0,
        offerData.abi,
        'acceptOffer',
        {
        },
        tip3Seller_multisigKeys
    )

    




    expect(1).toBe(1);

    done()
}, 300000)