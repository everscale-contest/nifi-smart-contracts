module.exports = {
    config: {
        //endpoints: ["https://main.ton.dev"],
        endpoints: ["https://net.ton.dev"],
        //endpoints: ["http://localhost"],
        msgiManager: "0:5832aaf6f19af360129ba3fa1079a1c2104f6d502afb3525640fe7a945abcc62",
        swiftAddr:":041b574317360e273a371a2024633c094f36570111245c0f372d371c4321511f",
        minCreationFee: 350000000,
        creationTopup: 100000000,
        stampRoot: {
            minCreationFee: 400000000,
            creationTopup: 300000000,
            name: 'Stamp',
            symbol: 'STP'
        },
        sealRoot: {
            minCreationFee: 300000000,
            creationTopup: 200000000,
             name: 'Seal',
            symbol: 'SEA'
        },
        foreverRoot: {
            minCreationFee: 400000000,
            creationTopup: 300000000,
             name: 'Forever',
            symbol: 'FOR'
        },
    }
}
