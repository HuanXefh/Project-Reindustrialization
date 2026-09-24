const rc = {


    // craftTime: 2s


    base: {


        baseCi: [
            "loveclab-liq0ore-water", 0.1,
            "loveclab-gas0misc-air", 0.05,
            "loveclab-liq0was-waste-water", 0.0,
        ],

        baseCo: [
            "loveclab-liq0was-waste-water", 0.1,
            "loveclab-liq0ore-water", 0.0,
            "loveclab-gas0misc-air", 0.0,
        ],


    },


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "purifier", {
    amt: 4,
    pI: 0.5,
    tier: 0,
});


exports.rc = rc;
