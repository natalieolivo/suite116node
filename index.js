var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(request, response) {
	response.sendFile('index.html', { root: path.join(__dirname, './views') });
});

app.listen(8888);
