const database = require('../db/index')
const controladordelproducto = {
    show: (req, res) =>{
        return res.render('', {})
    }
}
const controladorProductos = require('../controller/controladorProductos')

router.get('/:id', controladorProductos.main)

module.exports = controladorProductos
