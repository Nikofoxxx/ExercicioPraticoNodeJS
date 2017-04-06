module.exports = function(app)
{
    var Schema = require('mongoose').Schema;

    var groupToUser = Schema({
        groupId: { type: Number, required: true }
        , userId: { type: Number, required: true }
    });

    return db.model('groupToUser', groupToUser);
};