const database = require('../db/index')

const controladorUsers = {
    show: (req, res) =>{
        return res.render('profile', {
            productos: database.productos,
            usuarios: database.usuario,
        })
    },
    login:   (req, res) =>{
        return res.render('login')
    },
    register:   (req, res) =>{
        return res.render('register')
    },
    edit:   (req, res) =>{
        return res.render('login',{
            usuario:database.usuario,
        })
    },
}

module.exports = controladorUsers;