/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_crop");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- min0crop ----------> */


  const min0crop_aerthSisal = extendBlock(
    TEMPLATE, "min0crop-aerth-sisal",
    TEMPLATE[0].build({
      cropParent: "loveclab-item0bio-aerth-sisal",
      cropData: [
        {
          dur: 7200.0,
          static: true,
          z: VAR.layer.cropSeed,
        },
        {
          dur: 7200.0,
          z: VAR.layer.cropLow,
          scl: 0.5,
          mag: 0.5,
          wob: 0.5,
          offSha: -0.5
        },
        {
          dur: 9600.0,
          z: VAR.layer.cropLow,
          scl: 0.5,
          mag: 0.5,
          wob: 0.5,
          offSha: -1.0,
        },
        {
          dur: 0.0,
          itm: "loveclab-item0bio-aerth-sisal",
          amt: 80,
          p: 0.25,
          rad: 7.0,
          canHide: true,
          z: VAR.layer.cropTall,
          offSha: -2.0,
        },
      ],
      ters: ["dirt", "sand"],
    }),
  );
