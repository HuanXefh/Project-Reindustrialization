const rc = {


    // craftTime: 60s


    base: {


        baseAux: [
            "loveclab-aux0aux-melt-cooling", 0.03333333,
        ],


    },


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "reactor", {
    amt: 240,
    time: 60.0 * 60.0,
    maxTemp: 2500.0,
    mode: "melt",
});
runRecipeGeneration(rc, "lovec", "smelter", {
    amt: 240,
    maxTemp: 2500.0,
    mode: "concentrate",
});


exports.rc = rc;
