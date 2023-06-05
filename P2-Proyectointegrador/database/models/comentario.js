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
        timestamps: false
    }
    const Comentarios = sequelize.define(alias, cols, config)
    return Comentarios
}