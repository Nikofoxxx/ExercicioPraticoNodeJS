module.exports = function(app)
{
	var isLogged = require('./../middleware/isLogged')
	, login = app.controllers.login;

	app.get('/', login.index);

};
