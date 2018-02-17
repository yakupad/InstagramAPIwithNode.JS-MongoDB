var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	id: Number,
	username: String,
	full_name: String,
	bio: String,
	website: String,
	profile_picture: String,
	access_token: String,
	is_business: String,
	media_count: Number,
	follows_count: Number,
	followed_by_count: Number
});

module.exports = mongoose.model('User', userSchema);
