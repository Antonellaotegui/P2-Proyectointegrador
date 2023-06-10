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
        },
        created_at:{
            type:dataTypes.DATE
        }
    }

    let config = {
        tableName: 'productos',
        timestamps: 'true'
    }

    
    const Productos = sequelize.define(alias, columnas, config)


        Productos.associate = function(models){
            Productos.belongsTo(models.Users, 
            {
                as:'productsconusers',
                foreignKey: 'users_id'
            });
        
            Productos.hasMany(models.Comentarios,
                {
                    as:'productsconcomentarios',
                    foreignKey:'productos_id',
            });
        
    
       
    }

    return Productos

 
}