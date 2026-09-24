const rc = {


    // craftTime: 5s


    base: {


        baseCi: [
            "loveclab-gas0misc-air", 0.1,
        ],


    },


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "reactorBurn", {
    amt: 5,
    p: 0.5,
    heatOScl: 0.5,
    time: 5.0 * 60.0,
    fuelType: FuelTypes.ITEM,
});


exports.rc = rc;
