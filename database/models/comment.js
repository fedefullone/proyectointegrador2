module.exports = function(sequelize, dataTypes){
// Definimos un alias con el que luego vamos a llamarlo en el controlador
let alias = 'Comment';
//Agregamos las columnas y sus propiedades
let cols = {
    id: {
        primaryKey: true,
        notNull: true,
        autoIncrement: true,
        type: dataTypes.INTEGER.UNSIGNED,
    },
    comentario: {
        notNull: false,
        type: dataTypes.STRING,
    },
    FkProductId: {
        notNull: false,
        type: dataTypes.INTEGER.UNSIGNED,
    },
    FkUserId: {
        notNull: false,
        type: dataTypes.INTEGER.UNSIGNED,
    },
    createdAt: {
        notNull: false,
        type: dataTypes.DATE,
    },
    updatedAt: {
        notNull: false,
        type: dataTypes.DATE,
    }
}

//Configuraciones adicionales
let config = { 
    tableName: 'comments',
    timestamps: true, //le dice al modelo si la tabla estan las columnas updatedAt y createdAt
    underscored: false, //si la tabla tiene columnas con nombres usando _.
}
const Comment = sequelize.define(alias, cols, config);

//Relaciones entre tablas
Comment.associate = function(models){
    Comment.belongsTo(models.product,
        {
            as: 'productoComentado',
            foreignKey: 'FkProductId'
        });

    Comment.belongsTo(models.user,
        {
            as: 'comentador',
            foreignKey: 'FkUserId'
        });
    }



return Comment;
}