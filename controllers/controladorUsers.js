const database = require('../db/index')
const controladorUsers = {
    show: function(req, res){
        return res.render('profile', {
            productos: database.productos,
            usuarios: database.usuario,
        })
    },
    register: function(req, res){
        return res.render('register',{
            productos: database.productos,
            usuarios: database.usuario,
        })
    },
    edit:  function(req, res){
        return res.render('profile-edit',{
            usuario:database.usuario,
        })
    },
    login:   function(req, res){
        return res.render('login',{
            productos: database.productos,
            usuarios: database.usuario,
        })
    },
}
module.exports = controladorUsers;