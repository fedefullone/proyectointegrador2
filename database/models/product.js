module.exports = function(sequelize, dataTypes){
// Definimos un alias con el que luego vamos a llamarlo en el controlador
let alias = 'Product';
//Agregamos las columnas y sus propiedades
let cols = {
    id: {
        primaryKey: true,
        notNull: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
    },
    marca: {
        notNull: true,
        type: DataTypes.STRING,
    },
    modelo: {
        notNull: true,
        type: DataTypes.STRING,
    },
    descripcion: {
        notNull: true,
        type: DataTypes.STRING,
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
        notNull: false,
        type: DataTypes.DATE,
    },
    updatedAt: {
        notNull: false,
        type: DataTypes.DATE,
    },
    deletedAt: {
        notNull: false,
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