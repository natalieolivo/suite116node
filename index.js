var express = require('express')
	, app = express()
	, server = require('./server')(app)
	, router = require('./router')(app)
	, path = require('path')
	, hbs = require('hbs')
	, fs = require('fs')
	, _ = require('underscore');

app.set('views', path.join(__dirname, './build'));
app.set('view engine', 'hbs');

// Static CSS / IMAGE files
app.use(express.static('assets'));