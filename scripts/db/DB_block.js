const db = {


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  param: {


    presRes: [],


    vacRes: [],


    corRes: [],


    heatRes: [

      "projreind-fac0furn-kiln", 1400.0,
      "projreind-fac0furn-primitive-smelter", 1600.0,
      "projreind-fac0furn-bloomery", 1800.0,
      "projreind-fac0furn-primitive-crucible", 1800.0,
      "projreind-fac0furn-primitive-sintering-furnace", 1800.0,
      "projreind-fac0furn-primitive-coke-oven", 1600.0,

    ],


    pol: [

      "projreind-min0drl-survivor-drill", 6.0,
      "projreind-min0drl-progress-class-drill", 2.0,
      "projreind-min0drl-pangolin-class-wall-drill", 4.0,
      "projreind-min0drl-boulder-class-impact-drill", 4.0,
      "projreind-min0drl-topaz-class-sand-miner", 10.0,

      "projreind-fac0air-air-collector", -4.0,
      "projreind-fac0air-air-filter", -30.0,

      "projreind-fac0furn-kiln", 6.0,
      "projreind-fac0furn-primitive-smelter", 10.0,
      "projreind-fac0furn-bloomery", 10.0,
      "projreind-fac0furn-primitive-crucible", 4.0,
      "projreind-fac0furn-primitive-sintering-furnace", 10.0,
      "projreind-fac0furn-primitive-coke-oven", 13.0,

      "projreind-fac0heat-combustion-heater", 6.0,

      "projreind-fac0mill-jaw-crusher", 3.0,
      "projreind-fac0mill-mechanical-mill", 4.5,

      "projreind-fac0sep-dry-magnetic-separator", 4.0,

    ],


    polTol: [],


    cep: {


      prov: [],


      use: [

        "projreind-min0drl-survivor-drill", 1.5,

        "projreind-dis0aux-remote-core-unloader", 1.0,

        "projreind-fac0proc-core-crafter", 2.0,

        "projreind-eff0proj-haste-projector", 3.0,

      ],


    },


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  map: {


    faction: [

      "projreind-min0drl-survivor-drill", "emerald-tide",
      "projreind-min0drl-progress-class-drill", "emerald-tide",
      "projreind-min0drl-pangolin-class-wall-drill", "emerald-tide",
      "projreind-min0drl-boulder-class-impact-drill", "emerald-tide",
      "projreind-min0drl-topaz-class-sand-miner", "emerald-tide",
      "projreind-min0scan-alpha-class-ore-scanner", "emerald-tide",

      "projreind-eff0proj-local-repairer", "outpost-military",
      "projreind-eff0proj-bay-class-repairer", "outpost-military",
      "projreind-eff0proj-haste-projector", "outpost-military",

    ],


    facFami: [

      "projreind-fac0air-air-collector", "air-collector",

      "projreind-fac0furn-primitive-crucible", "alloy-furnace",

      "projreind-fac0furn-kiln", "brick-kiln",

      "projreind-fac0furn-kiln", "carbonization-furnace",

      "projreind-fac0furn-primitive-coke-oven", "coke-oven",

      "projreind-fac0heat-combustion-heater", "heater",

      "projreind-fac0heat-primitive-heat-exchanger", "heat-exchanger",

      "projreind-fac0mix-v-mixer", "mixer",

      "projreind-fac0mill-mechanical-mill", "pulverizer",

      "projreind-fac0sep-dry-magnetic-separator", "purifier",

      "projreind-fac0furn-primitive-sintering-furnace", "roasting-furnace",

      "projreind-fac0mill-jaw-crusher", "rock-crusher",

      "projreind-fac0furn-bloomery", "sintering-furnace",
      "projreind-fac0furn-primitive-sintering-furnace", "sintering-furnace",

      "projreind-fac0furn-primitive-smelter", "smelter",
      "projreind-fac0furn-bloomery", "smelter",

    ],


  },


  group: {


    material: {


      wood: [

        "projreind-bliq0cond-wooden-liquid-pipe",

        "projreind-bliq0cond-wooden-gas-pipe",

      ],


      copper: [

        "projreind-bliq0pump-portable-manual-pump",
        "projreind-bliq0pump-piston-liquid-pump",
        "projreind-bliq0pump-piston-depth-pump",

        "projreind-bliq0cond-bronze-liquid-pipe",

        "projreind-bliq0cond-bronze-gas-pipe",

        "projreind-bliq0brd-bronze-fluid-pipe-bridge",

        "projreind-bliq0stor-bronze-liquid-router",

      ],


      lead: [

        "projreind-bliq0cond-lead-liquid-pipe",

      ],


      iron: [],


      steel: [

        "projreind-bliq0cond-steel-liquid-pipe",

        "projreind-bliq0cond-steel-gas-pipe",

        "projreind-bliq0stor-steel-liquid-tank",

        "projreind-bliq0stor-steel-gas-cylinder",

      ],


      galvanized: [],


      stainless: [],


      glass: [],


      cement: [],


      rubber: [],


    },


    exposed: [

      "projreind-dis0conv-primitive-conveyor",

      "projreind-eff0stor-crate",

    ],


    cloggable: [

      "projreind-bliq0cond-wooden-liquid-pipe",

    ],


    shortCircuit: [

      "projreind-pow0trans-copper-cable",
      "projreind-pow0trans-copper-wire-relay",
      "projreind-pow0trans-copper-wire-node",

      "projreind-pay0conv-payload-express-way",

    ],


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


};
exports.db = db;
