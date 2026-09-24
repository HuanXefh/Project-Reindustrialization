const rc = {


    // craftTime: 15s


    base: {


        baseCi: [
            "loveclab-gas0misc-air", 0.2,
        ],
        baseAux: [
            "loveclab-aux0aux-dust-recycling", 0.01666667,
        ],


    },


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "purifierMagnetic", {
    amt: 15,
});


exports.rc = rc;
