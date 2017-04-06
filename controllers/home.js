module.exports = function(app) 
{
	var HomeController = 
	{
		index: function(req,res) {	
			res.render('home/index', { session: req.session.user });
		}
	};
	return HomeController;
};

