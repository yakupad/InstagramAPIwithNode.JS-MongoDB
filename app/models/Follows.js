var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var followsSchema = new Schema({
	id: Number,
	username: String,
	full_name: String,
	profile_picture: String
});

module.exports = mongoose.model('Follows', followsSchema);
