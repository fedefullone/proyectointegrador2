var express = require('express');
var router = express.Router();
const controladorMain = require ('../controllers/controladorMain')
/* GET home page. */
router.get('/', controladorMain.main)
router.get('/login', controladorMain.login)
router.get('/register', controladorMain.register)

module.exports = router;
