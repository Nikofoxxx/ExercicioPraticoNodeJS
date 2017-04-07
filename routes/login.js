module.exports = function(app)
{
	var isLogged = require('./../middleware/isLogged')
	, login = app.controllers.login;

	app.get('/', login.index);
	app.post('/login', login.login);
	app.get('/logout', login.logout);

};
