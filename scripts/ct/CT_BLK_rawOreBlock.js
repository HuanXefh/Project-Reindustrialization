/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_rawOreBlock");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pay0mat0ore ----------> */


  /* copper */


  const pay0mat0ore_nativeCopper = extendBlock(
    TEMPLATE, "pay0mat0ore-native-copper",
    TEMPLATE[0].build({
      recolorRegStr: "lovec-gen-raw-ore-1"
    }),
  );


  /* iron */


  const pay0mat0ore_hematite = extendBlock(
    TEMPLATE, "pay0mat0ore-hematite",
    TEMPLATE[0].build({
      recolorRegStr: "lovec-gen-raw-ore-1"
    }),
  );


  const pay0mat0ore_magnetite = extendBlock(
    TEMPLATE, "pay0mat0ore-magnetite",
    TEMPLATE[0].build({
      recolorRegStr: "lovec-gen-raw-ore-3"
    }),
  );


  /* lead */


  const pay0mat0ore_galena = extendBlock(
    TEMPLATE, "pay0mat0ore-galena",
    TEMPLATE[0].build({
      recolorRegStr: "lovec-gen-raw-ore-1"
    }),
  );


  /* tin */


  const pay0mat0ore_cassiterite = extendBlock(
    TEMPLATE, "pay0mat0ore-cassiterite",
    TEMPLATE[0].build({
      recolorRegStr: "lovec-gen-raw-ore-1"
    }),
  );


  /* zinc */


  const pay0mat0ore_sphalerite = extendBlock(
    TEMPLATE, "pay0mat0ore-sphalerite",
    TEMPLATE[0].build({
      recolorRegStr: "lovec-gen-raw-ore-1"
    }),
  );


  /* rock */


  const pay0mat0ore_dolomite = extendBlock(
    TEMPLATE, "pay0mat0ore-dolomite",
    TEMPLATE[0].build({
      recolorRegStr: "lovec-gen-raw-ore-2"
    }),
  );


  const pay0mat0ore_limestone = extendBlock(
    TEMPLATE, "pay0mat0ore-limestone",
    TEMPLATE[0].build({
      recolorRegStr: "lovec-gen-raw-ore-2"
    }),
  );
