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


  /* <---------- fac0furn ----------> */


  const fac0furn_cokeOvenBatteryCore = extendBlock(
    TEMPLATE, "fac0furn-coke-oven-battery-core",
    TEMPLATE[0].build({
      constructionData: [
        [null, null, "projreind-pay0mat-brick-mullite", null, null],
        ["projreind-fac0furn-primitive-coke-oven", null, "projreind-pay0mat-brick-magnesia", "projreind-fac0furn-primitive-coke-oven", null],
        ["projreind-pay0mat-brick-mullite", "projreind-pay0mat-brick-magnesia", "SPEC: this", "projreind-pay0mat-brick-magnesia", "projreind-pay0mat-brick-mullite"],
        [null, null, "projreind-pay0mat-brick-magnesia", null, null],
        ["projreind-fac0furn-primitive-coke-oven", null, "projreind-pay0mat-brick-mullite", "projreind-fac0furn-primitive-coke-oven", null],
      ],
      placeBlk: "projreind-fac0furn-coke-oven-battery",
      constructionTimeReq: 1.2 * 60.0 * 60.0,
    }),
  );


  /* <---------- fac0misc ----------> */


  const fac0misc_pollutionDetectionCenterCore = extendBlock(
    TEMPLATE, "fac0misc-pollution-detection-center-core",
    TEMPLATE[0].build({
      constructionData: [
        ["projreind-pay0mat-steel-block", "projreind-pay0mat-lead-block", "projreind-pay0mat-lead-block", "projreind-pay0mat-steel-block"],
        ["projreind-pay0mat-lead-block", null, null, "projreind-pay0mat-lead-block"],
        ["projreind-pay0mat-lead-block", "SPEC: this", null, "projreind-pay0mat-lead-block"],
        ["projreind-pay0mat-steel-block", "projreind-pay0mat-lead-block", "projreind-pay0mat-lead-block", "projreind-pay0mat-steel-block"],
      ],
      placeBlk: "projreind-fac0misc-pollution-detection-center",
      constructionTimeReq: 1.5 * 60.0 * 60.0,
    }),
  );
