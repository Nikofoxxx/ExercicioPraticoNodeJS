module.exports = function (app) {
    var Users = app.services.users;

    var LoginController =
    {
        index: function (req, res) {
            res.render('login/index');
        },

        logout: function (req, res) {
            req.session.destroy();
            res.redirect('/');
        },

        login: function (req, res) {
            try {
                var userName = req.body.login;
                var password = req.body.password;


                Users.getToLogin(userName, password, function (user) {
                    if (user != null) {
                        var userSession = {
                            'userName': user.userName
                        };

                        req.session.user = userSession;
                        res.send({redirect: '/index'});
                    }
                    else {
                        if (!res.headersSent)
                            res.status(500).send("Acesso Negado! Usuário e/ou senha inválidos!");
                    }
                });
            }
            catch (ex) {
                res.status(500).send("Problemas ao tentar acessar o Banco de Dados!");
            }
        },
    };
    return LoginController;
};

