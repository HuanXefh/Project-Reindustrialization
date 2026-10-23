const rc = {


    // craftTime: 6s


    base: {},


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "mixer", {
    amt: 6,
    pO: 0.5,
    mode: "dust",
});


exports.rc = rc;
