const controladordelproducto = require('../controller/controladordelproducto')
const express = require('express')
const router = express.Router();
const productos = require('../controllers/controladordelproducto')

router.get('/:id', controladordelproducto.main)


module.exports = router;
