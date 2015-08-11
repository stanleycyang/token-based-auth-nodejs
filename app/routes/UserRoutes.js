var express = require('express'),
    router = express.Router(),
    UsersController = require('../controllers/UsersController'),
    SessionsHelper = require('../helpers/SessionsHelper');

router.post('/', UsersController.create);

router.use(SessionsHelper.validateToken);

router.get('/', UsersController.index);

router.get('/:user_id', UsersController.show);

router.put('/:user_id', UsersController.update);

router.delete('/:user_id', UsersController.destroy);

module.exports = router;
