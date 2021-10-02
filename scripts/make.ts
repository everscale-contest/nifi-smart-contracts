import Make from '../library/scripts/make/Make'

const make: Make = new Make({
    compile: [
        'contracts/tokens/random/RandomRoot',
        'contracts/tokens/random/RandomToken',

        'contracts/tokens/art/ArtRoot',
        'contracts/tokens/art/ArtToken',
        
        'contracts/tokens/art2/Art2Root',
        'contracts/tokens/art2/Art2Token',
        'contracts/tokens/art2/Art2Series',

        //'contracts/tokens/ticket/TicketToken',
        //'contracts/tokens/ticket/TicketRoot',

        'contracts/trade/DirectAuctionRoot',
        'contracts/trade/DirectAuction',

        'contracts/trade/BidRoot',
        'contracts/trade/Bid'
    ],
    wrap: [
        'library/ton/contracts/SafeMultisigWallet/SafeMultisigWallet',
        'library/ton/contracts/GiverV2/GiverV2'
    ],
    compiler: '0.47.0',
    linker: '0.13.50'
})
make.run().then()