var express = require('express');
var config  = require('./config');
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Server-787 isss a simple MVC framework designed to run on top of express.js');
});

app.listen(config.port, function() {
  console.log('Node app is running on port', app.get('port'));
});
