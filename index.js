
const Model = require('./Models/index');
const Import = require('./Methods/Import/index');
const Validate = require('./Methods/Validate/index');
const templatise = require('./Methods/templatise');

module.exports = {
    model: Model,
    import: Import,
    validate: Validate,
    templatise: templatise
};