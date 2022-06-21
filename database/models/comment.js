module.exports = function(sequelize, dataTypes){
// Definimos un alias con el que luego vamos a llamarlo en el controlador
let alias = 'Comment';
//Agregamos las columnas y sus propiedades
let cols = {
    id: {
        primaryKey: true,
        notNull: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
    },
    comentario: {
        notNull: false,
        type: DataTypes.STRING,
    },
    FkProductId: {
        notNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
    },
    FkUserId: {
        notNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
    },
    createdAt: {
        notNull: false,
        type: DataTypes.DATE,
    },
    updatedAt: {
        notNull: false,
        type: DataTypes.DATE,
    }
}

//Configuraciones adicionales
let config = { 
    tableName: 'comments',
    timestamps: true, //le dice al modelo si la tabla estan las columnas updatedAt y createdAt
    underscored: false, //si la tabla tiene columnas con nombres usando _.
}
const Comment = Sequelize.define(alias, cols, config);

return Comment;
}