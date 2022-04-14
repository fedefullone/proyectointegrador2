const express = require('express')
const router = express.Router();
const database = require('../db/index')

const controladorProductos = require('../controller/controladorProductos')
const productos = require('../controllers/controladorProductos')

router.get('/:id', controladordelproducto.main)


module.exports = router;
