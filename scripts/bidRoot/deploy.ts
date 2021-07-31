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
    )
    console.log(rootKeys.public)
    console.log(rootKeys.secret)*/
    const rootKeys: KeyPair = 
        {public: 'bb1080f7951262ebc58e6c0ad5c191c583e08a1f2456c7c0871ca8836322d4cd',
         secret: '4fa3037a5419e1d4742b758b6d5252c020d4197bf5ae59b386044ba8c0a3d867'}
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