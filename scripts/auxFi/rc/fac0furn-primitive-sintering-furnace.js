const rc = {


    // craftTime: 20s


    base: {


        baseAux: [
            "loveclab-aux0aux-heat-exchange", 0.01666667,
        ],


    },


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "roastingFurnace", {
    amtI: 20,
    pI: 0.5,
    amtO: 10,
    time: 20.0 * 60.0,
    maxTemp: 1800.0,
    maxFlam: 0.0,
});
runRecipeGeneration(rc, "lovec", "sinteringFurnace", {
    amtI: 20,
    pI: 0.5,
    amtO: 10,
    maxTemp: 1800.0,
    maxFlam: 0.0,
});


exports.rc = rc;
