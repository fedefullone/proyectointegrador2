module.exports = function(sequelize, dataTypes){
// Definimos un alias con el que luego vamos a llamarlo en el controlador
let alias = 'UserFollower';
//Agregamos las columnas y sus propiedades
let cols = {
    id:{
        primaryKey: true,
        notNull: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    FkUserId: {
        notNull: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    FkFollowerId: {
        notNull: true,
        type: DataTypes.INTEGER.UNSIGNED
    }

}

//Configuraciones adicionales
let config = { 
    tableName: 'userFollowers',
    timestamps: true, //le dice al modelo si la tabla estan las columnas updatedAt y createdAt
    underscored: false, //si la tabla tiene columnas con nombres usando _.
}
const UserFollower = Sequelize.define(alias, cols, config);

return UserFollower;
}
