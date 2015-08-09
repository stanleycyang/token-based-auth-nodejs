var mongoose = require('mongoose'),
    database = process.env.MONGODB || 'mongodb://localhost/token_auth';

mongoose.connect(database);

var connection = mongoose.connection;

connection.on('error', function(msg){
    console.log(msg);
});

connection.once('open', function(){
    console.log('db connect to %s was successful', database);
});

module.exports = mongoose;
