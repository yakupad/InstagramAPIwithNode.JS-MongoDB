var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');

var config = require('./config/config');
var authUser = require('./app/services/authService');
var getUserData = require('./app/services/getUserData')

mongoose.connect(config.db.uri);

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/auth', authUser);

app.get('/login', function (request, response) {
	response.redirect(config.instagram.auth_url);
});

app.get('/', function (request, response) {
	response.sendfile('./public/index.html')
});

app.get('/getUserData',getUserData);

app.listen(3000);
console.log('Uygulama port 3000 üzerinde çalışıyor');