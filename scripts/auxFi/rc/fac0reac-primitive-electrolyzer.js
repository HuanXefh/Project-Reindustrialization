const rc = {


    // craftTime: 4s


    base: {},


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "electrolyzer", {
    amt: 4,
    time: 4.0 * 60.0,
    mode: "main",
});


exports.rc = rc;
