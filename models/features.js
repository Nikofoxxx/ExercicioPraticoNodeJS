module.exports = function(app)
{
    var Schema = require('mongoose').Schema;

    var feature = Schema({
        _id: { type: Number, required: true }
        , name: { type: String, required: true }
        , url: { type: String, required: true }
        , menuOrder: { type: Number, required: true }
        , imageCss: { type: String, required: true }
        , isActive: { type: Boolean, required: true }
    });

    return db.model('features', feature);
};