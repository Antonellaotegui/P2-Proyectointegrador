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
        Productos.belongsTo(models.Generos, {
            as:'generos',
            foreignKey:'genre_id'
        })

        Productos.belongsToMany(models.Actors, {
            as: 'actores',
            through: 'actor_movie',
            foreignKey:'movie_id',
            otherKey: 'actor_id',
            timestamps:false
        })
    }

    return Productos


}