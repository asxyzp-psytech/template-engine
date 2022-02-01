/**
 * FUNCTION: templatise(template, dataMap, data)
 * FUNCTIONALITY: TEMPLATISING DATA
 * @param {Object} template TEMPLATE DATA FOR WHICH THE DATA WILL BE TEMPLATISED
 * @param {Object} dataMap MAPPING FOR DATA TO TEMPLATE 
 * @param {Object} data DATA TO BE TEMPLATISED
 * @returns {Object} TEMPLATISED DATA
 */
function templatise(template, dataMap, data) {
    
    // ITERATING THROUGH EACH ELEMENT IN THE DATA MAP & REPLACING MAPPED DATA IN TEMPLATE
    Object.keys(dataMap.element).forEach(
        (dataMapId) => {

            // UNSHIFTING IMAGE SOURCE IN PROPERTIES
            if (template.element[dataMapId].type === "image") {
                /**data[dataMap.element[dataMapId] => {'children':[...], 'properties': [...], ... etc} */
                template.element[dataMapId].properties.unshift(`src=${data[dataMap.element[dataMapId].properties]}`);
            }
            
            // REPLACING TEMPLATE ELEMENT'S CHILD WITH TEXT DATA
            else if (template.element[dataMapId].type === "text") {
                /**data[dataMap.element[dataMapId] => {'children':[...], 'properties': [...], ... etc} */
                template.element[dataMapId].children[0] = data[dataMap.element[dataMapId].children];
            }
            
        }
    );
    return template;
}

module.exports = templatise;