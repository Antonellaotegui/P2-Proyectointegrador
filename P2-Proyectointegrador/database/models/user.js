module.exports = function( sequelize, dataTypes) {
    let alias =  'Users'
    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        nombre:{
            type: dataTypes.STRING,
            allowNull:false
        },
        password:{
            type: dataTypes.STRING,
            allowNull:false
        },
        email:{
            type: dataTypes.STRING,
            allowNull:false
        },
        foto_de_perfil:{
            type: dataTypes.STRING,
            allowNull:false
        },
        dni:{
            type: dataTypes.INTEGER,
            allowNull:false
        },
        fecha_de_nacimiento:{
            type: dataTypes.DATE
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    }
    
    let config= {
        tableName:'users',
        timestamps: true,
        underscored:true,
    }
    const Users = sequelize.define(alias, cols, config)

    Users.associate = function(models){
        Users.hasMany(models.Productos, 
        {
            as:'userconproductos',
            foreignKey: 'users_id'
        });
    
    Users.hasMany(models.Comentarios,
        {
             as:'userconcomentarios',
                 foreignKey:'users_id',
             });
    }
 return Users
}