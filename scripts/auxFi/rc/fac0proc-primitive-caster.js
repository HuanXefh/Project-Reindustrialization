const rc = {


    // craftTime: 20s


    base: {},


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "shaper", {
    amt: 10,
    payAmt: 1,
    sizeCap: 2,
    maxTemp: 2000.0,
    mode: "casting",
});


exports.rc = rc;
