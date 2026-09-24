/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_crop = require("lovec/temp/blk/BLK_crop");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ min0crop ------------------------------> */


    const min0crop_aerthSisal = extendBlock(
        BLK_B_crop, "min0crop-aerth-sisal",
        BLK_B_crop[0].build({
            cropParent: "loveclab-item0bio-aerth-sisal",
            cropData: [
                {
                    dur: 14400.0,
                    static: true,
                    z: VAR.layer.cropSeed,
                },
                {
                    dur: 14400.0,
                    z: VAR.layer.cropLow,
                    scl: 0.5,
                    mag: 0.5,
                    wob: 0.5,
                    offSha: -0.5
                },
                {
                    dur: 19200.0,
                    z: VAR.layer.cropLow,
                    scl: 0.5,
                    mag: 0.5,
                    wob: 0.5,
                    offSha: -1.0,
                },
                {
                    dur: 0.0,
                    item: "loveclab-item0bio-aerth-sisal",
                    amt: 80,
                    p: 0.5,
                    rad: 7.0,
                    hidable: true,
                    z: VAR.layer.cropTall,
                    offSha: -2.0,
                },
            ],
            ters: ["dirt", "sand"],
        }),
    );
