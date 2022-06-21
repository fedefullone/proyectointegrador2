const db = require('../database/models');//Trae los modelos
const users = db.User;    //Este es el alias
const bcrypt = require('bcryptjs');  //Componente para hashear

const controladorUsers = {

    create: function (req, res) {
        //Mostrar el form del registro
        return res.render('register')
    },


    store: function (req, res) {
        let errors = {};

        if (req.body.name == "") {
            errors.message = "Ingresar nombre";
            res.locals.errors = errors;
            return res.render('register')
        } else if (req.body.email == "") {
            errors.message = "Ingresar email";
            res.locals.errors = errors;
            return res.render('register')
        }
        else if (req.body.password == "") {
            errors.message = "Ingresar contraseña";
            res.locals.errors = errors;
            return res.render('register')
        }
        else if (req.body.FechaDeNacimiento == "") {
            errors.message = "Ingresar fecha de nacimiento";
            res.locals.errors = errors;
            return res.render('register')
        }
        else if (req.body.dni == "") {
            errors.message = "Ingresar dni";
            res.locals.errors = errors;
            return res.render('register')
        }
        else if (req.file.filename == "") {
            errors.message = "Ingresar foto de perfil";
            res.locals.errors = errors;
            return res.render('register')
        }
        else {


            //Obtener los datos del formulario y armar el objeto literal que quiero guardar
            let user = {
                name: req.body.name,
                email: req.body.email,
                password: becrypt.hashSync(req.body.password, 10), //Hasheamos la contraseña que viene del formulario
                fechadenacimiento: req.body.FechaDeNacimiento,
                dni: req.body.dni,
                image: req.file.filename

            }
        }

        //Tenemos que guardar esta info en la base de datos
        users.create(user)
            .then(function (userGuardado) {//En el parametro recibimos el registro que se acaba de crear en la base de datos

                return res.redirect('/')
            })
            .catch(error => console.log(error))
    },
    login: function (req, res) {
        return res.render('login')
    },
    //Para que procesemos
    signIn: function (req, res) {

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