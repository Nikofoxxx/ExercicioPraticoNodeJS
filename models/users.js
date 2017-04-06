module.exports = function(app)
{
    var Schema = require('mongoose').Schema;

    var user = Schema({
        _id: { type: Number, required: true }
        , login: { type: String, required: true }
        , password: { type: String, required: true }
        , userName: { type: String, required: true }
        , userType: { type: Number, required: true }
        , isActive: { type: Boolean, required: true }
    });

    return db.model('users', user);
};