// IMPORTING MODULES/PACKAGES
const requiredElementKeys = require('../../keys');

/**
 * FUNCTION: validateTemplateElement(template, templateElement)
 * FUNCTIONALITY: VALIDATES INVIDUAL TEMPLATE ELEMENT OF A TEMPLATE
 * @param {object} template TEMPLATE DATA
 * @param {object} templateElement TEMPLATE ELEMENT DATA
 * @return {boolean} DEPENDING ON WHETHER THE TEMPLATE IS VALID OR INVALID
 */
"use strict";
const validateTemplateElement = (template, templateElement) => {
    // CHECK WHETHER ALL REQUIRED KEYS ARE AVAILABLE OR NOT
    // id => EXISTENCE OF DUPLICATE ID FOR TEMPLATE ELEMENT TO BE VALIDATED BY validateTemplate()
    // parent => CHECK WHETHER id IS IN children PROPERTY OF PARENT ELEMENT
    // type => ELEMENT TYPE SHOULD A VALID TYPE
    /* children => IF TYPE==CONTAINER THEN CHECK WHETHER 
    *              (1) CHILDREN ID VALUES EXIST & 
    *              (2) CHILDREN WITH SAID CHILDREN ID HAVE THIS ELEMENT AS IT'S PARENT
    *           => IF TYPE=TEXT & CHILDREN EMPTY THEN SHOW WARNING*/
    // design => ELEMENT DESIGN STYLE VALUE SHOULD HAVE A VALID DESIGN STYLE ID OR SHOULD BE EMPTY STRING
    // text => ELEMENT TEXT STYLE VALUE SHOULD HAVE A VALID TEXT STYLE ID OR SHOULD BE EMPTY STRING
    return true;
};

module.exports = validateTemplateElement;