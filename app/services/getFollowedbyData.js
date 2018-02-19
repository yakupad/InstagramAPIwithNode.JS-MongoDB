var httpRequest = require('request');

var config = require('../../config/config');
var Follows = require('../models/Follows');
var Helper = require('../helpers/Helper');

module.exports = function (req, res) {
    console.log(globalString);
	var options = {
		url: 'https://api.instagram.com/v1/users/self/followed-by?access_token=' + globalString,
		method: 'GET'
	};
	
	httpRequest(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var r = JSON.parse(body);
			console.log(r);
			var followedby = {
				id: r.data.id,
				username: r.data.username,
				full_name: r.data.full_name
			};
			
			Follows.create(followedby, function (error) {
				if (error) res.send(error);
				res.redirect('/home.html');
			})
		}
	});
};