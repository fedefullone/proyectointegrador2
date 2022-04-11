const controladorUsers = require('../controllers/controladorUsers')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', controladorUsers.show)
router.get('/login', controladorUsers.login)
router.get('/register', controladorUsers.register)
router.get('/edit', controladorUsers.edit)

module.exports = router;
