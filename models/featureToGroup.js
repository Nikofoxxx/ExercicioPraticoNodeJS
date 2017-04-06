module.exports = function(app)
{
    var Schema = require('mongoose').Schema;

    var featureToGroup = Schema({
        featureId: { type: Number, required: true }
        , groupId: { type: Number, required: true }
    });

    return db.model('featureToGroup', featureToGroup);
};