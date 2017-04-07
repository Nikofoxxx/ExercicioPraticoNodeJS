
module.exports = function(app) 
{

	var Users = app.models.users;

	var UsersService = 
	{

		getToLogin: function(login, password, callback)
		{

			var query = { login: login, password: password };

			Users.findOne(query)
				.exec(function(error, user)
				{
					if (error)
						throw error;

					if (user) 
						callback(user);
					
					callback(null);
				});			
		},
	};
	
	return UsersService;
};	