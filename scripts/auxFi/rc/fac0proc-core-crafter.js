const rc = {


  // craftTime: 10s


  base: {},


  recipe: [


    /* <---------- misc ----------> */


    "MISC: timber", {
      icon: "loveclab-item0bio-timber",
      category: "misc",
      lockedBy: [
        "loveclab-item0buil-brick-brick-clay",
      ],

      bi: [
        "loveclab-item0bio-log", 10, 1.0,
      ],

      bo: [
        "loveclab-item0bio-timber", 5, 1.0,
      ],
      failP: 0.1,
      fo: [],
    },


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
  objF: obj => obj.failP = 0.2,
  mode: "electrode",
  amt: 1,
});
TP_recipeGen._g_assembler.run(rc, {
  objF: obj => obj.failP = 0.2,
  mode: "membrane",
  amt: 1,
});
TP_recipeGen._g_assembler.run(rc, {
  mode: "brickBlock",
  amt: 1,
});


exports.rc = rc;
