module.exports =  function(sequelize, dataTypes){
    let alias = 'Productos'
    let columnas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        users_id:{
            type:dataTypes.INTEGER
        },
        nombre:{
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        },
        descripcion:{
            type: dataTypes.STRING
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

    let config = {
        tableName: 'productos',
        timestamps: true,
        underscored: true
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