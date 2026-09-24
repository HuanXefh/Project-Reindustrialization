const rc = {


    // craftTime: 4s


    base: {},


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "crusherBiomass", {
    amtI: 4,
    pI: 0.5,
    amtO: 4,
    pO: 0.5,
});


exports.rc = rc;
