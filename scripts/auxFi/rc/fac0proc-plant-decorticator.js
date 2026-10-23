const rc = {


    // craftTime: 3s


    base: {


        baseCi: [
            "loveclab-liq0ore-water", 0.05,
            "loveclab-liq0was-waste-water", 0.0,
        ],

        baseCo: [
            "loveclab-liq0was-waste-water", 0.05,
            "loveclab-liq0ore-water", 0.0,
        ],


    },


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "assembler", {
    amt: 3,
    pO: 0.5,
    mode: "decortication",
});


exports.rc = rc;
