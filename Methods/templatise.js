const uuid = require('uuid');

/**
 * FUNCTION: templatise(template, sourceMap, data)
 * FUNCTIONALITY: TEMPLATISING DATA
 * @param {Object} template TEMPLATE DATA FOR WHICH THE DATA WILL BE TEMPLATISED
 * @param {Object} sourceMap MAPPING FOR DATA TO TEMPLATE 
 * @param {Object} data DATA TO BE TEMPLATISED
 * @returns {Object} TEMPLATISED DATA
 */
function templatise(template, sourceMap, data) {

    // ITERATING THROUGH EACH ELEMENT IN THE DATA MAP & REPLACING MAPPED DATA IN TEMPLATE
    Object.keys(sourceMap.element).forEach(
        (sourceMapId) => {

            // UNSHIFTING IMAGE SOURCE IN PROPERTIES
            if (template.element[sourceMapId].type === "image") {
                /**data[sourceMap.element[sourceMapId] => {'children':[...], 'properties': [...], ... etc} */
                template.element[sourceMapId].properties.unshift(`src=${data[sourceMap.element[sourceMapId].properties]}`);
            }

            // REPLACING TEMPLATE ELEMENT'S CHILD WITH TEXT DATA
            else if (template.element[sourceMapId].type === "text") {
                /**data[sourceMap.element[sourceMapId] => {'children':[...], 'properties': [...], ... etc} */
                template.element[sourceMapId].children[0] = data[sourceMap.element[sourceMapId].children];
            }
        }
    );

    // STORING CURRENT & NEW TOP ELEMENT ID
    let oldTopElementId;
    const newTopElementId = uuid.v4();

    // FINDING THE CURRENT TOP ELEMENT ID
    Object.keys(template.element).forEach((templateElementId) => {
        if (template.element[templateElementId].parent === null) {
            oldTopElementId = templateElementId;
        }
    });

    // STORING CURRENT TOP LAYOUT ELEMENT
    const oldTopElement = template.element[oldTopElementId];
    oldTopElement.id = newTopElementId;

    // DELETING TOP LAYOUT ELEMENT FROM CURRENT LAYOUT AND REPLACING IT BY NEW TOP LAYOUT ELEMENT
    template.element[newTopElementId] = oldTopElement;
    delete (template.element[oldTopElementId]);

    // REPLACING PARENT KEY OF ALL OTHER LAYOUT ELEMENTS WITH NEW TOP ELEMENT ID
    Object.keys(template.element).forEach((templateElementId) => {
        if(template.element[templateElementId].parent === oldTopElementId){
            template.element[templateElementId].parent = newTopElementId;
        }
    });

    // REPLACING TEMPLATE'S OLD TOP ELEMENT ID WITH NEW TOP ELEMENT ID
    template.id = uuid.v4();
    template.topElementId = newTopElementId;
    return template;
}

module.exports = templatise;