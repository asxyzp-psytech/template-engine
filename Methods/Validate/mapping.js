// IMPORTING MODULES/PACKAGES
const Keys = require('../../keys');
const requiredElementKeys = Keys.templateElement;

/**
 * FUNCTION: validateMapping(template, sourceMap)
 * FUNCTIONALITY: VALIDATES TEMPLATE AND SOURCE SOURCE MAP
 * @param {object} template TEMPLATE SOURCE
 * @param {object} sourceMap SOURCE SOURCE MAP
 * @return {true} WHEN TEMPLATE TO SOURCE SOURCE MAPPING IS VALID
 */
"use strict";
function validateMapping(template, sourceMap) {

    // VALIDATING TEMPLATE & SOURCE MAP SOURCE TYPE
    if (!(typeof template === 'object' && typeof sourceMap === 'object')) {
        throw new Error("VALIDATION ERROR: BOTH template & sourceMap SHOULD BE OF OBJECT TYPE");
    }

    // VALIDATING WHETHER THE SOURCE MAP IS RELEVANT 'FOR' A GIVEN TEMPLATE
    if (!(template.id === sourceMap.templateId)) {
        throw new Error(`VALIDATION ERROR: SOURCE MAP WITH ID ${sourceMap.id} IS NOT MAPPED TO TEMPLATE WITH ID ${template.id}`);
    }

    // VALIDATING WHETHER SOURCE MAP ELEMENT KEY IS A VALID TEMPLATE ELEMENT KEYS
    for (const sourceMapElementKey in sourceMap.element) {
        if (!(sourceMapElementKey in template.element)) {
            throw new Error(`VALIDATION ERROR: SOURCE MAP WITH ID ${sourceMap.id}, CONTAINS AN INVALID TEMPLATE KEY ${sourceMapKey}`);
        }
    }

    /* 
        VALIDATING WHETHER SOURCE MAP ELEMENTS HAVE APPROPRIATE KEYS OR NOT
        e.g.
        {
            id1: { "children": "XYZ" => VALID KEY NAME "children" },
            id2: { "property": "XYZ" => INVALID KEY NAME "property". SHOULD BE "properties" }
        }
    */
    for (const sourceMapElementKey in sourceMap.element) {
        for (const sourceMapElementProperty in sourceMap.element[sourceMapElementKey]) {
            if (!(sourceMapElementProperty in requiredElementKeys)) {
                throw new Error(`SOURCE MAP WITH ID ${sourceMap.id} HAS AN ELEMENT WITH ID ${sourceMapElementKey} WHICH HAS INVALID KEY NAME ${sourceMapElementProperty}`);
            }
        }
    }

    // RETURNS true IF NO ERROR IS THROWN
    return true;
}

module.exports = validateMapping;