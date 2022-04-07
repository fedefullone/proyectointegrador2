const controladordelproducto = require('../controller/controladordelproducto')
const express = require('express')
const router = express.Router();

router.get('/:id', controladordelproducto.main)


module.exports = router;
