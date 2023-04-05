const productoscontroller={
    products: function (req, res) {
        return res.render('productos')
    },
    productsadd: function (req, res) {
        return res.render('product-add')
    },
    detalle: function (req, res) {
       let indice = req.params.id
            for(let i = 0; i< listaProductos.length; i++){
                if (listaProductos[i].id == indice){
                    res.render("product",{
                        detalleProducto: listaProductos[i]
                    })
                    } 
        return res.render('productos')
                }
    },
}


module.exports= productoscontroller