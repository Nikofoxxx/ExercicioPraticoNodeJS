module.exports = function (app) {
    //var Users = app.services.users;

    var LoginController =
    {
        index: function (req, res) {
            res.render('login/index');
        },

        logout: function (req, res) {
            req.session.destroy();
            res.redirect('/');
        }
    };
    return LoginController;
};

