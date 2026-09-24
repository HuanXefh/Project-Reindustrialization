const rc = {


    // craftTime: 60s


    base: {},


    recipe: [],


};


runRecipeGeneration(rc, "lovec", "alloyFurnace", {
    objF: obj => {
        switch(obj.icon) {
            case "loveclab-item0chem-leaded-tin-bronze" :
                // Should not be produced in Sector Beta
                obj.lockedBy = [
                    "loveclab-item0ore-hematite",
                    "loveclab-item0ore-magnetite",
                ];
                break;
        };
    },
    amt: 60,
    pO: 0.5,
    maxTemp: 1800.0,
});


exports.rc = rc;
