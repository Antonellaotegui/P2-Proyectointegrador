const objliteral= require("../db/index")
let usuarioslista= objliteral.usuario
let productoslista= objliteral.productos
let comentarioslista= objliteral.comentarios
const db = require("../database/models")
const index={
    index: function (req, res){
        db.Movies.findAll({
            raw: true,
            nest:true,
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
    
},
    logout: function (req, res){
        userlogueado:false
        res.redirect ("/")
    }

}

module.exports = index;
