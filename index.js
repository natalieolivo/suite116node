var app = require('express')()
	, server = require('./server')(app)
	, router = require('./router')(app)
	, path = require('path')
	, hbs = require('hbs')
	, fs = require('fs')
	, _ = require('underscore');

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
