/*
  ========================================
  Section: Definition
  ========================================
*/


  if(!checkVersion("projreind", [
    "lovec", "100.25120401",
    "loveclab", "100.25120401",
  ])) return;


  /* <---------- import ----------> */


  const MDL_event = require("lovec/mdl/MDL_event");
  const MDL_util = require("lovec/mdl/MDL_util");


  const TP_achievement = require("projreind/tp/TP_achievement");


  /* <---------- load ----------> */


  const CT_BLK_groundDrill = require("projreind/ct/CT_BLK_groundDrill");
  const CT_BLK_wallDrill = require("projreind/ct/CT_BLK_wallDrill");
  const CT_BLK_oreScanner = require("projreind/ct/CT_BLK_oreScanner");
  const CT_BLK_impactDrill = require("projreind/ct/CT_BLK_impactDrill");
  const CT_BLK_terrainDynamicDrill = require("projreind/ct/CT_BLK_terrainDynamicDrill");
  const CT_BLK_wallHarvester = require("projreind/ct/CT_BLK_wallHarvester");
  const CT_BLK_dynamicWallHarvester = require("projreind/ct/CT_BLK_dynamicWallHarvester");
  const CT_BLK_rangeHarvester = require("projreind/ct/CT_BLK_rangeHarvester");


  const CT_BLK_conveyor = require("projreind/ct/CT_BLK_conveyor");
  const CT_BLK_itemJunction = require("projreind/ct/CT_BLK_itemJunction");
  const CT_BLK_conveyorBridge = require("projreind/ct/CT_BLK_conveyorBridge");
  const CT_BLK_router = require("projreind/ct/CT_BLK_router");
  const CT_BLK_directionalRouter = require("projreind/ct/CT_BLK_directionalRouter");
  const CT_BLK_filterGate = require("projreind/ct/CT_BLK_filterGate");
  const CT_BLK_multiFilterGate = require("projreind/ct/CT_BLK_multiFilterGate");
  const CT_BLK_overflowGate = require("projreind/ct/CT_BLK_overflowGate");
  const CT_BLK_unloader = require("projreind/ct/CT_BLK_unloader");
  const CT_BLK_directionalUnloader = require("projreind/ct/CT_BLK_directionalUnloader");
  const CT_BLK_remoteCoreUnloader = require("projreind/ct/CT_BLK_remoteCoreUnloader");
  const CT_BLK_incinerator = require("projreind/ct/CT_BLK_incinerator");
  const CT_BLK_container = require("projreind/ct/CT_BLK_container");
  const CT_BLK_lootHopper = require("projreind/ct/CT_BLK_lootHopper");
  const CT_BLK_lootPullerHopper = require("projreind/ct/CT_BLK_lootPullerHopper");


  const CT_BLK_manualTimerPump = require("projreind/ct/CT_BLK_manualTimerPump");
  const CT_BLK_liquidPump = require("projreind/ct/CT_BLK_liquidPump");
  const CT_BLK_depthPump = require("projreind/ct/CT_BLK_depthPump");
  const CT_BLK_fluidPipe = require("projreind/ct/CT_BLK_fluidPipe");
  const CT_BLK_fluidJunction = require("projreind/ct/CT_BLK_fluidJunction");
  const CT_BLK_fluidValve = require("projreind/ct/CT_BLK_fluidValve");
  const CT_BLK_fluidPipeBridge = require("projreind/ct/CT_BLK_fluidPipeBridge");
  const CT_BLK_fluidRouter = require("projreind/ct/CT_BLK_fluidRouter");


  const CT_BLK_cable = require("projreind/ct/CT_BLK_cable");
  const CT_BLK_wireRelay = require("projreind/ct/CT_BLK_wireRelay");
  const CT_BLK_wireNode = require("projreind/ct/CT_BLK_wireNode");
  const CT_BLK_ventGenerator = require("projreind/ct/CT_BLK_ventGenerator");


  const CT_BLK_cogwheel = require("projreind/ct/CT_BLK_cogwheel");
  const CT_BLK_gearBox = require("projreind/ct/CT_BLK_gearBox");
  const CT_BLK_cogwheelStack = require("projreind/ct/CT_BLK_cogwheelStack");


  const CT_BLK_baseFactory = require("projreind/ct/CT_BLK_baseFactory");
  const CT_BLK_terrainFactory = require("projreind/ct/CT_BLK_terrainFactory");
  const CT_BLK_recipeFactory = require("projreind/ct/CT_BLK_recipeFactory");
  const CT_BLK_furnaceRecipeFactory = require("projreind/ct/CT_BLK_furnaceRecipeFactory");
  const CT_BLK_durabilityRecipeFactory = require("projreind/ct/CT_BLK_durabilityRecipeFactory");
  const CT_BLK_manualRecipeFactory = require("projreind/ct/CT_BLK_manualRecipeFactory");


  const CT_BLK_materialBlock = require("projreind/ct/CT_BLK_materialBlock");
  const CT_BLK_payloadConveyor = require("projreind/ct/CT_BLK_payloadConveyor");


  const CT_BLK_directionalMender = require("projreind/ct/CT_BLK_directionalMender");
  const CT_BLK_radiusMender = require("projreind/ct/CT_BLK_radiusMender");
  const CT_BLK_statusProjector = require("projreind/ct/CT_BLK_statusProjector");


  const CT_BLK_directionalSwitch = require("projreind/ct/CT_BLK_directionalSwitch");


  const CT_BLK_defenseWall = require("projreind/ct/CT_BLK_defenseWall");


/*
  ========================================
  Section: Application
  ========================================
*/




  MDL_util.localizeModMeta("projreind");




  MDL_event._c_onLoad(() => {


    // Why are you here?
    if(!Vars.headless && Mathf.chance(0.2)) {
      let tmpSeq = Vars.ui.database.getChildren();
      tmpSeq.get(tmpSeq.size - 1).button("@info.projreind-info-dont-click-me.name", () => Core.app.openURI(
        global.lovecUtil.prop.locale === "zh_CN" ?
          "https://www.bilibili.com/video/BV1GJ411x7h7" :
          "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      )).size(210.0, 64.0);
    };


  }, 45457920);
