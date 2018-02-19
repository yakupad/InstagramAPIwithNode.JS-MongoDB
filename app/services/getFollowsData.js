var httpRequest = require('request');

var config = require('../../config/config');
var Follows = require('../models/Follows');

module.exports = function (req, res) {
    console.log(globalString);
	var options = {
		url: 'https://api.instagram.com/v1/users/self/follows?access_token=' + globalString,
		method: 'GET'
	};
	
	httpRequest(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var r = JSON.parse(body);
			console.log(r);
			var follows = {
				id: r.data.id,
				username: r.data.username,
				full_name: r.data.full_name
			};
			
			Follows.create(follows, function (error) {
				if (error) res.send(error);
				res.redirect('/home.html');
			})
		}
	});
};