const controladorMain = require ('../controllers/controladorMain')

const  express = require('express');
const  router = express.Router();


/* GET home page. */
router.get('/', controladorMain.show)
router.get('/search-results', controladorMain.searchResults)
router.get('/all-products', controladorMain.all)



module.exports = router;



