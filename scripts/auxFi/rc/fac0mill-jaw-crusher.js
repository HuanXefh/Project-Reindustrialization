const rc = {


    // craftTime: 4s


    base: {


        baseAux: [
            "loveclab-aux0aux-vibration-screen", 0.01666667,
        ],


    },


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "rockCrusher", {
    amt: 4,
    maxHardness: 7,
    abrasionFactor: 1.0,
});
runRecipeGeneration(rc, "lovec", "rockCrusherAggregate", {
    amt: 2,
    maxHardness: 7,
    abrasionFactor: 1.25,
});


exports.rc = rc;
