module.exports = function( sequelize, dataTypes) {
    let alias =  'Users'
    let cols = {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        foto_de_perfil:{
            type: dataTypes.STRING
        },
        dni:{
            type: dataTypes.INTEGER
        },
        fecha_de_nacimiento:{
            type: dataTypes.DATE
        }
    }
    
    let config= {
        tableName:'users',
        timestamps: false
    }
    const Users = sequelize.define(alias, cols, config)
    return Users
}