const db = require('../database/models') //Trae los modelos
const products = db.Product; //Este es el alias
const marcas = db.Marca;
const comentarios = db.Comment;
const users = db.User;

const controladorProductos = {
    /* index: function (req, res) {
         products.findAll({
             include: [
                 { association: 'marca' }
             ]
         })
             .then(function (sneakers) {
                 //return res.send(sneakers)
                 return res.render('index', { products: sneakers });
             })
     },*/

    show: function (req, res) {
        let id = req.params.id

        products.findByPk(id,{
            include: [{
                association: "owner"
            }, {
                association: "comentarios",
                include:{
                    association:'comentador'
                }
            }]
        })
            .then(function (zapatilla) {
                //return res.send(zapatilla)
                // let comentadores = [];

                // for (let i = 0; i < zapatilla[0].comentarios.length; i++) {
                //     //if (zapatilla.comentarios != null ){
                //     users.findOne({
                //         where: [{
                //             id: zapatilla[0].comentarios[i].FkUserId
                //         }]
                //     })
                //         .then(function (comentador) {
                //             comentadores.push(comentador)
                //             if (i == zapatilla[0].comentarios.length - 1) {
                               
                                // return res.send(zapatilla)
                                return res.render('product', {
                                    productos: zapatilla,
                                 
                                    
                                })
                            // }
                        // })
                // }
                /*else{
                return res.render('product', {
                    productos: zapatilla,
                    id: req.params.id,
                    //comentadores: comentadores
                })*/
                //}
                //}


            })

    },
    new: function (req, res) {

        products.findAll({
            order: [
                ['updatedAt', 'DESC']
            ],
            limit: 5
        })
            .then(function (resultados) {
                return res.send(resultados)
            })
    },

    //Para agregar nuevas sneakers
    create: function (req, res) {
        //Renderizar el form para agregar la sneaker
        return res.render('product-add')
    },
    store: function (req, res) {
        //return res.send( req.body)
        let errors = {};

        if (req.body.marca == "") {
            errors.message = "Ingresar marca";
            res.locals.errors = errors;
            return res.render('product-add')
        } else if (req.body.modelo == "") {
            errors.message = "Ingresar modelo";
            res.locals.errors = errors;
            return res.render('product-add')
        } else if (req.body.descripcion == "") {
            errors.message = "Ingresar descripcion";
            res.locals.errors = errors;
            return res.render('product-add')
        } else if (req.file.filename == "") {
            errors.message = "Ingresar foto";
            res.locals.errors = errors;
            return res.render('product-add')
        } else if (req.body.color == "") {
            errors.message = "Ingresar color";
            res.locals.errors = errors;
            return res.render('product-add')
        } else {


            //Obtener los datos del formulario y armar el objeto literal que quiero guardar
            let sneaker = {
                marca: req.body.marca,
                modelo: req.body.modelo,
                descripcion: req.body.descripcion,
                image: req.file.filename,
                color: req.body.color,
                created_at: new Date(),
                updated_at: new Date(),
                FkUserId:req.session.user.id
            }
            products.create(sneaker)
                .then(function (sneakerGuardado) { //En el parametro recibimos el registro que se acaba de crear en la base de datos

                    return res.redirect('/')
                })
                .catch(error => console.log(error))
        }

        //Tenemos que guardar esta info en la base de datos

    },
    comment: function (req, res) {
        //return res.send( req.body)
     
            //Obtener los datos del formulario y armar el objeto literal que quiero guardar
            let comentario = {
                FkProductId: req.params.id,
                FkUserId:req.session.user.id,
                createdAt:Date.now(),
                comentario:req.body.comentario
              
            }
            comentarios.create(comentario)
                .then(function (comment) { //En el parametro recibimos el registro que se acaba de crear en la base de datos

                    return res.redirect('/product/'+req.params.id)
                })
                .catch(error => console.log(error))

        //Tenemos que guardar esta info en la base de datos

    }

}

module.exports = controladorProductos;