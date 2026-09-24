const rc = {


    // craftTime: 20s


    base: {


        baseAux: [
            "loveclab-aux0aux-heat-exchange", 0.01666667,
        ],


    },


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "forge", {
    amt: 10,
    payAmt: 1,
    sizeCap: 2,
    maxTemp: 1800.0,
});


exports.rc = rc;
