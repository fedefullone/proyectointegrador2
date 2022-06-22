const controladorUsers = require('../controllers/controladorUsers')
var express = require('express');
var router = express.Router();
const multer  = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
          cb(null, path.join(__dirname, '../public/images/users'));
    },
    filename: (req, file, cb) => {
          cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  var upload = multer({ storage: storage });
  



/* GET users listing. */
//router.get('/:id', controladorUsers.show);
router.get('/login', controladorUsers.login);//Muestra el form de login al usuario
router.post('/singIn', controladorUsers.signIn);
router.get('/register', controladorUsers.create);//Muestra el form registro al usuario
router.post('/store', upload.single('images'), controladorUsers.store);//Procesa los datos recibidos en el form
router.get('/logout', controladorUsers.logout);
//router.get('/edit', controladorUsers.edit);

module.exports = router;

