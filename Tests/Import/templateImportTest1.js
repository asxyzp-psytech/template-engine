// TESTING IMPORT OF TEMPLATE FILE IN JSON FILE
const path = require('path');
const temp = require('../../index');

const Template = temp.import.template(path.join(__dirname,'template.json'));
console.log(Template);