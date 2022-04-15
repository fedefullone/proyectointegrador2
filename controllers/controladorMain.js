const database = require('../db/index')

const controladorMain = {
    show: (req, res) =>{
        return res.render('index', {
            productos: database.productos,
            usuarios: database.usuario,
            comentarios: database.comentarios,
            id: req.params.id
        })
    },
    searchResults:   (req, res) =>{
        return res.render('search-results', {
            productos: database.productos,
            usuarios: database.usuario,
            comentarios: database.comentarios,
        })
    },
}

module.exports = controladorMain;