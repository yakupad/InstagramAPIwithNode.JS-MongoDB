var httpRequest = require('request');

var config = require('../../config/config');
var User = require('../models/User');
var Helper = require('../helpers/Helper');

module.exports = function (req, res) {

	var options = {
		url: 'https://api.instagram.com/oauth/access_token',
		method: 'POST',
		form: {
			client_id: config.instagram.client_id,
			client_secret: config.instagram.client_secret,
			grant_type: 'authorization_code',
			redirect_uri: config.instagram.redirect_uri,
			code: req.query.code
		}
	};
	
	httpRequest(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var r = JSON.parse(body);
			console.log(r.access_token);
			global.globalString = r.access_token;
			if (error) res.send(error);
			res.redirect('/home.html');
		}
	});
};