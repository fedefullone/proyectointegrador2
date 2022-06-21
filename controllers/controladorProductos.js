const db = require('../database/models') //Trae los modelos
const products = db.Product; //Este es el alias
const marcas = db.Marca

const controladorProductos = {
    index: function (req, res) {
        products.findAll({
            include: [
                { association: 'marca' }
            ]
        })
            .then(function (sneakers) {
                return res.send(sneakers)
                return res.render('index', { products: sneakers });
            })
    },

    show: function (req, res) {
        let id = req.params.id

        products.findByPK(id)
            .then(function (zapatilla) {
                return res.send(zapatilla)
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
    create: function (req, res) {
        marcas.findAll()
            .then(function (marcas) {
                return res.render('NuevoProducto', { marcas: marcas })
            })
            .catch(error => console.log(error))


    },
    store: function (req, res) {
        //Obtener los datos del formulario y armar el objeto literal que quiero guardar
        let sneaker = {
            modelo: req.body.modelo,
            marca: req.body.marca,
            descripcion: req.body.descripcion,
            color: req.body.color,
            //imagen aca: req.body.release_date,
            
        }
        //Guardar la info en la base de datos
        products.create(sneaker)
            .then(function (respuesta) { //En el parámetro recibimos el registro que se acaba de crear en la base de datos.
                return res.send(respuesta)
                //redirigir
                return res.redirect('/')
            })
            .catch(error => console.log(error))

    }


}

module.exports = controladorProductos;