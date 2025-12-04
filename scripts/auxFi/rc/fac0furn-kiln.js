const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 20s


  base: {},


  recipe: [


    /* <---------- misc ----------> */


    "MISC: charcoal", {

      icon: "loveclab-item0bio-log",
      category: "misc",
      tempReq: 300.0,
      tempAllowed: 750.0,

      bi: [
        "loveclab-item0bio-log", 10, 1.0,
      ],

      bo: [
        "loveclab-item0bio-charcoal", 10, 0.5,
      ],
      failP: 0.1,
      fo: [],

    },


    "MISC: charcoal; FROM: hypha rod", {

      icon: "loveclab-item0bio-hypha-rod",
      category: "misc",
      tempReq: 500.0,
      tempAllowed: 900.0,

      bi: [
        "loveclab-item0bio-hypha-rod", 10, 1.0,
      ],

      bo: [
        "loveclab-item0bio-charcoal", 10, 0.5,
      ],
      failP: 0.05,
      fo: [],

    },


    "MISC: raw rubber", {

      icon: "loveclab-item0int-raw-rubber",
      category: "misc",
      tempReq: 80.0,
      tempAllowed: 350.0,

      ci: [
        "loveclab-liq0bio-latex", 0.1,
      ],

      bo: [
        "loveclab-item0int-raw-rubber", 10, 0.5,
      ],
      failP: 0.05,
      fo: [],

    },


    "MISC: rubber", {

      icon: "loveclab-liq0bio-latex",
      category: "misc",
      tempReq: 160.0,
      tempAllowed: 350.0,

      bi: [
        "loveclab-item0int-raw-rubber", 5, 1.0,
        [
          "loveclab-item0chem-sulfur", 10, 0.25,
          "loveclab-item0ore-crude-sulfur", 10, 1.0,
        ], -1.0, -1.0,
      ],

      bo: [
        "loveclab-item0chem-rubber", 10, 0.5,
      ],
      failP: 0.05,
      fo: [],

    },


  ],


};


TP_recipeGen._g_brickKiln.run(rc, {
  objF: obj => obj.failP = 0.1,
  amtI: 10,
  amtO: 5,
  maxTemp: 1400.0,
});


exports.rc = rc;
