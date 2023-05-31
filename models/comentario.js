module.exports = function( sequelize, dataTypes) {
    let alias =  'comentarios'
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
    const Users = sequelize.define(alias, cols, config)
    return Users
}