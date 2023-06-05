const objliteral= require("../db/index")
let productoslista= objliteral.productos
let comentarioslista= objliteral.comentarios
const productoscontroller={
    products: function (req, res) {
        return res.render("productos",{
            comentarioslista:comentarioslista,
            productoslista:productoslista,
            userlogueado:false
        } )

    },
    productsadd: function (req, res) {
        return res.render('product-add',{
            productoslista: productoslista,
            comentarioslista:comentarioslista,
            userlogueado:true
        })
    },
    detalle: function (req, res) {
       let indice = req.params.id
            for(let i = 0; i< productoslista.length; i++){
                if (productoslista[i].id == indice){
                    res.render("productos",{
                        detalleProducto: productoslista[i],
                        detalleComentarios: comentarioslista[i],
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