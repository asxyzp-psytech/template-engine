// TESTING IMPORT OF TEMPLATE FILE IN JSON FILE
const path = require('path');
const template = require('../../Methods/Import/template');

const Template = template(path.join(__dirname,'template.json'));
console.log(Template);