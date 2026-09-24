const rc = {


    // craftTime: 20s


    base: {},


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "caster", {
    amt: 10,
    payAmt: 1,
    sizeCap: 2,
    maxTemp: 1800.0,
});


exports.rc = rc;
