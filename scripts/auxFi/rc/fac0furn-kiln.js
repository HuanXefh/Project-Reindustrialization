const rc = {


  // craftTime: 20s


  base: {},


  recipe: [


    /* <---------- misc ----------> */


    "MISC: raw rubber", {
      icon: "loveclab-item0int-raw-rubber",
      category: "misc",
      lockedBy: [
        "loveclab-item0chem-mangalloy",
      ],
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


    "MISC: rubber (no talc)", {
      icon: "loveclab-item0chem-rubber",
      tint: Pal.remove,
      category: "misc",
      lockedBy: [
        "loveclab-item0chem-mangalloy",
      ],
      tempReq: 160.0,
      tempAllowed: 350.0,

      bi: [
        "loveclab-item0int-raw-rubber", 5, 1.0,
        "GROUP: sulfurous", 10, 1.0,
      ],

      bo: [
        "loveclab-item0chem-rubber", 10, 0.5,
      ],
      failP: 0.33333333,
      fo: [],
    },


    "MISC: rubber", {
      icon: "loveclab-item0chem-rubber",
      category: "misc",
      lockedBy: [
        "loveclab-item0chem-mangalloy",
      ],
      tempReq: 160.0,
      tempAllowed: 350.0,

      bi: [
        "loveclab-item0int-raw-rubber", 5, 1.0,
        "GROUP: sulfurous", 10, 1.0,
        "loveclab-item0chem-talcum-powder", 5, 0.5,
      ],

      bo: [
        "loveclab-item0chem-rubber", 10, 0.5,
      ],
      failP: 0.05,
      fo: [],
    },


    "MISC: glass", {
      icon: "loveclab-item0buil-glass",
      category: "misc",
      tempReq: 1500.0,

      bi: [
        "GROUP: silica", 20, 1.0,
        "GROUP: sodium carbonate", 20, 0.5,
        "loveclab-item0int0chunks-limestone", 20, 1.0,
        "loveclab-item0chem-tin", 10, 0.5,
      ],

      bo: [
        "loveclab-item0buil-glass", 20, 0.5,
      ],
      failP: 0.33333333,
    },


    "MISC: tempered glass", {
      icon: "loveclab-item0buil-tempered-glass",
      category: "misc",
      tempReq: 650.0,
      tempAllowed: 800.0,

      ci: [
        "loveclab-gas0misc-air", 0.2,
      ],
      bi: [
        "loveclab-item0buil-glass", 10, 1.0,
      ],

      bo: [
        "loveclab-item0buil-tempered-glass", 10, 1.0,
      ],
      failP: 0.33333333,
    },


  ],


};


TP_recipeGen._g_carbonizationFurnace.run(rc, {
  objF: obj => obj.failP = obj.icon === "loveclab-item0bio-log" ? 0.1 : 0.05,
  time: 20.0 * 60.0,
  amt: 10,
  maxTemp: 1600.0,
});
TP_recipeGen._g_brickKiln.run(rc, {
  objF: obj => obj.failP = 0.25,
  amtI: 10,
  amtO: 5,
  maxTemp: 1600.0,
});


exports.rc = rc;
