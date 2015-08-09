var express = require('express'),
    app = express(),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

/*var sessions = require('./app/routes/SessionRoutes');*/

// Database
var database = require('./config/db');


// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Routes
var index = require('./app/routes/index');
var users = require('./app/routes/UserRoutes');

app.use('/', index);
app.use('/api/users', users);

//app.use('/api/users', users);
/*app.use('/api/sessions', sessions);*/

module.exports = app;
