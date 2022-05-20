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
import BidRoot from '../../contracts/BidRoot'

async function run(): Promise<void> {
    TonClient.useBinaryLibrary(libNode)
    const kit: KitInterface = Ton.kit.create(config.net.deploy)
   /* const rootKeys: KeyPair = await TonKeysFile.createRandomIfNotExist(
        config.net.deploy.contracts.bidRoot.keyFile,
        kit.client
    )
    console.log(rootKeys.public)
    console.log(rootKeys.secret)*/
    const rootKeys: KeyPair =
    {"public":"a32b6119b77e79ee370e173a3383e517d2d235c796bd38198af22b6673300cb8",
        "secret":"5707985ddf6b95a2a11d8503dbc52fee5be330dbc0020023a1180f08aaaef843"}
    /*{"public":"327acc64d5ce7a9e1ac480461339605efb1d2a75c447179343e4f85745884eae",
        "secret":"b19ec2cf5845136a0564e7b9065efb18bd24ad0ae8209282d89642a9042e5b24"}*/
    /*{public: '3b4d32825953a5161f32fe973ae5bccb3f80900e58a38aeff26626100a6fab68',
    secret: '3093a3c342e4306b929fb5056c05bf038a29a0bdf5b414a5dd5f5c4e1c31e489'}*/
    const giverKeys: KeyPair = await TonKeysFile.createRandomIfNotExist(config.net.deploy.keys.giver, kit.client)
    const offerRoot: BidRoot = new BidRoot(kit, rootKeys)
    const giver: GiverV2 = new GiverV2(kit, giverKeys)

    await TerminalContractInfo.logNetwork(config.net.deploy)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('BidRoot', offerRoot, config.net.deploy.locale)
    await TerminalContractInfo.log()
    //process.exit()
    const balance: number = parseInt(await offerRoot.getBalance())
    if (balance === 0) {
        await TerminalContractInfo.log('SENDING...')
        await giver.sendTransaction(await offerRoot.calculateAddress(), config.net.deploy.contracts.bidRoot.giverDeposit)
        await offerRoot.waitForTransaction()
        await TerminalContractInfo.log(colors.green('SENT'))
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('BidRoot', offerRoot, config.net.deploy.locale)
        await TerminalContractInfo.log()
    }

    const canDeploy: boolean = await terminalDeploy(offerRoot)
    if (!canDeploy)
        process.exit()

    const offerRootConfig: any = config.net.deploy.contracts.bidRoot
    await offerRoot.deploy(
        offerRootConfig.manager,
        offerRootConfig.creationMinValue,
        offerRootConfig.creationFixIncome,
        Ton.hex.string(offerRootConfig.name),
        Ton.hex.string(offerRootConfig.symbol)
    )
    await TerminalContractInfo.log(colors.green('DEPLOYED'))
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('BidRoot', offerRoot, config.net.deploy.locale)
    await TerminalContractInfo.log()
    process.exit()
}
run().then()