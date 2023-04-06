const objliteral= require("../db/index")
usuarioslista= objliteral.usuario
productoslista= objliteral.productos
comentarioslista= objliteral.comentarios
const productoscontroller={
    products: function (req, res) {
        return res.render('productos')
    },
    productsadd: function (req, res) {
        return res.render('product-add')
    },
    detalle: function (req, res) {
       let indice = req.params.id
            for(let i = 0; i< productoslista.length; i++){
                if (productoslista[i].id == indice){
                    res.render("productos",{
                        detalleProducto: productoslista[i]
                    })
                    } 
        return res.render('productos')
                }
    },
}


module.exports= productoscontroller