// IMPORTING MODULES/PACKAGES
const path = require('path');
const temp = require('../../index');

// STORING PATHS OF JSON FILES TO BE IMPORTED
const dataMapPath = path.join(__dirname, 'dataMap.json');
const templatePath = path.join(__dirname, 'template.json');
const dataMap = temp.import.dataMap(dataMapPath);
const template = temp.import.dataMap(templatePath);

console.log(temp.validate.mapping(template.data[0], dataMap.data[0]));