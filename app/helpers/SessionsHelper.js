var jwt = require('jsonwebtoken');

exports.validateToken = function(request, response, next){

    var token = request.body.token || request.query.token || request.headers['x-access-token'];

    if(token){
        jwt.verify(token, process.env.SECRET, function(error, decoded){
            if(error){
                return response.status(403).send({
                    success: false,
                    message: error.message
                });
            }else{
                request.decoded = decoded;
                next();
            }
        });
    }else{
        return response.status(403).json({
            success: false,
            message: 'No token provided'
        });
    }
};
