module.exports = {
    config: {
        //endpoints: ["https://main.ton.dev"],
        endpoints: ["https://net.ton.dev"],
        //endpoints: ["http://localhost"],
        msgiManager: "0:5832aaf6f19af360129ba3fa1079a1c2104f6d502afb3525640fe7a945abcc62",
        swiftAddr:":041b574317360e273a371a2024633c094f36570111245c0f372d371c4321511f",
        art: {
            minCreationFee: 350_000_000,
            creationTopup: 200_000_000
        },
        art2: {
            minCreationFee: 350_000_000,
            creationTopup: 200_000_000,
            mintTopup: 200_000_000,
            minMintFee: 300_000_000
        }
    }
}
