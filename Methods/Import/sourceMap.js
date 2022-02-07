//IMPORTING MODULES/PACKAGES
const fs = require('fs');

/**
 * FUNCTION: mapping(path)
 * FUNCTIONALITY: IMPORTS DATA MAPS FROM JSON FILE 
 * @param {String} path: PATH OF THE JSON FILE
 * @returns {Array} DataMap : ARRAY OF DATA MAPS
 */
function dataMap(path) {

    //CHECKING FILE TYPE FROM PATH NAME
    if (!path.includes(".json")) {
        throw new Error("IMPORT ERROR: INVALID FILE TYPE. NEED .json FILE AS INPUT");
    }
    else {
        //CHECKING WHETHER THE FILE EXISTS OR NOT
        if (!fs.existsSync(path)) {
            throw new Error(`IMPORT ERROR: FILE ${path} DOES NOT EXISTS`);
        }
        else {
            // PARSING JSON FILE
            const JSONData = JSON.parse(fs.readFileSync(path, { encoding: "utf8" }));

            // VALIDATING BASIC STRUCTURE OF THE DATA MAP FILE
            if (!(Object.keys(JSONData).includes("data") && Array.isArray(JSONData.data))) {
                throw new Error("TYPE ERROR: IMPORTED JSON FILE'S KEY data, SHOULD BE ASSIGNED TO AN ARRAY");
            }
            if (!(Object.keys(JSONData).includes("count") && typeof JSONData.count === "number")) {
                throw new Error("TYPE ERROR: IMPORTED JSON FILE'S KEY count SHOULD BE ASSIGNED TO A NUMBER");
            }
            
            return JSONData;
        }
    }
}

module.exports = dataMap;