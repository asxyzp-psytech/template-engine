/**
 * FUNCTION: validateMapping(template, dataMap)
 * FUNCTIONALITY: VALIDATES TEMPLATE AND DATA MAP
 * @param {object} template TEMPLATE DATA
 * @param {object} dataMap DATA MAP
 * @return {boolean} WHETHER THE MAPPING IS VALID OR NOT
 */
function mapping(template, dataMap) {

    // KEYS OF TEMPLATE ELEMENTS
    const templateElementKeyValues = ["id","parent","children","text","design"];

    // VALIDATING TEMPLATE & DATA MAP DATA TYPES
    if (!(typeof template === 'object' && typeof dataMap === 'object')) {
        throw new Error("VALIDATION ERROR: BOTH template & dataMap SHOULD BE OF OBJECT TYPE");
    }
    // VALIDATING WHETHER DATA MAP IS FOR THE GIVEN TEMPLATE OR NOT
    if(!(template.id === dataMap.for)){
        throw new Error(`VALIDATION ERROR: DATA MAP WITH ID ${dataMap.id} IS NOT MAPPED TO TEMPLATE WITH ID ${template.id}`);
    }

    // VALIDATING DATA MAP KEYS WITH TEMPLATE LAYOUT ELEMENTS
    // STORING TEMPLATE ELEMENT & DATA MAP KEYS
    const dataMapKeys = Object.keys(dataMap.element);
    const templateElementKeys = Object.keys(template.element);
    dataMapKeys.forEach(dataMapKey => {
        if(!templateElementKeys.includes(dataMapKey)){
            throw new Error(`VALIDATION ERROR: DATA MAP WITH ID ${dataMap.id}, CONTAINS AN INVALID TEMPLATE KEY ${dataMapKey}`);
        }
    });

    // VALIDATING KEY OF EACH dataMap #TBD
    // IF VALIDATIONS ARE PASSED THEN RETURN true
    return true;
}

module.exports = mapping;