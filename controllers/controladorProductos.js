const database = require('../db/index')
const controladorProductos = {
    show: function(req, res){
        return res.render('product', {
            productos: database.productos,
            usuarios: database.usuario,
            comentarios: database.comentarios,
            id: req.params.id,
        })
    },
    add:function(req, res){
        return res.render('product-add', {
            usuario: database.usuario,
            comentarios: database.comentarios,
            productos: database.productos,
        })
    }
}

module.exports = controladorProductos;