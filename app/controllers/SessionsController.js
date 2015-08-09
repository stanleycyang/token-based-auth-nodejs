require('dotenv').load();
var jwt = require('jsonwebtoken'),
    User = require('../models/User');

exports.login = function(request, response, next){
    User.findOne({
        name: request.body.name.toLowerCase()
    }).select('name password').exec(function(error, user){
        if(error){
            response.json({
                success: false,
                message: 'User not found'
            });
        }
        var validPassword = user.comparePassword(request.body.password);
        if(!validPassword){
            return response.json({
                success: false,
                message: 'Authentication failed'
            });
        }


        var token = jwt.sign({
            name: user.name
        }, process.env.SECRET, {
            expiresInMinutes: 60*5
        });

        response.json({
            success: true,
            message: 'Token granted',
            token: token
        });
    });
};
