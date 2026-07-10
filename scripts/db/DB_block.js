const db = {


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  param: {


    cep: {


      prov: [],


      use: [

        "projreind-min0drl-survivor-drill", 1.5,
        "projreind-min0scan-portable-ore-scanner", 4.0,

        "projreind-dis0aux-remote-core-unloader", 1.5,
        "projreind-eff0stor-remote-core-relay", 3.5,

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
      "projreind-min0drl-anteater-class-wall-drill", "emerald-tide",
      "projreind-min0drl-scavenger-class-deposit-drill", "emerald-tide",
      "projreind-min0drl-boulder-class-impact-drill", "emerald-tide",
      "projreind-min0drl-topaz-class-sand-miner", "emerald-tide",
      "projreind-min0scan-alpha-class-ore-scanner", "emerald-tide",
      "projreind-min0scan-portable-ore-scanner", "emerald-tide",
      "projreind-min0harv-forest-harvester", "emerald-tide",
      "projreind-min0harv-mycelial-harvester", "emerald-tide",
      "projreind-min0harv-algae-harvester", "emerald-tide",

      "projreind-min0drl-primitive-burner-drill", "rim-builder",
      "projreind-dis0aux-remote-core-unloader", "rim-builder",
      "projreind-eff0stor-remote-core-relay", "rim-builder",
      "projreind-pow0gen-hpsv-generator", "rim-builder",
      "projreind-fac0proc-core-crafter", "rim-builder",

      "projreind-eff0proj-local-repairer", "outpost-military",
      "projreind-eff0proj-bay-class-repairer", "outpost-military",
      "projreind-eff0proj-haste-projector", "outpost-military",

    ],


    facFami: [

      "projreind-fac0air-air-collector", "air-collector",

      "projreind-fac0furn-primitive-crucible", "alloy-furnace",

      "projreind-fac0proc-core-crafter", "assembler",

      "projreind-pow0boil-primitive-boiler", "boiler",

      "projreind-fac0furn-kiln", "brick-kiln",

      "projreind-fac0furn-combustion-chamber", "burner",

      "projreind-fac0furn-kiln", "carbonization-furnace",

      "projreind-fac0proc-primitive-caster", "caster",

      "projreind-fac0furn-primitive-coke-oven", "coke-oven",
      "projreind-fac0furn-coke-oven-battery", "coke-oven",

      "projreind-fac0heat-jet-condenser", "condenser",

      "projreind-fac0proc-biomass-crusher", "crusher",

      "projreind-fac0heat-hot-air-dryer", "dryer",
      "projreind-fac0heat-primitive-freeze-dryer", "dryer",

      "projreind-fac0proc-primitive-forge", "forge",

      "projreind-fac0furn-bricked-blast-furnace", "furnace-reactor",

      "projreind-pow0heat-combustion-heater", "heater",
      "projreind-pow0heat-resistance-heater", "heater",
      "projreind-fac0furn-tube-furnace", "heater",
      "projreind-fac0heat-primitive-heat-exchanger", "heater",

      "projreind-fac0heat-primitive-heat-exchanger", "heat-exchanger",

      "projreind-fac0mix-mechanical-mixing-cauldron", "liquid-mixer",

      "projreind-fac0mix-v-mixer", "mixer",

      "projreind-bliq0pump-piston-pressure-pump", "pressure-pump",
      "projreind-bliq0pump-piston-vacuum-pump", "pressure-pump",

      "projreind-fac0mill-mechanical-mill", "pulverizer",
      "projreind-fac0mill-ball-mill", "pulverizer",

      "projreind-fac0sep-ore-washer", "purifier",
      "projreind-fac0sep-hydrocyclone", "purifier",
      "projreind-fac0sep-dry-magnetic-separator", "purifier",

      "projreind-fac0furn-primitive-sintering-furnace", "roasting-furnace",

      "projreind-fac0mill-jaw-crusher", "rock-crusher",
      "projreind-fac0mill-hammer-crusher", "rock-crusher",

      "projreind-fac0furn-bloomery", "sintering-furnace",
      "projreind-fac0furn-primitive-sintering-furnace", "sintering-furnace",

      "projreind-fac0furn-primitive-smelter", "smelter",
      "projreind-fac0furn-bloomery", "smelter",
      "projreind-fac0furn-bricked-blast-furnace", "smelter",

    ],


  },


  group: {


    material: {


      wood: [

        "projreind-bliq0cond-wooden-liquid-pipe",
        "projreind-bliq0cond-wooden-gas-pipe",

        "projreind-bliq0brd-wooden-fluid-pipe-bridge",

        "projreind-bliq0stor-wooden-barrel",

      ],


      copper: [

        "projreind-bliq0pump-portable-manual-pump",
        "projreind-bliq0pump-piston-liquid-pump",
        "projreind-bliq0pump-piston-depth-pump",

        "projreind-bliq0cond-bronze-liquid-pipe",
        "projreind-bliq0cond-bronze-gas-pipe",

        "projreind-bliq0brd-bronze-fluid-pipe-bridge",

        "projreind-bliq0stor-bronze-liquid-router",

        "projreind-pow0heat-copper-heat-conductor-plate",

        "projreind-fac0furn-combustion-chamber",

        "projreind-fac0mix-mechanical-mixing-cauldron",

      ],


      lead: [

        "projreind-bliq0cond-lead-liquid-pipe",

      ],


      iron: [

        "projreind-bliq0cond-cast-iron-liquid-pipe",
        "projreind-bliq0cond-cast-iron-gas-pipe",

        "projreind-bliq0aux-fluid-overflow-valve",
        "projreind-bliq0aux-pressure-router",

        "projreind-pow0heat-cast-iron-heat-conductor-plate",

        "projreind-fac0misc-rain-collector",

        "projreind-fac0heat-jet-condenser",

      ],


      steel: [

        "projreind-bliq0cond-steel-liquid-pipe",
        "projreind-bliq0cond-steel-gas-pipe",

        "projreind-bliq0stor-steel-liquid-tank",
        "projreind-bliq0stor-steel-gas-cylinder",

        "projreind-fac0heat-primitive-freeze-dryer",

      ],


      galvanized: [],


      stainless: [

        "projreind-bliq0aux-fluid-unloader",

      ],


      glass: [],


      cement: [],


      rubber: [],


    },


    exposed: [

      "projreind-dis0conv-primitive-conveyor",
      "projreind-dis0conv-wooden-conveyor",
      "projreind-dis0conv-standard-conveyor",
      "projreind-dis0conv-multi-port-conveyor",

      "projreind-dis0brd-primitive-conveyor-bridge",

      "projreind-dis0aux-item-incinerator",

      "projreind-eff0stor-crate",

      "projreind-dis0loot-item-hopper",
      "projreind-dis0loot-item-collector",

    ],


    cloggable: [

      "projreind-bliq0cond-wooden-liquid-pipe",

      "projreind-bliq0brd-wooden-fluid-pipe-bridge",

    ],


    shortCircuit: [

      "projreind-dis0conv-multi-port-conveyor",

      "projreind-pow0trans-copper-cable",
      "projreind-pow0trans-tin-cable",
      "projreind-pow0trans-copper-wire-relay",
      "projreind-pow0trans-copper-wire-node",
      "projreind-pow0trans-copper-wire-remote-node",

      "projreind-pow0heat-resistance-heater",

      "projreind-pay0conv-payload-express-way",

    ],


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


};
exports.db = db;
