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
import ArtRoot from '../../contracts/ArtRoot'

async function run(): Promise<void> {
    TonClient.useBinaryLibrary(libNode)
    const kit: KitInterface = Ton.kit.create(config.net.deploy)
   /* const artRootKeys: KeyPair = await TonKeysFile.createRandomIfNotExist(
        config.net.deploy.contracts.artRoot.keyFile,
        kit.client
    )
    console.log(artRootKeys.public);
    console.log(artRootKeys.secret);
    process.exit()*/
    const artRootKeys: KeyPair =
    {"public":"a32b6119b77e79ee370e173a3383e517d2d235c796bd38198af22b6673300cb8",
        "secret":"5707985ddf6b95a2a11d8503dbc52fee5be330dbc0020023a1180f08aaaef843"}
    /*{"public":"327acc64d5ce7a9e1ac480461339605efb1d2a75c447179343e4f85745884eae",
    "secret":"b19ec2cf5845136a0564e7b9065efb18bd24ad0ae8209282d89642a9042e5b24"}*/
      /*  {public: '3b4d32825953a5161f32fe973ae5bccb3f80900e58a38aeff26626100a6fab68',
         secret: '3093a3c342e4306b929fb5056c05bf038a29a0bdf5b414a5dd5f5c4e1c31e489'}*/
         /**onst artRootKeys: KeyPair =
        {public: '34f0b17eac31374b180769474817e01e45393442e710ffadfd7888962d196830',
         secret: 'bd320c12ff5a269d21db02c16db6e6c3663641d4fb5444d570ed11329cd83fc8'} */
    const giverKeys: KeyPair = await TonKeysFile.createRandomIfNotExist(config.net.deploy.keys.giver, kit.client)
    const artRoot: ArtRoot = new ArtRoot(kit, artRootKeys)
    const giver: GiverV2 = new GiverV2(kit, giverKeys)

    await TerminalContractInfo.logNetwork(config.net.deploy)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('ArtRoot', artRoot, config.net.deploy.locale)
    await TerminalContractInfo.log()
    //process.exit()
    const balance: number = parseInt(await artRoot.getBalance())
    if (balance === 0) {
        await TerminalContractInfo.log('SENDING...')
        await giver.sendTransaction(await artRoot.calculateAddress(), config.net.deploy.contracts.artRoot.giverDeposit)
        await artRoot.waitForTransaction()
        await TerminalContractInfo.log(colors.green('SENT'))
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('ArtRoot', artRoot, config.net.deploy.locale)
        await TerminalContractInfo.log()
    }

    const canDeploy: boolean = await terminalDeploy(artRoot)
    if (!canDeploy)
        process.exit()

    const artRootConfig: any = config.net.deploy.contracts.artRoot
    await artRoot.deploy(
        artRootConfig.manager,
        artRootConfig.minCreationFee,
        artRootConfig.creationTopup,
        Ton.hex.string(artRootConfig.name),
        Ton.hex.string(artRootConfig.symbol)
    )
    await TerminalContractInfo.log(colors.green('DEPLOYED'))
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('ArtRoot', artRoot, config.net.deploy.locale)
    await TerminalContractInfo.log()
    process.exit()
}
run().then()