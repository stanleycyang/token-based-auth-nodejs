var express = require('express'),
    router = express.Router();

router.get('/', function(request, response, next){
    response.send('hello');
});

module.exports = router;
