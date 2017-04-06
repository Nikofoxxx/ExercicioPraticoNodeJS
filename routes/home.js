module.exports = function(app)
{
    var isLogged = require('./../middleware/isLogged')
        , home = app.controllers.home;

    app.get('/index', home.index);
};
