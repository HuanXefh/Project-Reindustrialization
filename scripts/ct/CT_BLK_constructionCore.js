/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_constructionCore");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- fac0misc ----------> */


  const fac0misc_pollutionDetectionCenterCore = extendBlock(
    TEMPLATE, "fac0misc-pollution-detection-center-core",
    TEMPLATE[0].build({
      constructionData: [
        ["projreind-pay0mat-copper-block", "projreind-pay0mat-lead-block", "projreind-pay0mat-lead-block", "projreind-pay0mat-copper-block"],
        ["projreind-pay0mat-lead-block", null, null, "projreind-pay0mat-lead-block"],
        ["projreind-pay0mat-lead-block", "SPEC: this", null, "projreind-pay0mat-lead-block"],
        ["projreind-pay0mat-copper-block", "projreind-pay0mat-lead-block", "projreind-pay0mat-lead-block", "projreind-pay0mat-copper-block"],
      ],
      placeBlk: "projreind-fac0misc-pollution-detection-center",
      constructionTimeReq: 1.5 * 60.0 * 60.0,
    }),
  );
