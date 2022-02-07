# @psytech/template-engine

This package is to be used for importing & validating, templates & source map data from JSON files, which can be used to fork & templatise data received from any source (e.g. RSS, CSV, JSON) into structured template data that can be rendered using the [`@psytech/react-render-engine`](https://www.npmjs.com/package/@psytech/react-render-engine) package.

Here's a simple demonstration of this, which templatises RSS feed into a selected template: https://r2c.psytech42.repl.co/

![rss-to-card demo](https://s10.gifyu.com/images/rss-to-card.gif)

## Templatisation process
The process of templatising data from a source such as an RSS feed or data stored in CSV file into structured templates is achieved in a three step process:
1. Install the package using `npm install @psytech/template-engine`.
2. Import the template engine object using `const te = require('@psytech/template-engine')`.
3. Import template data stored in a JSON file using `te.import.template(path)`, where `path` should be the valid path for the JSON file containing templates. This statement will import template data into the memory, which can now be accessed using a variable.
4. Import source map stored in a JSON file using `te.import.sourceMap(path)`, where `path` should be the valid path for the JSON file containing source maps. This statement will import source map data into the memory, which can now be accessed using a variable.
5. Templatisation can be achieved using `te.templatise(template.data[i], sourceMap.data[i], data)`, where `data` is mapped to layout elements of `template` using `sourceMap`.