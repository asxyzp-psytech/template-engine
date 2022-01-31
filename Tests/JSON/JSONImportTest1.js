// TESTING IMPORT OF TEMPLATE FILE IN JSON FILE
const path = require('path');
const template = require('../../index');

const Template = template.import.json(path.join(__dirname,'template.json'));
console.log(Template);