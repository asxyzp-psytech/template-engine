// IMPORTING MODULES/PACKAGES
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');
const temp = require('../../index');
const Parser = require('rss-parser');

// STORING PATHS OF JSON FILES TO BE IMPORTED
const dataMapPath = path.join(__dirname, 'dataMap.json');
const templatePath = path.join(__dirname, 'template.json');
const dataMap = temp.import.dataMap(dataMapPath);
const template = temp.import.dataMap(templatePath);

// FOR STORING TEMPLATISED POST DATA
const post = {
    data: [],
    count: 0
};

/**
 * FUNCTION: templatise()
 * FUNCTIONALITY: TEMPLATISE RSS FEED DATA INTO THE HN STREAM FORMAT
 * @param {undefined}
 * @returns {undefined} 
 */
async function templatise() {

    // TEMPLATISING DATA ONLY AFTER TEMPLATE TO DATA MAP VALIDATION
    if (temp.validate.mapping(template.data[0], dataMap.data[0])) {

        //URLS FOR WHICH TO FETCH THE RSS FEED DATA
        let feedURL = ["https://reddit.com/.rss",
            "https://asxyzp.code.blog/feed",
            "https://sports.ndtv.com/rss/boxing"];

        // INITIALISING RSS PARSER & PARSING FEED
        const parser = new Parser();
        let feed = await parser.parseURL(feedURL[1]);

        // MAPPING FEED ITEMS TO POST CARDS
        feed.items.map((data) => {
            const postCard = { template: temp.templatise(template.data[0], dataMap.data[0], data) };
            post.data.push(postCard);
            post.count = post.data.length;
        });
    }
}

// WRITING TEMPLATISED DATA IN JSON FILE WHICH CAN BE USED BY mutter-render-engine
templatise().then(() => {
    fs.writeFile(
        path.join(__dirname, `template-${uuid.v4()}.json`),
        JSON.stringify(post),
        (err) => { if (err) throw err; }
    );
});