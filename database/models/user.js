module.exports = function (sequelize, dataTypes) {

    // Definimos un alias con el que luego vamos a llamarlo en el controlador
    let alias = 'User';
    //Agregamos las columnas y sus propiedades
    let cols = {
        id: {
            primaryKey: true,
            notNull: true,
            autoIncrement: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        email: {
            notNull: true,
            type: DataTypes.STRING.UNIQUE,
        },
        password: {
            notNull: true,
            type: DataTypes.STRING,
        },
        birthdate: {
            notNull: false,
            type: DataTypes.DATE,
        },
        dni: {
            notNull: true,
            type: DataTypes.STRING,
        },
        image: {
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
        }
    }

    //Configuraciones adicionales
    let config = {
        tableName: 'users',
        timestamps: true, //le dice al modelo si la tabla estan las columnas updatedAt y createdAt
        underscored: false, //si la tabla tiene columnas con nombres usando _.
    }
    const User = Sequelize.define(alias, cols, config);

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