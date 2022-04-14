var express = require('express');
var router = express.Router();
const controladorBuscador = require('../controllers/ControladorSearch');

router.get('/:search', controladorBuscador.search);

module.exports = router;