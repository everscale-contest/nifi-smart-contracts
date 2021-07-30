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
    /*const rootKeys: KeyPair = await TonKeysFile.createRandomIfNotExist(
        config.net.deploy.contracts.bidRoot.keyFile,
        kit.client
    )*/
    const rootKeys: KeyPair = 
        {public: 'd8183cb2a9e774f1a383f82680d9447cd7203690a06f48472d91aa8e2d7a4118',
         secret: 'd46bedccb780e761f4ab26cf329f1a73f620bf0b75ee1c29c55a4acc08130ba5'}
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
        offerRootConfig.creationFee,
        offerRootConfig.creationAndStorageFee,
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