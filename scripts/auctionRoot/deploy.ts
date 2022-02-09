import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import KitInterface from '../../library/ton/utils/interfaces/KitInterface'
import Ton from '../../library/ton/utils/Ton'
import {KeyPair} from '@tonclient/core/dist/modules'
import TonKeysFile from '../../library/ton/utils/node/TonKeysFile'
import TerminalContractInfo from '../../library/scripts/base/TerminalContractInfo'
import terminalDeploy from '../../library/scripts/base/functions/terminalDeploy'
import colors from 'colors'
import config from '../../configs/config'
import GiverV2 from '../../library/ton/contracts/GiverV2'
import AuctionRoot from '../../contracts/AuctionRoot'

async function run(): Promise<void> {
    TonClient.useBinaryLibrary(libNode)
    const kit: KitInterface = Ton.kit.create(config.net.deploy)
    /*const rootKeys: KeyPair = await TonKeysFile.createRandomIfNotExist(
        config.net.deploy.contracts.auctionRoot.keyFile,
        kit.client
    )*/
    /*const rootKeys: KeyPair =
        {public: '2d63aa848a4ddef7369288ab8552d745bb2355c29735c3eb21e2086b473e5ddc',
         secret: '578eb00d401b10fec61f3f89320137bf820cbab60af33de09e9e5d22ac3676be'}*/
    const rootKeys: KeyPair =
    {"public":"a32b6119b77e79ee370e173a3383e517d2d235c796bd38198af22b6673300cb8",
        "secret":"5707985ddf6b95a2a11d8503dbc52fee5be330dbc0020023a1180f08aaaef843"}
    /*{"public":"327acc64d5ce7a9e1ac480461339605efb1d2a75c447179343e4f85745884eae",
        "secret":"b19ec2cf5845136a0564e7b9065efb18bd24ad0ae8209282d89642a9042e5b24"}*/
    /*{public: '3b4d32825953a5161f32fe973ae5bccb3f80900e58a38aeff26626100a6fab68',
    secret: '3093a3c342e4306b929fb5056c05bf038a29a0bdf5b414a5dd5f5c4e1c31e489'}*/
    const giverKeys: KeyPair = await TonKeysFile.createRandomIfNotExist(config.net.deploy.keys.giver, kit.client)
    const auctionRoot: AuctionRoot = new AuctionRoot(kit, rootKeys)
    const giver: GiverV2 = new GiverV2(kit, giverKeys)

    await TerminalContractInfo.logNetwork(config.net.deploy)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('AuctionRoot', auctionRoot, config.net.deploy.locale)
    await TerminalContractInfo.log()
    //process.exit()
    const balance: number = parseInt(await auctionRoot.getBalance())
    if (balance === 0) {
        await TerminalContractInfo.log('SENDING...')
        await giver.sendTransaction(await auctionRoot.calculateAddress(), config.net.deploy.contracts.auctionRoot.giverDeposit)
        await auctionRoot.waitForTransaction()
        await TerminalContractInfo.log(colors.green('SENT'))
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('AuctionRoot', auctionRoot, config.net.deploy.locale)
        await TerminalContractInfo.log()
    }

    const canDeploy: boolean = await terminalDeploy(auctionRoot)
    if (!canDeploy)
        process.exit()

    const auctionRootConfig: any = config.net.deploy.contracts.auctionRoot
    await auctionRoot.deploy(
        auctionRootConfig.manager,
        auctionRootConfig.creationMinValue,
        auctionRootConfig.creationFee,
        Ton.hex.string(auctionRootConfig.name),
        Ton.hex.string(auctionRootConfig.symbol)
    )
    await TerminalContractInfo.log(colors.green('DEPLOYED'))
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('AuctionRoot', auctionRoot, config.net.deploy.locale)
    await TerminalContractInfo.log()
    process.exit()
}
run().then()