var in_client_id = 'b65d98ccd6bf40a8ac7783b266bc8996',
		in_client_secret = '445be63fbbfd40189de735210c4bb48e',
		in_redirect_uri = 'http://localhost:3000/auth',
		in_auth_url = 'https://api.instagram.com/oauth/authorize/?client_id=' + in_client_id + '&redirect_uri=' + in_redirect_uri + '&response_type=code&scope=basic+likes+comments+relationships+follower_list'

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