module.exports = function( sequelize, dataTypes) {
    let alias =  'Comentarios'
    let cols = {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        users_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        prodcuto_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        comentario:{
            type: dataTypes.STRING,
            allowNull: false
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





    return Comentarios
}