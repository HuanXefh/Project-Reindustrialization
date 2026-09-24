const rc = {


    // craftTime: 5s


    base: {


        baseAux: [
            "loveclab-aux0aux-torque", 0.06666667,
            "loveclab-aux0aux-rpm", 0.16666667,
        ],


    },


    recipe: [


        /* <---------- misc ----------> */


        "MISC: wooden block",
        {
            icon: "loveclab-pay0mat-wooden-block",
            category: "misc",

            bi: [
                "loveclab-item0bio-timber", 10, 1.0,
            ],

            payo: [
                "loveclab-pay0mat-wooden-block", 1,
            ],
        },


        "MISC: rubber block",
        {
            icon: "loveclab-pay0mat-rubber-block",
            category: "misc",

            bi: [
                "loveclab-item0chem-rubber", 10, 1.0,
            ],

            payo: [
                "loveclab-pay0mat-rubber-block", 1,
            ],
        },


    ],


};


runRecipeGeneration(rc, "lovec", "assembler", {
    amt: 1,
    mode: "electrode",
});
runRecipeGeneration(rc, "lovec", "assembler", {
    amt: 1,
    mode: "membrane",
});
runRecipeGeneration(rc, "lovec", "assembler", {
    amt: 1,
    mode: "brickBlock",
});


exports.rc = rc;
