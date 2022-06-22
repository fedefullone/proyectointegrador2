const db = require('../database/models');// Trae los modelos
const users = db.User; //Este es el alias
const products = db.Product;
const op = db.Sequelize.Op


const controladorMain = {
    index: function(req, res) {
        //promesa find all
        products.findAll(
            {
            //pongo order descendente y createdAt
            order : [['createdAt', 'DESC']],
            limit: 12,
            include:{
            all:true,
            nested:true
            }
        }
        )
       //Hacer el then(results) que renderiza index y le paso como objeto literal results//
       .then(function(results){
            //Renderizamos la vista de Index-Home page y le pasamos a la vista informacion de los results de la promesa// 
           return res.render('index' , {sneakers: results})
         //return res.send(results)
              
         }
        
        );
    },
    searchResults: function (req, res) {
        let search = req.query.search
        products.findAll({
           include: [{
              association: 'owner'
           }, {
              association: 'comentarios'
           }],
           where: {
              [op.or]: [{
                    nombre: {
                       [op.like]: `%${search}%`
                    }
                 },
                 {
                    descripcion: {
                       [op.like]: `%${search}%`
                    }
                 }
              ]
           }
        }).then(function (products) {
              return res.render('search-results', {
                 productos: products
              })
        })
     },

        
            
        
    
    
};

module.exports = controladorMain;