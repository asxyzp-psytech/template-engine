/**
 * FUNCTION: validateMapping(template, dataMap)
 * FUNCTIONALITY: VALIDATES TEMPLATE AND SOURCE DATA MAP
 * @param {object} template TEMPLATE DATA
 * @param {object} dataMap SOURCE DATA MAP
 * @return {true} WHEN TEMPLATE TO SOURCE DATA MAPPING IS VALID
 */
function mapping(template, dataMap) {

    // KEYS OF TEMPLATE ELEMENTS
    const requiredElementKeys = ["id", "parent", "children", "text", "design", "type"];

    // VALIDATING TEMPLATE & DATA MAP DATA TYPE
    if (!(typeof template === 'object' && typeof dataMap === 'object')) {
        throw new Error("VALIDATION ERROR: BOTH template & dataMap SHOULD BE OF OBJECT TYPE");
    }

    // VALIDATING WHETHER THE SOURCE MAP IS RELEVANT 'FOR' A GIVEN TEMPLATE
    if (!(template.id === dataMap.for)) {
        throw new Error(`VALIDATION ERROR: DATA MAP WITH ID ${dataMap.id} IS NOT MAPPED TO TEMPLATE WITH ID ${template.id}`);
    }

    // VALIDATING WHETHER DATA MAP ELEMENT KEY IS A VALID TEMPLATE ELEMENT KEYS
    const dataMapKeys = Object.keys(dataMap.element);
    const templateElementKeys = Object.keys(template.element);
    dataMapKeys.forEach(dataMapKey => {
        if (!templateElementKeys.includes(dataMapKey)) {
            throw new Error(`VALIDATION ERROR: DATA MAP WITH ID ${dataMap.id}, CONTAINS AN INVALID TEMPLATE KEY ${dataMapKey}`);
        }
    });

    /* 
        VALIDATING WHETHER DATA MAP ELEMENTS HAVE APPROPRIATE KEYS OR NOT
        e.g.
        {
            id1: { "children": "XYZ" => VALID KEY NAME "children" },
            id2: { "property": "XYZ" => INVALID KEY NAME "property". SHOULD BE "properties" }
        }
    */
    dataMapKeys.forEach((dataMapKey) => {
        Object.keys(dataMap.element[dataMapKey]).forEach(
            (dataMapElementKey) => {
                if (!requiredElementKeys.includes(dataMapElementKey)) {
                    throw new Error(`DATA MAP ELEMENT ${dataMapKey} HAS INVALID MAPPING FOR KEY ${dataMapElementKey}`);
                }
            }
        );
    });

    // RETURNS true IF NO ERROR IS THROWN
    return true;
}

module.exports = mapping;