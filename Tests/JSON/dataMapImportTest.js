// TESTING IMPORT OF TEMPLATE FILE IN JSON FILE
const path = require('path');
const temp = require('../../index');

const dataMap = temp.import.dataMap(path.join(__dirname,'template.json'));
console.log(dataMap);