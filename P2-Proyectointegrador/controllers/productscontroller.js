const objliteral= require("../db/index")
let usuarioslista= objliteral.usuario
let productoslista= objliteral.productos
let comentarioslista= objliteral.comentarios
const productoscontroller={
    products: function (req, res) {
        return res.render('productos', {
            dataproductos: productoslista,
            userlogueado:false
        })
    },
    productsadd: function (req, res) {
        return res.render('product-add',{
            dataproductos: productoslista,
            userlogueado:false
        })
    },
    detalle: function (req, res) {
        console.log('Pasa por aqui')
       let indice = req.params.id
            for(let i = 0; i< productoslista.length; i++){
                if (productoslista[i].id == indice){
                    res.render("productos",{
                        detalleProducto: productoslista[i],
                        userlogueado:false
                    })
                    }
                }
    },
}


module.exports= productoscontroller