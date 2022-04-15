const database = require('../db/index')
const controladorUsers = {
    show: function(req, res){
        return res.render('profile', {
            productos: database.productos,
            usuarios: database.usuario,
        })
    },
    register: function(req, res){
        return res.render('register')
    },
    edit:  function(req, res){
        return res.render('login',{
            usuario:database.usuario,
        })
    },
    login:   function(req, res){
        return res.render('login')
    },
}
module.exports = controladorUsers;