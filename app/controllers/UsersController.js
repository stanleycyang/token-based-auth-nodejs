var User = require('../models/User');

exports.index = function(request, response, next){
    User.find(function(error, users){
        if(error){
            response.json({
                success: false,
                message: 'Failed to retrieve user records'
            });
        }

        response.json(users);
    });
};

exports.create = function(request, response, next){
    var user = new User({
        name: request.body.name.toLowerCase(),
        password: request.body.password
    });

    user.save(function(error){
        if(error){
            response.json({
                success: false,
                message: 'User was not created'
            });
        }

        response.json({
            success: true,
            message: 'User created!'
        });
    });
};

exports.show = function(request, response, next){
    User.findById(request.params.user_id, function(error, user){
        if(error){
            response.json({
                success: false,
                message: 'User was not found'
            });
        }
        response.json(user);
    });
};

exports.update = function(request, response, next){
    User.update({_id: request.params.user_id}, {
        name: request.body.name,
        password: request.body.password
    }, function(error){
        if(error){
            response.json({
                success: false,
                message: 'User update failed'
            });
        }

        response.json({
            success: true
        });
    });
};

exports.destroy = function(request, response, next){
    User.remove({_id: request.params.user_id}, function(error, user){
        if(error){
            response.json({
                success: false,
                message: 'User deletion failed'
            });
        }

        response.json({
            success: true,
            message: 'Successfully deleted!'
        });
    });
};
