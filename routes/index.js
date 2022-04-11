var express = require('express');
var router = express.Router();
const controladorMain = require ('../controllers/controladorMain')
/* GET home page. */
router.get('/', controladorMain)
router.get('/login', controladorMain)
router.get('/register', controladorMain)

module.exports = router;
