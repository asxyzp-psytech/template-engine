// IMPORTING MODULES/PACKAGES
const path = require('path');
const temp = require('../../index');

// STORING PATHS OF JSON FILES TO BE IMPORTED
const dataMapPath = path.join(__dirname, 'dataMap.json');
const templatePath = path.join(__dirname, 'template.json');
const dataMap = temp.import.dataMap(dataMapPath);
const template = temp.import.dataMap(templatePath);

if (temp.validate.mapping(template.data[0], dataMap.data[0])) {
    const templ = temp.templatise(
        template.data[0],
        dataMap.data[0],
        { "title": "ABCD", "image": "https://pbs.twimg.com/profile_images/1267310089435664384/_JiJQrH__400x400.jpg" }
    );
}