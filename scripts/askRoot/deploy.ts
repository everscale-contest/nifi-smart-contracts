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
import AskRoot from '../../contracts/AskRoot'

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
    {public: '5c4e2691bd84acca584c8ebd158f3f6f91df5d12f6c8771a01a30b1d1fc836a2',
    secret: 'a265524169d2781e3aca21f84eb4182f87d2116291aebfb43b3caad4f4eae07e'}
    /*{public: 'bb1080f7951262ebc58e6c0ad5c191c583e08a1f2456c7c0871ca8836322d4cd',
    secret: '4fa3037a5419e1d4742b758b6d5252c020d4197bf5ae59b386044ba8c0a3d867'}*/
    /*{public: 'fade393f0ad3476a669c22939f266a8282ceb6cf03036defc02dd5568960478f',
    secret: 'b755fd9cef09646d679bb2b61a2c7ad960b194f8d3903d7842ecf075bc01e388'}
    /*{public: 'ccf79f4f7fbe92d7586c0ea99a1e0a332e413bc06e1223979129d9494e431413',
    secret: 'e76f170a9de82042be98d5794966e501d8a1acf8b5c361bfc7983cf21f05b7b7'}*/
    /*{public: '3b4d32825953a5161f32fe973ae5bccb3f80900e58a38aeff26626100a6fab68',
    secret: '3093a3c342e4306b929fb5056c05bf038a29a0bdf5b414a5dd5f5c4e1c31e489'}*/
    const giverKeys: KeyPair = await TonKeysFile.createRandomIfNotExist(config.net.deploy.keys.giver, kit.client)
    const askRoot: AskRoot = new AskRoot(kit, rootKeys)
    const giver: GiverV2 = new GiverV2(kit, giverKeys)

    await TerminalContractInfo.logNetwork(config.net.deploy)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('AskRoot', askRoot, config.net.deploy.locale)
    await TerminalContractInfo.log()
    //process.exit()
    const balance: number = parseInt(await askRoot.getBalance())
    if (balance === 0) {
        await TerminalContractInfo.log('SENDING...')
        await giver.sendTransaction(await askRoot.calculateAddress(), config.net.deploy.contracts.bidRoot.giverDeposit)
        await askRoot.waitForTransaction()
        await TerminalContractInfo.log(colors.green('SENT'))
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('AskRoot', askRoot, config.net.deploy.locale)
        await TerminalContractInfo.log()
    }

    const canDeploy: boolean = await terminalDeploy(askRoot)
    if (!canDeploy)
        process.exit()

    const offerRootConfig: any = config.net.deploy.contracts.bidRoot
    await askRoot.deploy(
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
    await TerminalContractInfo.logAccount('BidRoot', askRoot, config.net.deploy.locale)
    await TerminalContractInfo.log()
    process.exit()
}
run().then()