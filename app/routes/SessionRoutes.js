var express = require('express'),
    router = express.Router(),
    SessionsController = require('../controllers/SessionsController');

router.post('/', SessionsController.login);

module.exports = router;
