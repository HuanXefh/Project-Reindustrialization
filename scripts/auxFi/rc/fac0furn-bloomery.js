const MDL_content = require("lovec/mdl/MDL_content");
const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 20s


  base: {},


  recipe: [


    /* <---------- steelmaking ----------> */


    /* base */


    "STEELMAKING: cast iron", {
      icon: "loveclab-item0chem-cast-iron",
      category: "steelmaking",
      lockedBy: [
        "loveclab-item0chem-leaded-tin-bronze",
        "loveclab-item0ore-hematite",
      ],
      timeScl: 3.0,
      tempReq: 1600.0,

      bi: [
        "GROUP: pig iron", 30, 1.0,
      ],

      bo: [
        "loveclab-item0chem-cast-iron", 30, 0.66666667,
      ],

    },


    "STEELMAKING: wrought iron", {

      icon: "loveclab-item0chem-wrought-iron",
      category: "steelmaking",
      lockedBy: [
        "loveclab-item0chem-cast-iron",
      ],
      tempReq: 1200.0,

      ci: [
        "loveclab-gas0misc-air", 0.2,
      ],
      bi: [
        "GROUP: pig iron", 10, 1.0,
      ],

      bo: [
        "loveclab-item0chem-wrought-iron", 10, 1.0,
      ],

    },


    "STEELMAKING: steel", {

      icon: "loveclab-item0chem-steel",
      category: "steelmaking",
      lockedBy: [
        "loveclab-item0chem-brass",
        "loveclab-item0chem-tin-bronze",
      ],
      timeScl: 3.0,
      tempReq: 1600.0,

      bi: [
        "loveclab-item0chem-wrought-iron", 30, 1.0,
        "GROUP: carbon", 15, 1.0,
      ],
      reqOpt: true,
      opt: [
        "loveclab-item0ore-limestone", 60, 0.5, 1.0,
        "loveclab-item0chem-lime", 30, 0.5, 1.5,
      ],

      bo: [
        "loveclab-item0chem-steel", 30, 0.5,
        "loveclab-item0was-slag", 30, 0.5,
      ],

    },


    "STEELMAKING: steel; FROM: scrap steel", {

      icon: "loveclab-item0was-scrap-steel",
      category: "steelmaking",
      lockedBy: [
        "loveclab-item0chem-mangalloy",
      ],
      timeScl: 3.0,
      tempReq: 1400.0,

      bi: [
        "loveclab-item0was-scrap-steel", 45, 1.0,
      ],
      reqOpt: true,
      opt: [
        "loveclab-item0ore-limestone", 90, 0.5, 1.0,
        "loveclab-item0chem-lime", 45, 0.5, 1.5,
      ],

      bo: [
        "loveclab-item0chem-steel", 30, 0.5,
        "loveclab-item0was-slag", 30, 0.75,
      ],

    },


    /* alloy steel */


    "STEELMAKING: ferromanganese", {

      icon: "loveclab-item0chem-ferromanganese",
      category: "steelmaking",
      lockedBy: [
        "loveclab-item0chem-steel",
      ],
      timeScl: 3.0,
      tempReq: 1600.0,

      bi: [
        "GROUP: manganiferous", 30.0, 1.0,
        "GROUP: ferrous", 30.0, 1.0,
        [
          "loveclab-item0chem-graphite", 15, 0.5,
          "GROUP: carbon", 15, 1.0,
        ], -1.0, -1.0,
      ],

      bo: [
        "loveclab-item0chem-ferromanganese", 30, 0.5,
        "loveclab-item0was-slag", 45, 0.5,
      ],

    },


    "STEELMAKING: mangalloy", {

      icon: "loveclab-item0chem-mangalloy",
      category: "steelmaking",
      lockedBy: [
        "loveclab-item0chem-steel",
      ],
      timeScl: 3.0,
      tempReq: 1600.0,

      bi: [
        "loveclab-item0chem-ferromanganese", 15, 1.0,
      ],
      reqOpt: true,
      opt: [
        "loveclab-item0ore-limestone", 90, 0.5, 1.0,
        "loveclab-item0chem-lime", 45, 0.5, 1.5,
      ],

      bo: [
        "loveclab-item0chem-mangalloy", 30, 0.5,
        "loveclab-item0was-slag", 30, 0.75,
      ],

    },


    /* iron */


    "STEELMAKING: hematite", {

      icon: "loveclab-item0ore-hematite",
      category: "steelmaking",
      lockedBy: [
        "loveclab-item0chem-brass",
        "loveclab-item0chem-tin-bronze",
      ],
      tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-hematite"),

      bi: [
        "loveclab-item0ore-hematite", 20, 0.5,
      ],

      bo: [
        "loveclab-item0chem-pig-iron", 20, 0.5,
        "loveclab-item0was-slag", 10, 0.5,
      ],

    },


    "STEELMAKING: limonite", {

      icon: "loveclab-item0ore-limonite",
      category: "steelmaking",
      lockedBy: [
        "loveclab-item0chem-brass",
        "loveclab-item0chem-tin-bronze",
      ],
      tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-limonite"),

      bi: [
        "loveclab-item0ore-limonite", 40, 0.5,
      ],

      bo: [
        "loveclab-item0chem-pig-iron", 20, 0.5,
        "loveclab-item0was-slag", 15, 0.5,
      ],

    },


    "STEELMAKING: magnetite", {

      icon: "loveclab-item0ore-magnetite",
      category: "steelmaking",
      lockedBy: [
        "loveclab-item0chem-brass",
        "loveclab-item0chem-tin-bronze",
      ],
      tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-magnetite"),

      bi: [
        "loveclab-item0ore-magnetite", 20, 0.5,
      ],

      bo: [
        "loveclab-item0chem-pig-iron", 20, 0.5,
        "loveclab-item0was-slag", 10, 0.5,
      ],

    },


    "STEELMAKING: pyrite", {

      icon: "loveclab-item0ore-pyrite",
      category: "steelmaking",
      lockedBy: [
        "loveclab-item0chem-brass",
        "loveclab-item0chem-tin-bronze",
      ],
      tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-pyrite"),

      bi: [
        "loveclab-item0ore-pyrite", 30, 0.5,
      ],

      bo: [
        "loveclab-item0chem-pig-iron", 20, 0.5,
        "loveclab-item0was-slag", 15, 0.5,
      ],

    },


  ],


};


TP_recipeGen._g_sinteringFurnace.run(rc, {
  objF: obj => obj.timeScl = 3.0,
  isConcentrate: true,
  amtI: 60,
  pI: 0.5,
  amtO: 30,
  maxTemp: 1800.0,
  maxFlam: 0.0,
});
TP_recipeGen._g_smelter.run(rc, {
  objF: obj => {
    if(obj.icon.equalsAny("loveclab-item0ore-sphalerite", "loveclab-item0ore-smithsonite")) {
      obj.lockedBy = ["loveclab-item0chem-graphite"];
    } else if(obj.icon === "loveclab-item0ore-crude-graphite") {
      obj.lockedBy = ["loveclab-item0bio-timber", "loveclab-item0chem-lead"];
      obj.tempReq = 900.0;
    } else {
      obj.lockedBy = ["loveclab-item0bio-timber"];
    };
  },
  isConcentrate: false,
  amtI: 20,
  pI: 0.5,
});


exports.rc = rc;
