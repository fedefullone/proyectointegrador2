const controladorUsers = require('../controllers/controladorUsers')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', controladorUsers.show);
router.get('/login', controladorUsers.login);//Muestra el form de login al usuario
router.get('/login', controladorUsers.signIn);
router.get('/register', controladorUsers.create);//Muestra el form registro al usuario
router.post('/store', controladorUsers.store);//Procesa los datos recibidos en el form
router.get('/edit', controladorUsers.edit);

module.exports = router;

