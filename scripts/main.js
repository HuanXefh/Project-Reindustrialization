/*
  ========================================
  Section: Definition
  ========================================
*/


  if(!checkVersion("projreind", [
    "lovec", "101.2.26050801",
    "loveclab", "101.2.26050801",
  ])) return;


  /* <---------- import ----------> */


  /* <---------- load ----------> */


  require("projreind/ct/CT_BLK_groundDrill");
  require("projreind/ct/CT_BLK_wallDrill");
  require("projreind/ct/CT_BLK_rangeWallDrill");
  require("projreind/ct/CT_BLK_impactDrill");
  require("projreind/ct/CT_BLK_terrainDynamicDrill");
  require("projreind/ct/CT_BLK_oreScanner");
  require("projreind/ct/CT_BLK_manualTimerOreScanner");
  require("projreind/ct/CT_BLK_wallHarvester");
  require("projreind/ct/CT_BLK_dynamicWallHarvester");
  require("projreind/ct/CT_BLK_rangeHarvester");


  require("projreind/ct/CT_BLK_conveyor");
  require("projreind/ct/CT_BLK_stackConveyor");
  require("projreind/ct/CT_BLK_duct");
  require("projreind/ct/CT_BLK_itemJunction");
  require("projreind/ct/CT_BLK_conveyorBridge");
  require("projreind/ct/CT_BLK_router");
  require("projreind/ct/CT_BLK_directionalRouter");
  require("projreind/ct/CT_BLK_filterGate");
  require("projreind/ct/CT_BLK_multiFilterGate");
  require("projreind/ct/CT_BLK_overflowGate");
  require("projreind/ct/CT_BLK_unloader");
  require("projreind/ct/CT_BLK_directionalUnloader");
  require("projreind/ct/CT_BLK_remoteCoreUnloader");
  require("projreind/ct/CT_BLK_incinerator");
  require("projreind/ct/CT_BLK_massDriver");
  require("projreind/ct/CT_BLK_container");
  require("projreind/ct/CT_BLK_lootHopper");
  require("projreind/ct/CT_BLK_lootPullerHopper");
  require("projreind/ct/CT_BLK_lootFilter");


  require("projreind/ct/CT_BLK_manualTimerPump");
  require("projreind/ct/CT_BLK_liquidPump");
  require("projreind/ct/CT_BLK_depthPump");
  require("projreind/ct/CT_BLK_pressurePump");
  require("projreind/ct/CT_BLK_fluidPipe");
  require("projreind/ct/CT_BLK_fluidRouter");
  require("projreind/ct/CT_BLK_directionalFluidRouter");
  require("projreind/ct/CT_BLK_fluidJunction");
  require("projreind/ct/CT_BLK_fluidValve");
  require("projreind/ct/CT_BLK_fluidFilter");
  require("projreind/ct/CT_BLK_fluidPressureValve");
  require("projreind/ct/CT_BLK_fluidPipeBridge");


  require("projreind/ct/CT_BLK_cable");
  require("projreind/ct/CT_BLK_wireRelay");
  require("projreind/ct/CT_BLK_wireNode");
  require("projreind/ct/CT_BLK_consumeGenerator");
  require("projreind/ct/CT_BLK_ventGenerator");


  require("projreind/ct/CT_BLK_cogwheel");
  require("projreind/ct/CT_BLK_gearBox");
  require("projreind/ct/CT_BLK_cogwheelStack");


  require("projreind/ct/CT_BLK_heatSource");
  require("projreind/ct/CT_BLK_boiler");


  require("projreind/ct/CT_BLK_baseFactory");
  require("projreind/ct/CT_BLK_terrainFactory");
  require("projreind/ct/CT_BLK_rainCollector");
  require("projreind/ct/CT_BLK_infoFactory");
  require("projreind/ct/CT_BLK_recipeFactory");
  require("projreind/ct/CT_BLK_furnaceRecipeFactory");
  require("projreind/ct/CT_BLK_electricFurnaceRecipeFactory");
  require("projreind/ct/CT_BLK_durabilityRecipeFactory");
  require("projreind/ct/CT_BLK_fluidRecipeFactory");
  // Not time for this now
  /*runWithDependency("projreind", "multi-block-lib", () => {
    require("projreind/ct/CT_BLK_multiBlockLibRecipeFactory");
  });*/
  require("projreind/ct/CT_BLK_turbineFactory");


  require("projreind/ct/CT_BLK_payloadConveyor");


  require("projreind/ct/CT_BLK_fuelLight");
  require("projreind/ct/CT_BLK_directionalMender");
  require("projreind/ct/CT_BLK_radiusMender");
  require("projreind/ct/CT_BLK_statusProjector");


  require("projreind/ct/CT_BLK_messageBlock");
  require("projreind/ct/CT_BLK_resourceDisplay");
  require("projreind/ct/CT_BLK_directionalSwitch");


  require("projreind/ct/CT_BLK_defenseWall");


  require("projreind/ct/CT_BLK_constructionCore");


  require("projreind/ct/CT_DBCT_infoContent");
  require("projreind/ct/CT_DBCT_dialFlowContent");


  const TP_achievement = require("projreind/tp/TP_achievement");
  const TP_dialFlow = require("projreind/tp/TP_dialFlow");


/*
  ========================================
  Section: Application
  ========================================
*/




  MDL_util.localizeModMeta("projreind");




  MDL_event._c_onLoad(() => {


    // Why are you here?
    if(!Vars.headless) {
      let date = new Date();

      if(date.getMonth() === 3 && date.getDate() === 1) {
        Musics.menu = fetchMusic("noizisfun");
      };

      if(Mathf.chance(0.2)) {
        let tmpSeq = Vars.ui.database.getChildren();
        tmpSeq.get(tmpSeq.size - 1).button("@info.projreind-info-dont-click-me.name", () => Core.app.openURI(
          global.lovecUtil.prop.locale === "zh_CN" ?
          "https://www.bilibili.com/video/BV1GJ411x7h7" :
          "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        )).size(210.0, 64.0);
      };
    };


    // Welcome dialog
    if(!Vars.headless && !Core.app.isMobile()) {
      const data = {};
      data["v102: Hot Furnace"] = [
        "projreind-pow0tor-waterwheel",
        "projreind-fac0furn-bricked-blast-furnace-core",
        "projreind-min0drl-scavenger-class-deposit-drill",
        "projreind-dis0conv-standard-duct",
        "projreind-bliq0stor-pressure-router",
        "projreind-dis0loot-item-picker",
        "projreind-pow0trans-tin-cable",
        "projreind-fac0sep-hydrocyclone",
        "projreind-min0drl-anteater-class-wall-drill",
        "projreind-fac0misc-pollution-detection-center-core",
        "projreind-min0scan-portable-ore-scanner",
      ];
      data["v101: Another Origin"] = [
        "projreind-camp-atm002-lantern-cave",
        "projreind-eff0li-bonfire",
        "projreind-pow0boil-primitive-boiler",
        "projreind-pow0turb-primitive-steam-turbine",
        "projreind-dis0mdr-standard-mass-driver",
        "projreind-log0aux-resource-display-panel",
        "projreind-pow0heat-heat-source",
        "projreind-bliq0pump-piston-pressure-pump",
        "projreind-fac0proc-primitive-forge",
        "projreind-bliq0aux-primitive-pressure-valve",
        "projreind-pow0tor-brass-gear-box",
        "projreind-min0harv-mycelial-harvester",
        "projreind-dis0aux-item-incinerator",
        "projreind-fac0sep-dry-magnetic-separator",
        "projreind-min0drl-topaz-class-sand-miner",
        "projreind-fac0mill-mechanical-mill",
        "projreind-min0drl-boulder-class-impact-drill",
        "projreind-min0scan-alpha-class-ore-scanner",
        "projreind-pay0conv-payload-express-way",
        "projreind-min0harv-tree-tap",
        "projreind-camp-atm001-sector-beta",
        "projreind-pow0tor-brass-cogwheel",
        "projreind-bliq0pump-portable-manual-pump",
        "projreind-dis0aux-remote-core-unloader",
        "projreind-eff0proj-haste-projector",
        "projreind-bliq0aux-fluid-valve",
        "projreind-eff0proj-local-repairer",
        "projreind-pow0trans-copper-cable",
        "projreind-fac0mill-jaw-crusher",
        "projreind-dis0loot-item-hopper",
        "projreind-fac0furn-kiln",
        "projreind-min0harv-lumberjack",
        "projreind-dis0aux-filter-gate",
        "projreind-min0drl-survivor-drill",
      ];




      const winWelcome = new CLS_window(MDL_bundle._info("projreind", "dial-welcome"), cont => {
        let tipCap = 0;
        while(Core.bundle.has("dial.projreind-tip-" + tipCap)) {
          tipCap++;
        };
        tipCap--;

        // <TABLE>: text
        cont.table(Styles.none, tb => {
          tb.pane(pnTb => {
            pnTb.left();
            MDL_table.__margin(pnTb);
            pnTb.image(Core.atlas.find("projreind-logo")).left().width(468.0).height(120.0).row();
            MDL_table.__break(pnTb, 3);
            MDL_table.__wrapLine(pnTb, MDL_bundle._info("projreind", "dial-welcome", true), Align.left, 1);
          });
          MDL_table.__break(tb);
          tb.table(Styles.none, tb1 => {
            MDL_table.__btn(tb1, "@close", () => winWelcome.close());
            MDL_table.__btn(tb1, MDL_bundle._info("projreind", "dial-credits"), () => dialCredits.ex_show());
            MDL_table.__btn(tb1, "Repo", () => Core.app.openURI("https://github.com/HuanXefh/Project-Reindustrialization"));
          });
        }).growX().growY();

        // <TABLE>: splitor
        cont.table(Styles.none, tb => {
          MDL_table.__barV(tb, Pal.accent, null, 8.0);
        }).marginLeft(50.0).marginRight(50.0).growY();

        // <TABLE>: updates
        const cellUpdate = cont.table(Styles.none, tb => {
          tb.pane(pnTb => {
            MDL_table.__margin(pnTb);
            Object._it(data, (verStr, nmCts) => {
              pnTb.button(verStr, () => fetchDialog("ctsRow").ex_show(verStr, nmCts)).center().size(300.0, 50.0).row();
              MDL_table.__break(pnTb, 1);
            });
          }).grow();
          tb.row();

          let textGlbInd = 0;
          tb.button(new TextureRegionDrawable(Core.atlas.find("projreind-earlan")), Styles.clearNonei, 64.0, () => {
            let textEnd = false;
            let textInd = ++textGlbInd;
            MDL_ui._d_chara(0.0, "lovec", "earlan", () => textEnd || textInd < textGlbInd, 0.5, false, "fade-in");
            MDL_ui._d_text(0.0, ["projreind", "tip", tipCap.randInt()], ["lovec", "earlan"], () => {textEnd = true; MDL_ui.clearDialFlow()}, null, () => textInd < textGlbInd);
          }).right().padTop(32.0);
        }).grow();
      });
      winWelcome.setSizeRange(null, MDL_ui._screenW(), null, MDL_ui._screenH() * 0.8);




      const dialCredits = extend(BaseDialog, MDL_bundle._info("projreind", "dial-credits"), {


        ex_show() {
          this.cont.clear();
          this.buttons.clear();

          // <TABLE>: info
          MDL_table.__break(this.cont);
          MDL_table._d_note(this.cont, MDL_bundle._info("projreind", "dial-credits", true));

          // <TABLE>: bar
          MDL_table.__break(this.cont);
          MDL_table.__bar(this.cont, null, MDL_ui._uiW());

          // <TABLE>: content
          MDL_table.__break(this.cont);
          this.cont.pane(pnTb => {
            MDL_table.__margin(pnTb);
            pnTb.add(String.multiline(
              "Ideas:",
              "  > MaboroshiX",
              "  > Everyone in the Reind discussion group",
              "",
              "Programming:",
              "  > MaboroshiX",
              "",
              "Spriting:",
              "  > MaboroshiX",
              "  > Starshine - support",
              "",
              "Map Making:",
              "  > MaboroshiX",
              "",
              "Translation:",
              "  > MaboroshiX - EN and CN",
              "",
              "Acknowledgement & Dedication:",
              "  [green][Website][]",
              "  > [accent]Pixabay[] - raw sound effects",
              "  [green][Video Game][]",
              "  > [accent]Rusted Warfare[] - RTS ideas",
              "  [green][Minecraft Mod][]",
              "  > [accent]Create[] - torque mechanics ideas",
              "  > [accent]Greg's Tech[] - industrialization ideas",
              "  > [accent]Immersive Engineering[] - industrialization ideas",
              "  [green][Mindustry Mod][]",
              "  > [accent]Asthosus[] - HJSON introduction",
              "  > [accent]Fictional Octo System[] - underground ore ideas",
              "  > [accent]Meepscellaneous Concepts[] - pseudo-3D ideas",
              "  > [accent]MultiCrafter Lib[] - multi-crafter ideas",
              "  > [accent]Sapphirium[] - JavaScript introduction",
              "  > [accent]TooManyItems[] - less suffering from complexity",
              "  [green][Book][]",
              "  > [accent]Encyclopedia of Materials: Science and Technology[]",
            )).left().row();
          }).width(MDL_ui._uiW()).row();

          // <TABLE>: buttons
          MDL_table.__break(this.cont);
          MDL_table.__btnClose(this.buttons, this);

          this.show();
        },


      });




      winWelcome.add();
    };


  }, 45457920);
