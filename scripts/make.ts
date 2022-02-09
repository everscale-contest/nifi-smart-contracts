import Make from '../library/scripts/make/Make'

const make: Make = new Make({
    compile: [
        //'contracts/tokens/random/RandomRoot',
        //'contracts/tokens/random/RandomToken',

        'contracts/tokens/art/ArtRoot',
        'contracts/tokens/art/ArtToken',

        'contracts/tokens/art2/Art2Root',
        'contracts/tokens/art2/Art2Token',
        'contracts/tokens/art2/Art2Series',


  /*      'contracts/tokens/collection/CollectionToken',
        'contracts/tokens/collection/Collection',
        'contracts/tokens/collection/CollectionRoot',*/

        //'contracts/tokens/ticket/TicketToken',
        //'contracts/tokens/ticket/TicketRoot',

        'contracts/trade/DirectAuctionRoot',
        'contracts/trade/DirectAuction',

        'contracts/trade/BidRoot',
        'contracts/trade/Bid',

        'contracts/trade/AskRoot',
        'contracts/trade/Ask'
    ],
    wrap: [
        /*'library/ton/contracts/SafeMultisigWallet/SafeMultisigWallet',
        'library/ton/contracts/GiverV2/GiverV2'*/
    ],
    //compiler: '0.47.0',
    //linker: '0.13.88'
    compiler: '0.47.0',
    linker: '0.14.27'
})
make.run().then()