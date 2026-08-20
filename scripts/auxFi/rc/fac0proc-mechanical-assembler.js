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


    "MISC: wooden block", {
      icon: "loveclab-pay0mat-wooden-block",
      category: "misc",

      bi: [
        "loveclab-item0bio-timber", 10, 1.0,
      ],

      payo: [
        "loveclab-pay0mat-wooden-block", 1,
      ],
    },


    "MISC: rubber block", {
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


TP_recipeGen._g_assembler.run(rc, {
  mode: "electrode",
  amt: 1,
});
TP_recipeGen._g_assembler.run(rc, {
  mode: "membrane",
  amt: 1,
});
TP_recipeGen._g_assembler.run(rc, {
  mode: "brickBlock",
  amt: 1,
});


exports.rc = rc;
