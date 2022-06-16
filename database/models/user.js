// Definimos un alias con el que luego vamos a llamarlo en el controlador
let alias = 'User';
//Agregamos las columnas y sus propiedades
let cols = {
    id: {
        primaryKey: true,
        notNull: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED.UNIQUE,
    },
    email: {
        notNull: true,
        type: DataTypes.STRING,
    },
    password: {
        notNull: true,
        type: DataTypes.STRING,
    },
    date: {
        notNull: true,
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
        notNull: true,
        type: DataTypes.DATE,
    },
    updatedAt: {
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