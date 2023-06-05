module.exports =  function(sequelize, dataTypes){
    let alias = 'Productos'
    let columnas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        user_id:{
            type:dataTypes.STRING
        },
        nombre:{
            type: dataTypes.STRING
        },
        descripcion:{
            type: dataTypes.TEXT
        }
    }

    let config = {
        tableName: 'productos',
        timestamps: false
    }

    
    const Productos = sequelize.define(alias, columnas, config)


        Productos.associate = function(models){
            Productos.belongsTo(models.Users, 
            {
                as:'users',
                foreignKey: 'users_id'
            });
        
            Productos.hasMany(models.Comentarios,
                {
                    as:'comentarios',
                    foreignKey:'productos_id',
            });
        
    
       
    }

    return Productos

 
}