const controladorProductos = require('../controllers/controladorProductos')

const express = require('express')
const router = express.Router();

router.get('/add', controladorProductos.add)
router.get('/:id', controladorProductos.show) 


module.exports = router;
