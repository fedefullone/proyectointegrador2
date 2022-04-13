const express = require('express')
const router = express.Router();
const database = require('../db/index')

const controladordelproducto = require('../controller/controladordelproducto')
const productos = require('../controllers/controladordelproducto')

router.get('/:id', controladordelproducto.main)


module.exports = router;
