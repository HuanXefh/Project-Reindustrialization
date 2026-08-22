/*
  ========================================
  Section: Definition
  ========================================
*/


  if(!checkVersion("projreind", [
    "lovec", "101.4.26082202",
    "loveclab", "101.4.26082202",
  ])) {
    let mod1 = fetchMod("lovec");
    let mod2 = fetchMod("projreind");
    if(mod1.meta.version.match(/\./g).length === 1 && mod2.meta.version.match(/\./g).length === 2) {
      Events.run(ClientLoadEvent, () => Vars.ui.showErrorMessage(String.multiline(
        "",
        "Version mismatch detected!".color(Pal.remove),
        "",
        "",
        "Lovec: ${1}".format(mod1.meta.version).color(Color.gray),
        "ProjReind: ${1}".format(mod2.meta.version).color(Color.gray),
        "",
        "",
        "Do not download ProjReind and its dependencies from ${1} directly,".format("Mod Browser".color(Pal.remove)),
        "or by any means of ${1} like quick update in ${2},".format("auto-download".color(Pal.remove), "Mods".color(Pal.accent)),
        "which searches latest version differently for Java mods and JSON/JavaScript mods!",
        "",
        "Delete local zip files of ProjReind and LovecLab,",
        "then download latest version from ${1} or ${2} manually.".format("View Releases".color(Pal.accent), "GitHub repo".color(Pal.accent)),
        "",
        "If the error persists, contact me on GitHub or Discord.",
        "",
        "",
      )));
    };

    throw new Error("Failed loading Projreind due to version mismatch.");
  };


  if([
    "科技树全解锁",
    "research-unlockker",
    "unlock-tech-tree-mod",
  ].some(name => fetchMod(name) != null)) {
    Events.run(ClientLoadEvent, () => Vars.ui.showStartupInfo(MDL_bundle.getInfo("projreind", "tech-tree-cheat-warn")));
  };


  /* <---------- import ----------> */


  /* <---------- load ----------> */


  require("projreind/ct/CT_BLK_baseDrill");
  require("projreind/ct/CT_BLK_oreScanner");
  require("projreind/ct/CT_BLK_baseHarvester");


  require("projreind/ct/CT_BLK_conveyor");
  require("projreind/ct/CT_BLK_duct");
  require("projreind/ct/CT_BLK_itemArm");
  require("projreind/ct/CT_BLK_conveyorBridge");
  require("projreind/ct/CT_BLK_baseItemGate");
  require("projreind/ct/CT_BLK_massDriver");
  require("projreind/ct/CT_BLK_container");
  require("projreind/ct/CT_BLK_baseLootBlock");


  require("projreind/ct/CT_BLK_liquidPump");
  require("projreind/ct/CT_BLK_pressurePump");
  require("projreind/ct/CT_BLK_fluidPipe");
  require("projreind/ct/CT_BLK_fluidPipeBridge");
  require("projreind/ct/CT_BLK_baseFluidDistributor");
  require("projreind/ct/CT_BLK_fluidRouter");


  require("projreind/ct/CT_BLK_incinerator");


  require("projreind/ct/CT_BLK_basePowerTransmitter");
  require("projreind/ct/CT_BLK_baseGenerator");


  require("projreind/ct/CT_BLK_baseTorqueBlock");


  require("projreind/ct/CT_BLK_heatConductor");
  require("projreind/ct/CT_BLK_heatProducer");
  require("projreind/ct/CT_BLK_heatSource");
  require("projreind/ct/CT_BLK_boiler");


  require("projreind/ct/CT_BLK_baseFactory");
  require("projreind/ct/CT_BLK_turbineFactory");


  require("projreind/ct/CT_BLK_payloadConveyor");


  require("projreind/ct/CT_BLK_light");
  require("projreind/ct/CT_BLK_baseMender");
  require("projreind/ct/CT_BLK_statusProjector");


  require("projreind/ct/CT_BLK_baseLogicBlock");
  require("projreind/ct/CT_BLK_resourceDisplay");


  require("projreind/ct/CT_BLK_defenseWall");


  require("projreind/ct/CT_BLK_constructionCore");


  require("projreind/ct/CT_DBCT_techNodeContent");
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




  MDL_event.onLoad(() => {


    // Why are you here?
    if(!Vars.headless) {
      if(PARAM.SECRET_APRIL) {
        Musics.menu = fetchMusic("noizisfun");
      };

      if(Mathf.chance(0.2)) {
        MDL_util.addDatabaseButton(
          MDL_bundle.getInfo("projreind", "dont-click-me"),
          () => {
            Core.app.openURI(
              global.lovecUtil.prop.locale === "zh_CN" ?
                "https://www.bilibili.com/video/BV1GJ411x7h7" :
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            );
          },
        );
      };
    };


    // Welcome dialog
    if(!Vars.headless && fetchSetting("misc-enable-window")) {
      const data = {};
      data["v102: Hot Furnace"] = [
        "projreind-pow0gen-wind-turbogenerator",
        "projreind-bliq0stor-concrete-reservoir",
        "projreind-min0harv-chomper-mk2",
        "projreind-fac0proc-mechanical-assembler",
        "projreind-bliq0aux-tail-gas-burner",
        "projreind-dis0arm-primitive-item-arm",
        "projreind-fac0bio-moss-cultivator",
        "projreind-pow0heat-resistance-heater",
        "projreind-pow0heat-combustion-heater",
        "projreind-bliq0aux-fluid-unloader",
        "projreind-bliq0aux-fluid-overflow-valve",
        "projreind-eff0stor-remote-core-relay",
        "projreind-min0drl-primitive-burner-drill",
        "projreind-fac0misc-laboratory",
        "projreind-dbct0tech-utility-crafting",
        "projreind-pow0heat-copper-heat-conductor-plate",
        "projreind-pow0tor-waterwheel",
        "projreind-fac0furn-bricked-blast-furnace-core",
        "projreind-min0drl-scavenger-class-deposit-drill",
        "projreind-dis0conv-standard-duct",
        "projreind-bliq0aux-pressure-router",
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
        "projreind-pow0tor-primitive-steam-turbine",
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




      const winWelcome = new CLS_window(MDL_bundle.getInfo("projreind", "dial-welcome"), cont => {
        let tipCap = 0;
        while(Core.bundle.has("dial.projreind-tip-" + tipCap)) {
          tipCap++;
        };
        tipCap--;

        // `TABLE`: text
        cont.table(Styles.none, tb => {
          tb.pane(pnTb => {
            pnTb.left();
            MDL_table.margin(pnTb);
            pnTb.image(Core.atlas.find("projreind-logo")).left().width(468.0).height(120.0).row();
            MDL_table.br(pnTb, 3);
            MDL_table.wrapLine(pnTb, MDL_bundle.getInfo("projreind", "dial-welcome", true), Align.left, 1);
          });
          MDL_table.br(tb);
          tb.table(Styles.none, tb1 => {
            MDL_table.btn(tb1, "@close", () => winWelcome.close());
            MDL_table.btn(tb1, MDL_bundle.getInfo("projreind", "dial-credits"), () => dialCredits.ex_show());
            MDL_table.btn(tb1, "Repo", () => Core.app.openURI("https://github.com/HuanXefh/Project-Reindustrialization"));
          });
        }).growX().growY();

        // `TABLE`: splitor
        cont.table(Styles.none, tb => {
          MDL_table.barV(tb, Pal.accent, null, 8.0);
        }).marginLeft(50.0).marginRight(50.0).growY();

        // `TABLE`: updates
        const cellUpdate = cont.table(Styles.none, tb => {
          tb.pane(pnTb => {
            MDL_table.margin(pnTb);
            Object.eachPair(data, (verStr, nameCts) => {
              pnTb.button(verStr, () => fetchDialog("ctsRow").ex_show(verStr, nameCts)).center().size(300.0, 50.0).row();
              MDL_table.br(pnTb, 1);
            });
          }).grow();
          tb.row();

          let clickCount = 0, lastClickTime = 0.0;
          let textGlbInd = 0;
          tb.button(new TextureRegionDrawable(Core.atlas.find("projreind-earlan")), Styles.clearNonei, 64.0, () => {
            if(Time.globalTime - lastClickTime < 30.0) {
              if(clickCount >= 10) {
                Sounds.wind3.play();
                winWelcome.close();
                MDL_ui.clearDialFlow();
                return;
              };
              clickCount++;
            } else {
              clickCount = 0;
            };
            lastClickTime = Time.globalTime;

            let textEnd = false;
            let textInd = ++textGlbInd;
            MDL_ui.createChara(0.0, "lovec", "earlan", () => textEnd || textInd < textGlbInd, 0.5, false, "fade-in");
            MDL_ui.createText(0.0, ["projreind", "tip", tipCap.randInt()], ["lovec", "earlan"], () => {textEnd = true; MDL_ui.clearDialFlow()}, null, () => textInd < textGlbInd);
          }).right().padTop(32.0);
        }).grow();
      });
      winWelcome.setSizeRange(null, MDL_ui.getScreenW(), null, MDL_ui.getScreenH() * 0.8);




      const dialCredits = extend(BaseDialog, MDL_bundle.getInfo("projreind", "dial-credits"), {


        ex_show() {
          this.cont.clear();
          this.buttons.clear();

          // `TABLE`: info
          MDL_table.br(this.cont);
          MDL_table.setNote(this.cont, MDL_bundle.getInfo("projreind", "dial-credits", true));

          // `TABLE`: bar
          MDL_table.br(this.cont);
          MDL_table.bar(this.cont, null, MDL_ui.getUiW());

          // `TABLE`: content
          MDL_table.br(this.cont);
          this.cont.pane(pnTb => {
            MDL_table.margin(pnTb);
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
              "  > Starshine - Sprite support.",
              "",
              "Map Making:",
              "  > MaboroshiX",
              "",
              "Translation:",
              "  > MaboroshiX - EN and CN",
              "",
              "Acknowledgement & Dedication:",
              "  [green][Website][]",
              "  > [accent]Pixabay[] - Raw sound effects.",
              "  [green][Video Game][]",
              "  > [accent]Factorio[] - The factory must grow.",
              "  > [accent]Rusted Warfare[] - RTS ideas.",
              "  [green][Minecraft Mod][]",
              "  > [accent]Create[] - Torque mechanics ideas.",
              "  > [accent]Greg's Tech[] - Industrialization ideas.",
              "  > [accent]Immersive Engineering[] - Industrialization ideas.",
              "  [green][Factorio Mod][]",
              "  > [accent]PyMods[] - How to produce suffering.",
              "  [green][Mindustry Mod][]",
              "  > [accent]Asthosus[] - HJSON introduction.",
              "  > [accent]Fictional Octo System[] - Underground ore ideas.",
              "  > [accent]Meepscellaneous Concepts[] - Pseudo-3D ideas.",
              "  > [accent]MultiBlockLib - Multi-block structure ideas",
              "  > [accent]MultiCrafter Lib[] - Multi-crafter ideas.",
              "  > [accent]Sapphirium[] - JavaScript introduction.",
              "  > [accent]TooManyItems[] - Less suffering from complexity.",
              "  [green][Book][]",
              "  > [accent]Encyclopedia of Materials: Science and Technology[]",
            )).left().row();
          }).width(MDL_ui.getUiW()).row();

          // `TABLE`: buttons
          MDL_table.br(this.cont);
          MDL_table.btnClose(this.buttons, this);

          this.show();
        },


      });




      winWelcome.add();
    };


  });
