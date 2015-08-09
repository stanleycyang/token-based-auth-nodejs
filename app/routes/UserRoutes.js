var express = require('express'),
    router = express.Router(),
    UsersController = require('../controllers/UsersController'),
    SessionsHelper = require('../helpers/SessionsHelper');

router.post('/', function(request, response, next){
    UsersController.create(request, response, next);
});

/*router.use(function(request, response, next){*/
    //SessionsHelper.validateToken(request, response, next);
/*});*/

router.get('/', function(request, response, next){
    UsersController.index(request, response, next);
});

router.get('/:user_id', function(request, response, next){
    UsersController.show(request, response, next);
});

router.put('/:user_id', function(request, response, next){
    UsersController.update(request, response, next);
});

router.delete('/:user_id', function(request, response, next){
    UsersController.destroy(request, response, next);
});

module.exports = router;
