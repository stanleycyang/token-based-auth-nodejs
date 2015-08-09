var express = require('express'),
    router = express.Router(),
    SessionsController = require('../controllers/SessionsController');

router.post('/', function(request, response, next){
    SessionsController.login(request, response, next);
});

module.exports = router;
