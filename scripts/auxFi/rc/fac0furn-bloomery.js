const MDL_content = require("lovec/mdl/MDL_content");
const TP_recipeGen = require("lovec/tp/TP_recipeGen");


const rc = {


  // craftTime: 20s


  base: {},


  recipe: [


    /* <---------- steelmaking ----------> */


    /* base */


    "STEELMAKING: wrought iron", {

      icon: "loveclab-item0chem-wrought-iron",
      category: "steelmaking",
      lockedBy: [
        "loveclab-item0chem-brass",
        "loveclab-item0chem-tin-bronze",
      ],
      tempReq: 1200.0,

      bi: [
        [
          "loveclab-item0chem-pig-iron", 10, 1.0,
          "loveclab-item0ore-meteoric-iron", 15, 1.0,
        ], -1.0, -1.0,
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
        [
          "loveclab-item0ore-psilomelane", 30, 1.0,
          "loveclab-item0ore-pyrolusite", 30, 1.0,
        ], -1.0, -1.0,
        [
          "loveclab-item0chem-pig-iron", 30, 0.75,
          "loveclab-item0ore-hematite", 30, 1.0,
          "loveclab-item0ore-magnetite", 30, 1.0,
        ], -1.0, -1.0,
        [
          "loveclab-item0chem-graphite", 15, 0.5,
          "loveclab-item0chem-coke", 15, 0.5,
          "loveclab-item0chem-anthracite", 15, 1.0,
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
      tempReq: MDL_content._sintTemp("loveclab-item0ore-hematite"),

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
      tempReq: MDL_content._sintTemp("loveclab-item0ore-limonite"),

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
      tempReq: MDL_content._sintTemp("loveclab-item0ore-magnetite"),

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
      tempReq: MDL_content._sintTemp("loveclab-item0ore-pyrite"),

      bi: [
        "loveclab-item0ore-pyrite", 30, 0.5,
      ],

      bo: [
        "loveclab-item0chem-pig-iron", 20, 0.5,
        "loveclab-item0was-slag", 15, 0.5,
      ],

    },


    /* <---------- smelting ----------> */


    /* carbon */


    "SMELTING: crude graphite", {

      icon: "loveclab-item0ore-crude-graphite",
      category: "smelting",
      lockedBy: [
        "loveclab-item0bio-timber",
        "loveclab-item0chem-lead",
      ],
      tempReq: 900.0,

      bi: [
        "loveclab-item0ore-crude-graphite", 20, 0.5,
      ],

      bo: [
        "loveclab-item0chem-graphite", 10, 0.5,
      ],

    },


    /* copper */


    "SMELTING: azurite", {

      icon: "loveclab-item0ore-azurite",
      category: "smelting",
      lockedBy: [
        "loveclab-item0bio-timber",
      ],
      tempReq: MDL_content._sintTemp("loveclab-item0ore-azurite"),

      bi: [
        "loveclab-item0ore-azurite", 20, 0.5,
      ],

      bo: [
        "loveclab-item0chem-copper", 15, 0.5,
      ],

    },


    "SMELTING: chalcopyrite", {

      icon: "loveclab-item0ore-chalcopyrite",
      category: "smelting",
      lockedBy: [
        "loveclab-item0bio-timber",
      ],
      tempReq: MDL_content._sintTemp("loveclab-item0ore-chalcopyrite"),

      bi: [
        "loveclab-item0ore-chalcopyrite", 20, 0.5,
      ],

      bo: [
        "loveclab-item0chem-copper", 10, 0.5,
      ],

    },


    "SMELTING: malachite", {

      icon: "loveclab-item0ore-malachite",
      category: "smelting",
      lockedBy: [
        "loveclab-item0bio-timber",
      ],
      tempReq: MDL_content._sintTemp("loveclab-item0ore-malachite"),

      bi: [
        "loveclab-item0ore-malachite", 20, 0.5,
      ],

      bo: [
        "loveclab-item0chem-copper", 15, 0.5,
      ],

    },


    "SMELTING: native copper", {

      icon: "loveclab-item0ore-native-copper",
      category: "smelting",
      lockedBy: [
        "loveclab-item0bio-timber",
      ],
      tempReq: MDL_content._sintTemp("loveclab-item0ore-native-copper"),

      bi: [
        "loveclab-item0ore-native-copper", 20, 0.5,
      ],

      bo: [
        "loveclab-item0chem-copper", 20, 0.5,
      ],

    },


    /* lead */


    "SMELTING: galena", {

      icon: "loveclab-item0ore-galena",
      category: "smelting",
      lockedBy: [
        "loveclab-item0bio-timber",
      ],
      tempReq: MDL_content._sintTemp("loveclab-item0ore-galena"),

      bi: [
        "loveclab-item0ore-galena", 20, 0.5,
      ],

      bo: [
        "loveclab-item0chem-lead", 15, 0.5,
      ],

    },


    /* tin */


    "SMELTING: cassiterite", {

      icon: "loveclab-item0ore-cassiterite",
      category: "smelting",
      lockedBy: [
        "loveclab-item0chem-graphite",
      ],
      tempReq: MDL_content._sintTemp("loveclab-item0ore-cassiterite"),

      bi: [
        "loveclab-item0ore-cassiterite", 20, 0.5,
      ],

      bo: [
        "loveclab-item0chem-tin", 15, 0.5,
      ],

    },


    /* zinc */


    "SMELTING: sphalerite", {

      icon: "loveclab-item0ore-sphalerite",
      category: "smelting",
      lockedBy: [
        "loveclab-item0chem-graphite",
      ],
      tempReq: MDL_content._sintTemp("loveclab-item0ore-sphalerite"),

      bi: [
        "loveclab-item0ore-sphalerite", 20, 0.5,
      ],

      bo: [
        "loveclab-item0chem-zinc", 15, 0.5,
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


exports.rc = rc;
