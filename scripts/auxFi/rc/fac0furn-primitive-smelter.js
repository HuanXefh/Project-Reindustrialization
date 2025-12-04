const MDL_content = require("lovec/mdl/MDL_content");


const rc = {


  // craftTime: 360s


  base: {},


  recipe: [


    /* <---------- smelting ----------> */


    /* carbon */


    "SMELTING: crude graphite", {

      icon: "loveclab-item0ore-crude-graphite",
      category: "smelting",
      lockedBy: [
        "loveclab-item0bio-timber",
        "loveclab-item0chem-lead",
      ],
      tempReq: 900.0,                // NOTE: This is nerfed from ~2500 HU in real life, too high for a starter smelter.

      bi: [
        "loveclab-item0ore-crude-graphite", 270, 1.0,
      ],

      bo: [
        "loveclab-item0chem-graphite", 270, 0.4,
      ],

    },


    /* copper */


    "SMELTING: chalcopyrite", {

      icon: "loveclab-item0ore-chalcopyrite",
      category: "smelting",
      lockedBy: [
        "loveclab-item0bio-timber",
      ],
      tempReq: MDL_content._sintTemp("loveclab-item0ore-chalcopyrite"),

      bi: [
        "loveclab-item0ore-chalcopyrite", 270, 1.0,
      ],

      bo: [
        "loveclab-item0chem-copper", 270, 0.4,
      ],

    },


    "SMELTING: malachite", {

      icon: "loveclab-item0ore-malachite",
      category: "smelting",
      tempReq: MDL_content._sintTemp("loveclab-item0ore-malachite"),

      bi: [
        "loveclab-item0ore-malachite", 270, 1.0,
      ],

      bo: [
        "loveclab-item0chem-copper", 270, 0.6,
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
        "loveclab-item0ore-native-copper", 270, 1.0,
      ],

      bo: [
        "loveclab-item0chem-copper", 270, 0.8,
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
        "loveclab-item0ore-galena", 270, 1.0,
      ],

      bo: [
        "loveclab-item0chem-lead", 270, 0.6,
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
        "loveclab-item0ore-cassiterite", 270, 1.0,
      ],

      bo: [
        "loveclab-item0chem-tin", 270, 0.6,
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
        "loveclab-item0ore-sphalerite", 270, 1.0,
      ],

      bo: [
        "loveclab-item0chem-zinc", 270, 0.6,
      ],

    },


  ],


};


exports.rc = rc;
