const rc = {


    // craftTime: 4s


    base: {},


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "auxTemp", {
    target: "loveclab-aux0aux-tube-furnace",
    maxTemp: 1850.0,
});
runRecipeGeneration(rc, "lovec", "heater", {
    amt: 4,
    time: 4.0 * 60.0,
    mode: "gas",
});


exports.rc = rc;
