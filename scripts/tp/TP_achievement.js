/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const CLS_achievement = require("lovec/cls/util/CLS_achievement");
  const TRIGGER = require("lovec/glb/BOX_trigger");


  const MDL_event = require("lovec/mdl/MDL_event");


  /* <---------- base ----------> */


  if(!Vars.headless) MDL_event._c_onLoad(() => {


    exports.treesDontTalk = new CLS_achievement(
      "projreind-trees-dont-talk",
      new TextureRegionDrawable(Core.atlas.find("loveclab-sta-hidden-well")),
      TRIGGER.treeHide,
      function(unit) {
        if(unit === Vars.player.unit()) this.complete();
      },
    );


    exports.carriedOn = new CLS_achievement(
      "projreind-carried-on",
      new TextureRegionDrawable(Core.atlas.find("lovec-icon-take-loot")),
      TRIGGER.lootTake,
      function(unit, itm, amt) {
        if(unit === Vars.player.unit()) this.complete();
      },
    );


    exports.twoInOne = new CLS_achievement(
      "projreind-two-in-one",
      new TextureRegionDrawable(Core.atlas.find("projreind-dis0aux-filter-gate-full")),
      TRIGGER.invertSelection,
    );


    exports.wetFoot = new CLS_achievement(
      "projreind-wet-foot",
      new TextureRegionDrawable(Core.atlas.find("status-wet-ui")),
      TRIGGER.wetStepOnCable,
    );


    exports.masterOfWiring = new CLS_achievement(
      "projreind-master-of-wiring",
      new TextureRegionDrawable(Core.atlas.find("projreind-bliq0cond-steel-liquid-pipe-full")),
      TRIGGER.poweredMetalPipe,
    );


    exports.yakitori = new CLS_achievement(
      "projreind-yakitori",
      new TextureRegionDrawable(Core.atlas.find("projreind-pow0trans-copper-wire-relay")),
      TRIGGER.wireTouch,
      function(b, unit) {
        if(unit === Vars.player.unit()) this.complete();
      },
    );


    exports.whatAreYouBurning = new CLS_achievement(
      "projreind-what-are-you-burning",
      new TextureRegionDrawable(Core.atlas.find("projreind-dis0aux-item-incinerator-full")),
      TRIGGER.incineratorExplosion,
    );


    exports.noSmoking = new CLS_achievement(
      "projreind-no-smoking",
      new TextureRegionDrawable(Core.atlas.find("lovec-icon-fuel")),
      TRIGGER.buildingFireExplosion,
    );


    exports.theGroundIsShaking = new CLS_achievement(
      "projreind-the-ground-is-shaking",
      new TextureRegionDrawable(Core.atlas.find("projreind-min0drl-boulder-class-impact-drill-full")),
      TRIGGER.impactWavePlayerDeath,
    );


    exports.cyberDizziness = new CLS_achievement(
      "projreind-cyber-dizziness",
      new TextureRegionDrawable(Core.atlas.find("projreind-pow0tor-brass-cogwheel")),
      TRIGGER.cogwheelUnitSpin,
      function(b, unit) {
        if(unit === Vars.player.unit()) this.complete();
      },
    );


    exports.thatsNotRemote = new CLS_achievement(
      "projreind-thats-not-remote",
      new TextureRegionDrawable(Core.atlas.find("projreind-dis0aux-remote-core-unloader-full")),
      TRIGGER.remoteCoreUnloaderNearCore,
    );


    /* production */


    exports.ingotMiningIsGone = new CLS_achievement(
      "projreind-ingot-mining-is-gone",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0ore-native-copper")),
      TRIGGER.itemProduce,
      function(b, itm, amt) {
        if(itm.name === "loveclab-item0chem-copper") this.complete();
      },
    );


    exports.bronzeAge = new CLS_achievement(
      "projreind-bronze-age",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0chem-tin-bronze")),
      TRIGGER.itemProduce,
      function(b, itm, amt) {
        if(itm.name === "loveclab-item0chem-tin-bronze") this.complete();
      },
    );


    exports.acquireHardware = new CLS_achievement(
      "projreind-acquire-hardware",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0chem-steel")),
      TRIGGER.itemProduce,
      function(b, itm, amt) {
        if(itm.name === "loveclab-item0chem-steel") this.complete();
      },
    );


    /* special */


    exports.fireInTheHole = new CLS_achievement(
      "projreind-fire-in-the-hole",
      new TextureRegionDrawable(Core.atlas.find("lovec-icon-fire-in-the-hole")),
      TRIGGER.unitDestroy,
      function(unit) {
        if(unit === Vars.player.unit() && Core.settings.getBool("lovec-misc-fire-in-the-hole", false)) this.complete();
      },
    );


    exports.asYouWish = new CLS_achievement(
      "projreind-as-you-wish",
      new TextureRegionDrawable(Core.atlas.find("error")),
      TRIGGER.secretCodeCrash,
    );


  }, 77016970);
