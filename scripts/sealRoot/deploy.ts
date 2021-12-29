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
import SealRoot from '../../contracts/SealRoot'

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
    {public: '5c4e2691bd84acca584c8ebd158f3f6f91df5d12f6c8771a01a30b1d1fc836a2',
    secret: 'a265524169d2781e3aca21f84eb4182f87d2116291aebfb43b3caad4f4eae07e'}
    /*{public: '3b4d32825953a5161f32fe973ae5bccb3f80900e58a38aeff26626100a6fab68',
    secret: '3093a3c342e4306b929fb5056c05bf038a29a0bdf5b414a5dd5f5c4e1c31e489'}*/
    const giverKeys: KeyPair = await TonKeysFile.createRandomIfNotExist(config.net.deploy.keys.giver, kit.client)
    const sealRoot: SealRoot = new SealRoot(kit, rootKeys)
    const giver: GiverV2 = new GiverV2(kit, giverKeys)

    await TerminalContractInfo.logNetwork(config.net.deploy)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('SealRoot', sealRoot, config.net.deploy.locale)
    await TerminalContractInfo.log()
    //process.exit()
    const balance: number = parseInt(await sealRoot.getBalance())
    if (balance === 0) {
        await TerminalContractInfo.log('SENDING...')
        await giver.sendTransaction(await sealRoot.calculateAddress(), config.net.deploy.contracts.bidRoot.giverDeposit)
        await sealRoot.waitForTransaction()
        await TerminalContractInfo.log(colors.green('SENT'))
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('SealRoot', sealRoot, config.net.deploy.locale)
        await TerminalContractInfo.log()
    }

    const canDeploy: boolean = await terminalDeploy(sealRoot)
    if (!canDeploy)
        process.exit()

    const sealRootConfig: any = config.net.deploy.contracts.sealRoot
    await sealRoot.deploy(
        sealRootConfig.manager,
        sealRootConfig.creationMinValue,
        sealRootConfig.creationFee,
        sealRootConfig.name,
        sealRootConfig.symbol
    )
    await TerminalContractInfo.log(colors.green('DEPLOYED'))
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('SealRoot', sealRoot, config.net.deploy.locale)
    await TerminalContractInfo.log()
    process.exit()
}
run().then()