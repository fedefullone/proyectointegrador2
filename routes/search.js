var express = require('express');
var router = express.Router();

let controladoresBuscador = require('../controllers/ControladorSearch');

router.get('/:search', controladorSearch.search);

module.exports = router;