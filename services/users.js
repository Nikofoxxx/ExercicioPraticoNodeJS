
module.exports = function(app) 
{

	var Users = app.models.users;

	var UsersService = 
	{

		getToLogin: function(userName, password, callback)
		{

			var query = { userName: userName, passwd: password };
		
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