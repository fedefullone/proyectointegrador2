const database = require('../database/models')// Trae los modelos
const users = db.User; //Este es el alias


const controladorMain = {
    show: function(req, res) {
        return res.render('index', {
            productos: database.productos,
            usuarios: database.usuario,
            comentarios: database.comentarios,
            id: req.params.id
        })
    },
    searchResults: function(req, res){
        return res.render('search-results', {
            productos: database.productos,
            usuarios: database.usuario,
            comentarios: database.comentarios,
        })
    },
    all: function(req, res){
        return res.render('allProducts', {
            productos: database.productos,
            usuarios: database.usuario,
            comentarios: database.comentarios,
        })
    },
}

module.exports = controladorMain;