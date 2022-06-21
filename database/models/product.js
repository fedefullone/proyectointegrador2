module.exports = function (sequelize, dataTypes) {
    // Definimos un alias con el que luego vamos a llamarlo en el controlador
    let alias = 'Product';
    //Agregamos las columnas y sus propiedades
    let cols = {
        id: {
            primaryKey: true,
            notNull: true,
            autoIncrement: true,
            type: dataTypes.INTEGER.UNSIGNED,
        },
        marca: {
            notNull: true,
            type: dataTypes.STRING,
        },
        modelo: {
            notNull: true,
            type: dataTypes.STRING,
        },
        descripcion: {
            notNull: true,
            type: dataTypes.STRING,
        },
        image: {
            notNull: true,
            type: dataTypes.STRING,
        },
        color: {
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
        },
        deletedAt: {
            notNull: false,
            type: dataTypes.DATE,
        },

        FkUserId: {
            notNull: false,
            type: dataTypes.INTEGER.UNSIGNED,
        }

    }

    //Configuraciones adicionales
    let config = {
        tableName: 'products',
        timestamps: true, //le dice al modelo si la tabla estan las columnas updatedAt y createdAt
        underscored: false, //si la tabla tiene columnas con nombres usando _.
    }
    const Product = sequelize.define(alias, cols, config);

    //Relaciones entre tablas
    Product.associate = function (models) {
        Product.belongsTo(models.User, {
            as: 'owner',
            foreignKey: 'FkUserId'
        });
        Product.hasMany(models.Comment, {
            as: 'comentarios',
            foreignKey: 'FkProductId'
        });
    }
    return Product;
}