/*
  ========================================
  Section: Definition
  ========================================
*/


    const BLK_B_wireRelay = require("lovec/temp/blk/BLK_wireRelay");
    const BLK_B_wireNode = require("lovec/temp/blk/BLK_wireNode");
    const BLK_B_cable = require("lovec/temp/blk/BLK_cable");
    const BLK_B_armoredCable = require("lovec/temp/blk/BLK_armoredCable");
    const BLK_B_auxiliaryCable = require("lovec/temp/blk/BLK_auxiliaryCable");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ pow0trans ------------------------------> */


    const pow0trans_copperCable = extendBlock(
        BLK_B_cable, "pow0trans-copper-cable",
        BLK_B_cable[0].build({
            maxPowProdAllowed: 7500.0 / 60.0,
        }),
    );


    const pow0trans_insulatedCopperCable = extendBlock(
        BLK_B_armoredCable, "pow0trans-insulated-copper-cable",
        BLK_B_armoredCable[0].build({
            maxPowProdAllowed: 5000.0 / 60.0,
        }),
    );


    const pow0trans_tinCable = extendBlock(
        BLK_B_auxiliaryCable, "pow0trans-tin-cable",
        BLK_B_auxiliaryCable[0].build({
            maxPowProdAllowed: 1000.0 / 60.0,
            transmitterOverloadDmgScl: 2.5,
        }),
    );


    const pow0trans_copperWireRelay = extendBlock(
        BLK_B_wireRelay, "pow0trans-copper-wire-relay",
        BLK_B_wireRelay[0].build({
            wireMat: "copper",
            wireTouchDmg: 20.0,
            maxPowProdAllowed: 5000.0 / 60.0,
        }),
    );


    const pow0trans_copperWireDistributor = extendBlock(
        BLK_B_wireRelay, "pow0trans-copper-wire-distributor",
        BLK_B_wireRelay[0].build({
            wireMat: "copper",
            wireTouchDmg: 20.0,
            maxPowProdAllowed: 5000.0 / 60.0,
        }),
    );


    const pow0trans_copperWireNode = extendBlock(
        BLK_B_wireNode, "pow0trans-copper-wire-node",
        BLK_B_wireNode[0].build({
            wireMat: "copper",
            wireTouchDmg: 20.0,
            linkMode: "cons",
            minRadFrac: 0.25,
            maxPowProdAllowed: 5000.0 / 60.0,
        }),
    );


    const pow0trans_copperWireRemoteNode = extendBlock(
        BLK_B_wireNode, "pow0trans-copper-wire-remote-node",
        BLK_B_wireNode[0].build({
            wireMat: "copper",
            wireTouchDmg: 30.0,
            linkMode: "remote-node",
            minRadFrac: 0.65,
            maxPowProdAllowed: 5000.0 / 60.0,
        }),
    );
