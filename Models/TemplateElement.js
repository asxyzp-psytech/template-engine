/**
 * CLASS : Layout
 * FUNCTIONALITY : TO INSTANTIATE NEW LAYOUT ELEMENTS
 */
class Layout {

    //STATIC VARIABLES
    static validLayoutTypes = ["container", "image", "text"];     //STORES VALID LAYOUT TYPES

    //METHODS
    /**
     * FUNCTION : Layout CONSTRUCTOR
     * FUNCTIONALITY : CONSTRUCTOR TO CREATE NEW LAYOUT ELEMENTS
     * @param {String} id UNIQUE ID OF THE LAYOUT ELEMENT
     * @param {String} parent UNIQUE ID OF THE PARENT ELEMENT OR null 
     * @param {String} type VALID TYPE FOR LAYOUT ELEMENT (SEE <Static>validLayoutTypes)
     * @param {String} design VALID DESIGN THEME ID
     * @param {String} text VALID TEXT THEME ID
     * @param {Array} children LIST OF CHILD ELEMENT IDs
     * @param {Array} properties LIST OF CLASSES AND ATTRIBUTES
     */
    constructor(id, parent, type, design, text, children, properties) {

        //VALIDATIONS
        try {

            //LAYOUT ELEMENT ID SHOULD BE A NON-EMPTY STRING
            if (!(typeof id === "string" && id != ""))
                throw new Error("Layout CONSTRUCTOR: ID SHOULD NOT BE AN EMPTY STRING.");

            //LAYOUT ELEMENT PARENT ID SHOULD EITHER BE NULL OR A NON-EMPTY STRING
            if (!((typeof parent === "string" && parent != "") || parent === null))
                throw new Error("Layout CONSTRUCTOR: PARENT ID SHOULD NOT BE AN EMPTY STRING.");

            //LAYOUT TYPE CAN ONLY HAVE CERTAIN VALID TYPES
            if (!(validLayoutTypes.includes(type)))
                throw new Error("Layout CONSTRUCTOR: TYPE CAN ONLY BE A STRING w/ VALUES CONTAINER, TEXT OR IMAGE");

            //DESIGN THEME ID CAN ONLY BE OF STRING TYPE
            if ((!typeof design === "string"))
                throw new Error("Layout CONSTRUCTOR: DESIGN TEMPLATE ID SHOULD NOT BE AN EMPTY STRING.");

            //TEXT THEME ID CAN ONLY BE OF STRING TYPE
            if (!(typeof text === "string"))
                throw new Error("Layout CONSTRUCTOR: TEXT TEMPLATE ID SHOULD NOT BE AN EMPTY STRING.");

            //CHILDREN ID SHOULD BE A STRING
            if (!Array.isArray(children))
                throw new Error("Layout CONSTRUCTOR: CHILDEN DATA SHOULD BE AN ARRAY");
            else
                children.forEach((element) => {
                    if (!(typeof element === "string"))
                        throw new Error(`Layout CONSTRUCTOR: CHILD ID SHOULD BE A STRING`);
                });

            //PROPERTY ID SHOULD BE A STRING
            if (!Array.isArray(properties))
                throw new Error("Layout CONSTRUCTOR: CLASS DATA SHOULD BE AN ARRAY");
            else
                properties.forEach((element) => {
                    if (!(typeof element === "string"))
                        throw new Error(`Layout CONSTRUCTOR : PROPERTIES SHOULD BE A STRING`);
                });


            this.id = id;
            this.parent = parent;
            this.type = type;
            this.design = design ? design : "";
            this.text = text ? text : "";
            this.children = children;
            this.properties = properties;
        }
        catch (error) {
            console.log(error);
        }
    }
}

module.exports = Layout;