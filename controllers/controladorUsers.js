const db = require('../database/models'); //Trae los modelos
const users = db.User; //Este es el alias
const bcrypt = require('bcryptjs'); //Componente para hashear

const controladorUsers = {


    create: function (req, res) {
        //Mostrar el form del registro
        return res.render('register')
    },


    store: function (req, res) {
        //return res.send( req.body)
        let errors = {};

        if (req.body.name == "") {
            errors.message = "Ingresar nombre";
            res.locals.errors = errors;
            return res.render('register')
        } else if (req.body.email == "") {
            errors.message = "Ingresar email";
            res.locals.errors = errors;
            return res.render('register')
        } else if (req.body.password == "") {
            errors.message = "Ingresar contraseña";
            res.locals.errors = errors;
            return res.render('register')
        } else if (req.body.FechaDeNacimiento == "") {
            errors.message = "Ingresar fecha de nacimiento";
            res.locals.errors = errors;
            return res.render('register')
        } else if (req.body.dni == "") {
            errors.message = "Ingresar dni";
            res.locals.errors = errors;
            return res.render('register')
        } else if (req.file.filename == "") {
            errors.message = "Ingresar foto de perfil";
            res.locals.errors = errors;
            return res.render('register')
        } else {


            //Obtener los datos del formulario y armar el objeto literal que quiero guardar
            let user = {
                username: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10), //Hasheamos la contraseña que viene del formulario
                birthdate: req.body.FechaDeNacimiento,
                dni: req.body.dni,
                image: req.file.filename,
                created_at: new Date(),
                updated_at: new Date(),

            }
            users.create(user)
                .then(function (userGuardado) { //En el parametro recibimos el registro que se acaba de crear en la base de datos

                    return res.redirect('/user/login')
                })
                .catch(error => console.log(error))
        }

        //Tenemos que guardar esta info en la base de datos

    },
    editProfile: function (req, res) {
        //return res.send( req.body)
     
            //Obtener los datos del formulario y armar el objeto literal que quiero guardar
            let usuario = {
                username: req.body.username,
                email:req.body.email,
                birthdate:req.body.birthdate,
                dni:req.body.dni,
                updatedAt: Date.now()
            }
            users.update(usuario,{
                where:{
                    id:req.params.id
                }
            })
                .then(function (usuario) { //En el parametro recibimos el registro que se acaba de crear en la base de datos

                    return res.redirect('/user/'+req.params.id)
                })
                .catch(error => console.log(error))

        //Tenemos que guardar esta info en la base de datos

    },

    login: function (req, res) {
        return res.render('login')
    },
    //Para que procesemos
    signIn: function (req, res) {
        let filtro = {
            where: [{
                email: req.body.email
            }]
        };
        let errors = {};

        if (req.body.email == "") {
            errors.message = "Email incompleto";
            res.locals.errors = errors;
            return res.render('login');
        } else if (req.body.password == "") {
            errors.message = "Contraseña vacia";
            res.locals.errors = errors;
            return res.render('login');
        } else {
            users.findOne(filtro)
                .then(function (result) {

                    if (result != null) {

                        let passEncriptada = bcrypt.compareSync(req.body.password, result.password)
                        if (passEncriptada) {

                            /* Poniendo en session al usuario */
                            req.session.user = result.dataValues;

                            if (req.body.remember != undefined) {
                                res.cookie('userId', result.dataValues.id, {
                                    maxAge: 1000 * 60 * 10
                                })
                            }

                            return res.redirect('/')
                        } else {
                            errors.message = "El mail existe pero la password es incorrecta";
                            res.locals.errors = errors;
                            return res.render('login');
                        }
                    } else {
                        errors.message = "El mail no existe";
                        res.locals.errors = errors;
                        return res.render('login');
                    }
                })
        }


    },




    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userId');
        return res.render("login")
    },


    show: function (req, res) {

        let id = req.params.id
        users.findByPk(id,{
           
            include: [{
                association: "posteos"
            }, {
                association: "comentarios"
            }]
        })
            .then(function (usuario) {

                return res.render('profile', {
                    usuario: usuario,
                    
                    //posteos: posteos
                })
            })
    },
    edit: function (req, res) {
        let id = req.params.id
        users.findByPk(id,{
            include:[{
                association: "posteos"
            },{
                association: "comentarios"
            }]
        })

            .then(function(usuario){
                return res.render('profile-edit', {
                    usuario: usuario

                })

            })
            
        
    },

}
module.exports = controladorUsers;

/* users.findAll({
     where: [{
         id: req.params.id
     }],
     include: [{
         association: "posteos"
     }, {
         association: "comentarios"
     }]
 })
     .then(function (usuario) {
        




         let posteos = [];
         return res.render('profile', {
             usuario: usuario,
             id: req.params.id,
             posteos: posteos
         })
         /* for (let i = 0; i < usuario[0].comentarios.length; i++) {
              //if (zapatilla.comentarios != null ){
              users.findOne({
                  where: [{
                      id: usuario[0].comentarios[i].FkUserId
                  }]
              })
                  .then(function (posteos) {
                      comentadores.push(posteos)
                      if (i == usuario[0].comentarios.length - 1) {
                         
                          // return res.send(zapatilla)
                          return res.render('profile', {
                              usuario: usuario,
                              id: req.params.id,
                              posteos: posteos
                          })
                      }
                  })
          }
       
 
 
     })
 
 },*/

/*return res.render('profile', {
          productos: database.productos,
          usuarios: database.usuario,
      



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
