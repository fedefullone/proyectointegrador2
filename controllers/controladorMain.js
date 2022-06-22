const db = require('../database/models');// Trae los modelos
const users = db.User; //Este es el alias
const products = db.Product;


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
    }

        
            
        
    
    
};

module.exports = controladorMain;