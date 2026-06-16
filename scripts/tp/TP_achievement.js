/*
  ========================================
  Section: Definition
  ========================================
*/


  if(!Vars.headless) MDL_event._c_onLoad(() => {


    /* <------------------------------ gimmick ------------------------------ */


    new CLS_achievement(
      "projreind", "trees-dont-talk",
      new TextureRegionDrawable(Core.atlas.find("loveclab-sta-hidden-well")),
      TRIGGER.treeHide,
      function(unit) {
        if(unit === Vars.player.unit()) this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "carried-on",
      new TextureRegionDrawable(Core.atlas.find("lovec-icon-take-loot")),
      TRIGGER.lootTake,
      function(unit, itm, amt) {
        if(unit === Vars.player.unit()) this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "two-in-one",
      new TextureRegionDrawable(Core.atlas.find("projreind-dis0aux-filter-gate-full")),
      TRIGGER.invertSelection,
    );


    new CLS_achievement(
      "projreind", "wet-foot",
      new TextureRegionDrawable(Core.atlas.find("status-wet-ui")),
      TRIGGER.wetStepOnCable,
    );


    new CLS_achievement(
      "projreind", "master-of-wiring",
      new TextureRegionDrawable(Core.atlas.find("projreind-bliq0cond-steel-liquid-pipe-full")),
      TRIGGER.poweredMetalPipe,
    );


    new CLS_achievement(
      "projreind", "yakitori",
      new TextureRegionDrawable(Core.atlas.find("projreind-pow0trans-copper-wire-relay")),
      TRIGGER.wireTouch,
      function(b, unit) {
        if(unit === Vars.player.unit()) this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "what-are-you-burning",
      new TextureRegionDrawable(Core.atlas.find("projreind-dis0aux-item-incinerator-full")),
      TRIGGER.incineratorExplosion,
    );


    new CLS_achievement(
      "projreind", "no-smoking",
      new TextureRegionDrawable(Core.atlas.find("lovec-icon-fuel")),
      TRIGGER.buildingFireExplosion,
    );


    new CLS_achievement(
      "projreind", "the-ground-is-shaking",
      new TextureRegionDrawable(Core.atlas.find("projreind-min0drl-boulder-class-impact-drill-full")),
      TRIGGER.impactWavePlayerDeath,
    );


    new CLS_achievement(
      "projreind", "cyber-dizziness",
      new TextureRegionDrawable(Core.atlas.find("projreind-pow0tor-brass-cogwheel")),
      TRIGGER.cogwheelUnitSpin,
      function(b, unit) {
        if(unit === Vars.player.unit()) this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "boiler-bomb",
      new TextureRegionDrawable(Core.atlas.find("projreind-pow0boil-primitive-boiler-full")),
      TRIGGER.boilerExplosion,
      function(b) {
        if(Vars.state.isCampaign()) this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "physics-is-gone",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0bio-log")),
      TRIGGER.lootDrown,
      function(loot) {
        if(LCCheck.checkPosVisible(loot.x, loot.y, 8.0) && loot.item().name === "loveclab-item0bio-log") this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "milk-in-the-sewer",
      new TextureRegionDrawable(Core.atlas.find("deep-water")),
      TRIGGER.lootDrown,
      function(loot) {
        if(LCCheck.checkPosVisible(loot.x, loot.y, 8.0) && loot.stack.amount >= 1000) this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "thats-not-remote",
      new TextureRegionDrawable(Core.atlas.find("projreind-dis0aux-remote-core-unloader-full")),
      TRIGGER.remoteCoreUnloaderNearCore,
    );


    /* <------------------------------ production ------------------------------ */


    new CLS_achievement(
      "projreind", "ingot-mining-is-gone",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0ore-native-copper")),
      TRIGGER.itemProduce,
      function(b, itm, amt) {
        if(Vars.state.isCampaign() && itm.name === "loveclab-item0chem-copper") this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "bronze-age",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0chem-tin-bronze")),
      TRIGGER.itemProduce,
      function(b, itm, amt) {
        if(Vars.state.isCampaign() && itm.name === "loveclab-item0chem-tin-bronze") this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "acquire-hardware",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0chem-steel")),
      TRIGGER.itemProduce,
      function(b, itm, amt) {
        if(Vars.state.isCampaign() && itm.name === "loveclab-item0chem-steel") this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "science-power",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0misc-generic-tech-point-t1")),
      TRIGGER.itemProduce,
      function(b, itm, amt) {
        if(Vars.state.isCampaign() && itm.name === "loveclab-item0misc-generic-tech-point-t1") this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "shock-resistant",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0chem-mangalloy")),
      TRIGGER.itemProduce,
      function(b, itm, amt) {
        if(Vars.state.isCampaign() && itm.name === "loveclab-item0chem-mangalloy") this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "better-than-anthracite",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0chem-coke")),
      TRIGGER.itemProduce,
      function(b, itm, amt) {
        if(Vars.state.isCampaign() && itm.name === "loveclab-item0chem-coke") this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "too-many-bricks",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0buil-brick-silica")),
      TRIGGER.contentUnlock,
      function(ct) {
        if(
          Vars.state.isCampaign()
            && fetchContent("loveclab-item0buil-brick-clay").unlocked
            && fetchContent("loveclab-item0buil-brick-magnesia").unlocked
            && fetchContent("loveclab-item0buil-brick-mullite").unlocked
            && fetchContent("loveclab-item0buil-brick-high-alumina").unlocked
            && fetchContent("loveclab-item0buil-brick-silica").unlocked
        ) {
          this.complete();
        };
      },
    );


    new CLS_achievement(
      "projreind", "insulator",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0chem-rubber")),
      TRIGGER.itemProduce,
      function(b, itm, amt) {
        if(Vars.state.isCampaign() && itm.name === "loveclab-item0chem-rubber") this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "no-lungs",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0chem-asbestos-wool")),
      TRIGGER.itemProduce,
      function(b, itm, amt) {
        if(Vars.state.isCampaign() && itm.name === "loveclab-item0chem-asbestos-wool") this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "concrete-wasteland",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0buil-cement")),
      TRIGGER.itemProduce,
      function(b, itm, amt) {
        if(Vars.state.isCampaign() && itm.name === "loveclab-item0buil-cement") this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "my-little-kiln",
      new TextureRegionDrawable(Core.atlas.find("projreind-fac0furn-bricked-blast-furnace-full")),
      TRIGGER.constructionComplete,
      function(b) {
        if(Vars.state.isCampaign() && b.block.name === "projreind-fac0furn-bricked-blast-furnace") this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "you-gotta-wait",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0chem-stainless-steel")),
      TRIGGER.itemProduce,
      function(b, itm, amt) {
        if(Vars.state.isCampaign() && itm.name === "loveclab-item0chem-stainless-steel") this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "final-form-of-copper",
      new TextureRegionDrawable(Core.atlas.find("loveclab-item0chem-cupronickel")),
      TRIGGER.itemProduce,
      function(b, itm, amt) {
        if(Vars.state.isCampaign() && itm.name === "loveclab-item0chem-cupronickel") this.complete();
      },
    );


    /* <------------------------------ special ------------------------------ */


    new CLS_achievement(
      "projreind", "fire-in-the-hole",
      new TextureRegionDrawable(Core.atlas.find("lovec-icon-fire-in-the-hole")),
      TRIGGER.unitDestroy,
      function(unit) {
        if(unit === Vars.player.unit() && Core.settings.getBool("lovec-misc-fire-in-the-hole", false)) this.complete();
      },
    );


    new CLS_achievement(
      "projreind", "as-you-wish",
      new TextureRegionDrawable(Core.atlas.find("lovec-icon-ohno")),
      TRIGGER.secretCodeCrash,
    );


  }, 77016970);
