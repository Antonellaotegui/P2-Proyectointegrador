module.exports = function( sequelize, dataTypes) {
    let alias =  'Comentarios'
    let cols = {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        users_id:{
            type: dataTypes.INTEGER
        },
        prodcuto_id:{
            type: dataTypes.INTEGER
        },
        comentario:{
            type: dataTypes.STRING
        }
    }
    
    let config= {
        tableName:'comentarios',
        timestamps: 'true'
    }
    const Comentarios = sequelize.define(alias, cols, config)

    //relaciones

    Comentarios.associate = function (models) {
        Comentarios.belongsTo(models.Productos, {
            as: 'productos',
            foreignKey : 'productos_id'
        })
        Comentarios.belongsTo(models.Users, {
            as : 'users',
            foreignKey : 'users_id'
        })
 }





    return Comentarios
}