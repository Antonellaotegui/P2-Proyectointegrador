module.exports = function( sequelize, dataTypes) {
    let alias =  'Comentarios';
    let cols = {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user_id:{
            type: dataTypes.INTEGER
        },
        producto_id:{
            type: dataTypes.INTEGER
        },
        comentario:{
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    }
    let config= {
<<<<<<< HEAD
        tableName:'comentarios',
        timestamps: 'false'
=======
        tableName:"comentarios",
        timestamps: true
>>>>>>> f499fa5dc8499b12dcb32b94391b5719b5121d05
    }
    const Comentarios = sequelize.define(alias, cols, config);

    //relaciones

    Comentarios.associate = function (models) {
        Comentarios.belongsTo(models.Productos, {
            as: 'comentsconproductos',
            foreignKey : 'productos_id',
            timestamps: false
        })
        Comentarios.belongsTo(models.Users, {
            as : 'comentsconusers',
            foreignKey : 'users_id',
            timestamps:false
        })
<<<<<<< HEAD
 }
=======
}
    
>>>>>>> f499fa5dc8499b12dcb32b94391b5719b5121d05
    return Comentarios
}