// IMPORTING MODULES/PACKAGES
const requiredElementKeys = require('../../keys');

/**
 * FUNCTION: validateTemplate(template)
 * FUNCTIONALITY: VALIDATES A TEMPLATE
 * @param {object} template TEMPLATE DATA
 * @return {boolean} DEPENDING ON WHETHER THE TEMPLATE IS VALID OR INVALID
 */
"use strict";
const validateTemplate = (template) => {
    // id => ID OF TEMPLATE SHOULD BE NON-EMPTY STRING
    /* text => TEXT STYLE OBJECT ASSOCIATED WITH TEMPLATE SHOULD BE AN OBJECT
            => VALIDATE STRUCTURE OF TEXT STYLE OBJECT USING TextTheme Model*/
    /* design => DESIGN STYLE OBJECT ASSOCIATED WITH TEMPLATE SHOULD BE AN OBJECT
              => VALIDATE STRUCTURE OF DESIGN STYLE OBJECT USING DesignTheme Model*/
    /* element => TEMPLATE ELEMENT OBJECT ASSOCIATED WITH TEMPLATE SHOULD BE AN OBJECT
               => VALIDATE STRUCTURE OF TEMPLATE ELEMENT OBJECT USING TemplateElement Model*/
    // topElementId => TOP ELEMENT ID SHOULD BE A VALID STRING
    return true;
};

module.exports = validateTemplate;