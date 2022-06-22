const controladorProductos = require('../controllers/controladorProductos')

const express = require('express')
const router = express.Router();
const multer  = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
          cb(null, path.join(__dirname, '../public/images/sneakers'));
    },
    filename: (req, file, cb) => {
          cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  var upload = multer({ storage: storage });

  
//router.get('/add', controladorProductos.add)

//router.get('/edit/:id', controladorProductos.edit) 
router.post('/store', upload.single('image'), controladorProductos.store)
//router.post('/update/:id', upload.single('image'), controladorProductos.update)
//router.post('/storeComentarios', controladorProductos.storeComentarios)
router.get('/create', controladorProductos.create) // Ruta que muestra el form de carga
//router.post('/store', upload.single('images'), controladorProductos.store) //Ruta que guarda datos
router.get('/:id', controladorProductos.show)



module.exports = router;