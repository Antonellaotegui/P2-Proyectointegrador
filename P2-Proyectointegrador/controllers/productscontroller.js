const objliteral= require("../db/index")
let usuarioslista= objliteral.usuario
let productoslista= objliteral.productos
let comentarioslista= objliteral.comentarios
const productoscontroller={
    products: function (req, res) {
        return res.render('productos', {
            productoslista: productoslista,
            userlogueado:false
        })
    },
    productsadd: function (req, res) {
        return res.render('product-add',{
            productoslista: productoslista,
            userlogueado:true
        })
    },
    detalle: function (req, res) {
        console.log('Pasa por aqui')
       let indice = req.params.id
            for(let i = 0; i< productoslista.length; i++){
                if (productoslista[i].id == indice){
                    res.render("productos",{
                        detalleProducto: productoslista[i],
                        comentarioslista: comentarioslista[i],
                        userlogueado:false
                    })
                    }
                }
    },
}


module.exports= productoscontroller