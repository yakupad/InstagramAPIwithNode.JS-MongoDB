var in_client_id = '45d90006ca2d4f468d82b4e03fbb6a76',
		in_client_secret = 'e4a0e62bdd344e7da47f6232d5b94363',
		in_redirect_uri = 'http://localhost:3000/auth',
		in_auth_url = 'https://api.instagram.com/oauth/authorize/?client_id=' + in_client_id + '&redirect_uri=' + in_redirect_uri + '&response_type=code&scope=basic+likes+comments+relationships'

var db_uri = 'mongodb://yakup:123456@ds237748.mlab.com:37748/dogus';

module.exports = {

	port: process.env.PORT || 3000,
	db: {
		uri: db_uri
	},
	instagram: {
		client_id: in_client_id,
		client_secret: in_client_secret,
		auth_url: in_auth_url,
		redirect_uri: in_redirect_uri
	}

};