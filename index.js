var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express();
var http = require('http');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/html');

app.get('/', function(request, response) {
      response.render('index');
});

app.listen(app.get('port'), function() {
      console.log("Node app is running at localhost:" + app.get('port'));
});
