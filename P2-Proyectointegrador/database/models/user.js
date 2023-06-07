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
        timestamps: 'true'
    }
    const Users = sequelize.define(alias, cols, config)

    Users.associate = function(models){
        Users.hasMany(models.Productos, 
        {
            as:'productos',
            foreignKey: 'users_id'
        });
    
        Users.hasMany(models.Comentarios,
            {
                as:'comentarios',
                foreignKey:'users_id',
            });
    }




    return Users
}