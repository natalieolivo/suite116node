var app = require('express')()
	, server = require('./server')(app)
	, router = require('./router')(app);
