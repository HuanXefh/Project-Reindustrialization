/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_constructionCore = require("lovec/temp/blk/BLK_constructionCore");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ fac0furn ------------------------------> */


    const fac0furn_brickedBlastFurnaceCore = extendBlock(
        BLK_B_constructionCore, "fac0furn-bricked-blast-furnace-core",
        BLK_B_constructionCore[0].build({
            constructionData: [
                ["loveclab-pay0mat-brick-mullite", "loveclab-pay0mat-brick-magnesia", "loveclab-pay0mat-brick-magnesia", "loveclab-pay0mat-brick-mullite"],
                ["loveclab-pay0mat-brick-magnesia", null, null, "loveclab-pay0mat-brick-magnesia"],
                ["loveclab-pay0mat-brick-magnesia", "SPEC: this", null, "loveclab-pay0mat-brick-magnesia"],
                ["loveclab-pay0mat-brick-mullite", "loveclab-pay0mat-brick-magnesia", "loveclab-pay0mat-brick-magnesia", "loveclab-pay0mat-brick-mullite"],
            ],
            placeBlk: "projreind-fac0furn-bricked-blast-furnace",
            constructionTimeReq: 0.25 * 60.0 * 60.0,
        }),
    );


    const fac0furn_cokeOvenBatteryCore = extendBlock(
        BLK_B_constructionCore, "fac0furn-coke-oven-battery-core",
        BLK_B_constructionCore[0].build({
            constructionData: [
                [null, null, "loveclab-pay0mat-brick-mullite", null, null],
                ["projreind-fac0furn-primitive-coke-oven", null, "loveclab-pay0mat-brick-magnesia", "projreind-fac0furn-primitive-coke-oven", null],
                ["loveclab-pay0mat-brick-mullite", "loveclab-pay0mat-brick-magnesia", "SPEC: this", "loveclab-pay0mat-brick-magnesia", "loveclab-pay0mat-brick-mullite"],
                [null, null, "loveclab-pay0mat-brick-magnesia", null, null],
                ["projreind-fac0furn-primitive-coke-oven", null, "loveclab-pay0mat-brick-mullite", "projreind-fac0furn-primitive-coke-oven", null],
            ],
            placeBlk: "projreind-fac0furn-coke-oven-battery",
            constructionTimeReq: 0.5 * 60.0 * 60.0,
        }),
    );


    /* <------------------------------ fac0misc ------------------------------> */


    const fac0misc_pollutionDetectionCenterCore = extendBlock(
        BLK_B_constructionCore, "fac0misc-pollution-detection-center-core",
        BLK_B_constructionCore[0].build({
            constructionData: [
                ["loveclab-pay0mat-steel-block", "loveclab-pay0mat-lead-block", "loveclab-pay0mat-lead-block", "loveclab-pay0mat-steel-block"],
                ["loveclab-pay0mat-lead-block", null, null, "loveclab-pay0mat-lead-block"],
                ["loveclab-pay0mat-lead-block", "SPEC: this", null, "loveclab-pay0mat-lead-block"],
                ["loveclab-pay0mat-steel-block", "loveclab-pay0mat-lead-block", "loveclab-pay0mat-lead-block", "loveclab-pay0mat-steel-block"],
            ],
            placeBlk: "projreind-fac0misc-pollution-detection-center",
            constructionTimeReq: 0.5 * 60.0 * 60.0,
        }),
    );
