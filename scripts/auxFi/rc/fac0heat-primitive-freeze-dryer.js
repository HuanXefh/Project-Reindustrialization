const rc = {


    // craftTime: 5s


    base: {


        baseAux: [
            "loveclab-aux0aux-vacuum", 0.03333333,
        ],


    },


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "dryer", {
    amt: 5,
    time: 5.0 * 60.0,
    mode: "freeze",
});


exports.rc = rc;
