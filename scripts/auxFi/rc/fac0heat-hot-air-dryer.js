const rc = {


    // craftTime: 5s


    base: {


        baseCi: [
            "loveclab-gas0misc-air", 0.1,
        ],


    },


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "dryer", {
    amt: 5,
});


exports.rc = rc;
