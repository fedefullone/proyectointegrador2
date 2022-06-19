module.exports = function(sequelize, dataTypes){
// Definimos un alias con el que luego vamos a llamarlo en el controlador
let alias = 'Product';
//Agregamos las columnas y sus propiedades
let cols = {
    id: {
        primaryKey: true,
        notNull: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED.UNIQUE,
    },
    marca: {
        notNull: true,
        type: DataTypes.STRING,
    },
    modelo: {
        notNull: true,
        type: DataTypes.STRING.UNIQUE,
    },
    fecha_de_lanzamiento: {
        notNull: true,
        type: DataTypes.INTEGER(4).UNIQUE,
    },
    descripcion: {
        notNull: true,
        type: DataTypes.INTEGER(4).UNIQUE,
    },
    image: {
        notNull: true,
        type: DataTypes.STRING,
    },
    color: {
        notNull: true,
        type: DataTypes.STRING,
    },
    createdAt: {
        notNull: true,
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
    deletedAt: {
        type: DataTypes.DATE,
    },

    FkUserId: {
        notNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
    }

}

//Configuraciones adicionales
let config = { 
    tableName: 'products',
    timestamps: true, //le dice al modelo si la tabla estan las columnas updatedAt y createdAt
    underscored: false, //si la tabla tiene columnas con nombres usando _.
}
const Product = Sequelize.define(alias, cols, config);

return Product;
}