var express = require('express');
var config = require('./config/config');
var morgan = require('morgan'); 
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');


var app = express();
var jwt = require('express-jwt');

var jwtCheck = jwt({
  secret: new Buffer('r_T7DH7vi6j-Er1ujDkbgleQPh8JHtm0H6qtWWmMQ6prCAEqnKoTMXZlYYDGE6wf', 'base64'),
  audience: 'Vxdbo68jPK3z2Z5D8pXtSGBHMKGdst1M'
});

app.use('/api/news/self', jwtCheck);


app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
// app.use('/partials',  express.static(__dirname + 'public/app/partials'));
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride()); 
require('./app/router/routes')(app);


var db = mongoose.connect(config.db);

app.listen(config.port);
console.log("Server started " + config.port);