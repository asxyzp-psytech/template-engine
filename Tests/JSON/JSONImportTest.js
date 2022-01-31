// TESTING IMPORT OF TEMPLATE FILE IN JSON FILE
const path = require('path');
const JSON = require('../../Methods/Import/json');

const Template = JSON(path.join(__dirname,'template.json'));
console.log(Template);