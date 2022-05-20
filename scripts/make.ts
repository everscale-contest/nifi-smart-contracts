import Make from '../library/scripts/make/Make'

const make: Make = new Make({
    compile: [
        //'contracts/tokens/random/RandomRoot',
        //'contracts/tokens/random/RandomToken',

        'contracts/tokens/art/1/ArtRoot',
        'contracts/tokens/art/1/ArtToken',

        'contracts/tokens/art2/1/Art2Root',
        'contracts/tokens/art2/1/Art2Token',
        'contracts/tokens/art2/1/Art2Series',


  /*      'contracts/tokens/collection/CollectionToken',
        'contracts/tokens/collection/Collection',
        'contracts/tokens/collection/CollectionRoot',*/

        //'contracts/tokens/ticket/TicketToken',
        //'contracts/tokens/ticket/TicketRoot',

        'contracts/trade/auction/1/DirectAuctionRoot',
        'contracts/trade/auction/1/DirectAuction',

        'contracts/trade/bid/1/BidRoot',
        'contracts/trade/bid/1/Bid',

        'contracts/trade/ask/1/AskRoot',
        'contracts/trade/ask/1/Ask'
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