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
        tableName:'comentarios',
        timestamps: 'false',
        tableName:"comentarios",
        timestamps: true,
        timestamps: 'false'
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
 }

}
    
    return Comentarios
