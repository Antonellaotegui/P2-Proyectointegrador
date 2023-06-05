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
        Productos.belongsTo(models.Users, {
            as:'productos_usuarios',
            foreignKey:'usuarios_id'
        })

        Productos.belongsToMany(models.Actors, {
            as: '',
            through: '',
            foreignKey:'',
            otherKey: '',
            timestamps:false
        })
    }

    return Productos


}