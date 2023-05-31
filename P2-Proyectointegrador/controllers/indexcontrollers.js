const objliteral= require("../db/index") 
let usuarioslista= objliteral.usuario
let productoslista= objliteral.productos
let comentarioslista= objliteral.comentarios
const index={
    index: function (req, res){
    return res.render('index',{
        usuarioslista: usuarioslista,
        productoslista: productoslista,
        comentarioslista: comentarioslista,
        userlogueado:false
    })
}
}

module.exports = index;





