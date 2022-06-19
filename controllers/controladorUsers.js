const db = require('../database/models')//Trae los modelos
const users = db.User; //Este es el alias
const bcrypt = require('bcrypt'); //Componente para hashear

const controladorUsers = {
    create: function(req, res){
        //Mostrar el form del registro
        return res.render ('register')
    },
    store: function(req,res){
        //Obtener los datos del formulario y armar el objeto literal que quiero guardar
        let user = {
            email: req.body.email,
            password: becrypt.hashSync(req.body.password, 10), //Hasheamos la contraseña que viene del formulario
            fechadenacimiento: req.body.FechaDeNacimiento,
            dni: req.body.dni
        }
    

    //Tenemos que guardar esta info en la base de datos
    users.create(user)
    .then(function(userGuardado){//En el parametro recibimos el registro que se acaba de crear en la base de datos
          return res.send(userGuaradado)
          return res.redirect('/')
    })
    .catch(error => console.log(error))

}
    /*
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
    },*/
}
module.exports = controladorUsers;