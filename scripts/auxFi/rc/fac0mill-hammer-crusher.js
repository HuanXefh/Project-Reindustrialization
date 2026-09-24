const rc = {


    // craftTime: 10s


    base: {


        baseAux: [
            "loveclab-aux0aux-vibration-screen", 0.03333333,
        ],


    },


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "rockCrusher", {
    amt: 20,
    minHardness: 3,
    maxHardness: 9,
    abrasionFactor: 0.75,
});
runRecipeGeneration(rc, "lovec", "rockCrusherRawOreBlock", {
    payAmt: 1,
    abrasionFactor: 0.75,
});


exports.rc = rc;
