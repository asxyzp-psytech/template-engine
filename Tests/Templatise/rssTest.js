// IMPORTING MODULES/PACKAGES
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');
const temp = require('../../index');
const Parser = require('rss-parser');

// STORING SOURCE MAP & TEMPLATE DATA PATHS
const dataMapPath = path.join(__dirname, 'dataMap.json');
const templatePath = path.join(__dirname, 'template.json');

// IMPORTING SOURCE MAP & TEMPLATE DATA
const dataMap = temp.import.dataMap(dataMapPath);
const template = temp.import.template(templatePath);

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

        // SENDING FEED DATA AS STREAM
        const feedData = {
            title: feed.title,
            description: feed.description,
            image: feed.image,
            link: feed.link
        };

        // ADDING TEMPLATISED FEED DATA TO POST DATA
        feed.items.forEach((data, index) => {
            let postCard = {
                stream: feedData,
                template: temp.templatise(template.data[0], dataMap.data[0], data)
            };
            console.log(postCard.template.id, postCard.template.topElementId, index);
            post.data = [...post.data, postCard];
        });
        post.count = post.data.length;

        console.log("\n");
        post.data.forEach((data, index) => {
            console.log(data.template.id, data.template.topElementId, index);
        });

        fs.writeFile(
            path.join(__dirname, `template-${uuid.v4()}.json`),
            JSON.stringify(post),
            (err) => { if (err) throw err; }
        );
    }
}

templatise();