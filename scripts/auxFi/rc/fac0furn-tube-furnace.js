const rc = {


    // craftTime: 4s


    base: {},


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "auxTemp", {
    target: "loveclab-aux0aux-tube-furnace",
    maxTemp: 1800.0,
});
runRecipeGeneration(rc, "lovec", "heaterGas", {
    amt: 4,
    time: 4.0 * 60.0,
});


exports.rc = rc;
