var httpRequest = require('request');

var config = require('../../config/config');
var User = require('../models/User');
var Helper = require('../helpers/Helper');

module.exports = function (req, res) {
    console.log(globalString);
	var options = {
		url: 'https://api.instagram.com/v1/users/self/?access_token=' + globalString,
		method: 'GET'
	};
	
	httpRequest(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var r = JSON.parse(body);
			console.log(r);
			var user = {
				id: r.data.id,
				username: r.data.username,
				full_name: r.data.full_name,
				bio: r.data.bio,
				website: r.data.website,
				profile_picture: r.data.profile_picture,
                is_business: r.data.is_business,
                media_count: r.data.counts.media,
                follows_count: r.data.counts.follows,
	            followed_by_count: r.data.counts.followed_by
			};
			
			User.create(user, function (error) {
				if (error) res.send(error);
				res.redirect('/home.html');
			})
		}
	});
};