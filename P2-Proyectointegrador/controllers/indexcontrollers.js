const objliteral= require("../db/index")
let usuarioslista= objliteral.usuario
let productoslista= objliteral.productos
let comentarioslista= objliteral.comentarios
const db = require("../database/models/index")
const index={
    index: function (req, res){
        db.Movies.findAll({
            raw: true,
            nest:true,
            include:[
                {association: 'generos'},
                {association: 'actores'}
            ]
            })
        .then(function(data){
            console.log(data)
            return res.render('index',{
                usuarioslista: usuarioslista,
                data : data,
                productoslista: productoslista,
                comentarioslista: comentarioslista,
                userlogueado:false
            })
        })
        .catch(function(err){console.log(err)})
    
}
}

module.exports = index;
