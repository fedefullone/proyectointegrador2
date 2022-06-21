module.exports = function (sequelize, dataTypes) {

    // Definimos un alias con el que luego vamos a llamarlo en el controlador
    let alias = 'User';
    //Agregamos las columnas y sus propiedades
    let cols = {
        id: {
            primaryKey: true,
            notNull: true,
            autoIncrement: true,
            type: dataTypes.INTEGER.UNSIGNED,
        },
        email: {
            notNull: true,
            type: dataTypes.STRING,
        },
        password: {
            notNull: true,
            type: dataTypes.STRING,
        },
        birthdate: {
            notNull: false,
            type: dataTypes.DATE,
        },
        dni: {
            notNull: true,
            type: dataTypes.STRING,
        },
        image: {
            notNull: true,
            type: dataTypes.STRING,
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
        tableName: 'users',
        timestamps: true, //le dice al modelo si la tabla estan las columnas updatedAt y createdAt
        underscored: false, //si la tabla tiene columnas con nombres usando _.
    }
    const User = sequelize.define(alias, cols, config);

    //Relaciones entre tablas

    User.associate = function (models) {
        User.hasMany(models.product, {
            as: 'posteos',
            foreignKey: 'id'
        });

        User.hasMany(models.comment, {
            as: 'comentarios',
            foreignKey: 'id'
        });
    }



    return User;
}