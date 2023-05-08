const objliteral= require("../db/index")
let productoslista= objliteral.productos
let comentarioslista= objliteral.comentarios
let usuarioslista = objliteral.usuario
const productoscontroller={  //el objeto literal del controlador adentro tiene muchos metodos, no son claves y valores como antes
    productsadd: function (req, res) {
        return res.render('product-add',{
            datosUsuario: usuarioslista,
            userlogueado:true,
        })   
    },
    detalle: function (req, res) {
       let indice = req.params.id
            for(let i = 0; i< productoslista.length; i++){
                if (productoslista[i].id == indice){
                    res.render("productos",{
                        detalleProducto: productoslista[i],
                        detalleComentarios: comentarioslista[i], //porque no se pone un igual y se ponen dos puntos?
                        comentarioslista:comentarioslista,
                        productoslista:productoslista,
                        userlogueado:false
                    })
                    }
                }

    },
    searchresults: function (req, res){
        res.render("search-results",{
            comentarioslista:comentarioslista,
            productoslista:productoslista,
            userlogueado:false
        })
    }
}


module.exports= productoscontroller