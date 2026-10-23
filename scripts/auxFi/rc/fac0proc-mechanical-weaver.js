const rc = {


    // craftTime: 10s


    base: {


        baseAux: [
            "loveclab-aux0aux-torque", 0.06666667,
            "loveclab-aux0aux-rpm", 0.16666667,
        ],


    },


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "assembler", {
    amt: 1,
    mode: "fabric",
});


exports.rc = rc;
