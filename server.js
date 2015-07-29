var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  mongoose = require('mongoose'),
  logger = require('morgan');

// resource will create the apis for mongodb
app.apiFactory = require('resourcejs');
app.config = require('./devServer/config');

var port = process.env.PORT || app.config.port; // set our port
var staticdir = process.env.NODE_ENV === 'production' ? 'dist.prod' : 'dist.dev'; // get static files dir
var log = process.env.NODE_ENV === 'production' ? 'tiny' : 'dev';

app.use(logger(log));
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/' + staticdir)); // set the static files location /public/img will be /img for users

// CORS support


// routes ==================================================
require('./devServer/routes/index')(app);

// models ==================================================
require('./devServer/models/index')(app, mongoose);

// mongodb connection
mongoose.connect(app.config.mongodb.uri);
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function(){
  app.listen(port, function(){
    console.log('Server started on port ' + port);
  });
});
exports = module.exports = app; // expose app
