module.exports = function(app)
{
    var Schema = require('mongoose').Schema;

    var group = Schema({
        _id: { type: Number, required: true }
        , name: { type: String, required: true }
        , description: { type: String, required: true }

    });

    return db.model('groups', group);
};