module.exports = function( sequelize, dataTypes) {
    let alias =  'Comentarios';
    let cols = {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        users_id:{
            type: dataTypes.INTEGER
        },
        producto_id:{
            type: dataTypes.INTEGER
        },
        comentario:{
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }
    }
    let config= {
        tableName:'comentarios',
        timestamps: false,
    }
    const Comentarios = sequelize.define(alias, cols, config);

    //relaciones

    Comentarios.associate = function (models) {
        Comentarios.belongsTo(models.Productos, {
            as: 'comentsconproductos',
            foreignKey : 'producto_id',
            timestamps: false
        })
        Comentarios.belongsTo(models.Users, {
            as : 'comentsconusers',
            foreignKey : 'users_id',
            timestamps:false
        })
 }

 return Comentarios
}
    
