const objliteral= require("../db/index")
usuarioslista= objliteral.usuario
productoslista= objliteral.productos
comentarioslista= objliteral.comentarios
const index={
    index: function (req, res){
    return res.render('index',{
        usersdata: usuarioslista,
        dataproductos: productoslista,
        datacomentarios: comentarioslista,
        userlogueado:false
    })
}
}

module.exports = index;





