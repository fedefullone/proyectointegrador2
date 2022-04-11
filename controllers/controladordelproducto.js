const database = require('../db/index')
const controladordelproducto = {
    main: function(req, res){
        return res.render('')
    }
}
const controladordelproducto = require('../controller/controladordelproducto')

router.get('/:id', controladordelproducto.main)
