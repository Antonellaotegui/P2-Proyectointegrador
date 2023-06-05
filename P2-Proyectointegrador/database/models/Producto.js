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


        Product.associate = function(models){
            Product.belongsTo(models.Users, 
            {
                as:'productos_users',
                foreignKey: 'users_id'
            });
        
            Product.hasMany(models.Comentarios,
                {
                    as:'comentarios',
                    foreignKey:'products_id',
            });
        
    
       
    }

    return Productos

 
}