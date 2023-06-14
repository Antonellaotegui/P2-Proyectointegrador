// const objliteral= require("../db/index")
// let productoslista= objliteral.productos
// let comentarioslista= objliteral.comentarios
let db = require ("../database/models")
let Op = db.Sequelize.Op

const productoscontroller={
    detalle: function (req, res){
        let indice=req.params.id
        db.Productos.findByPk(indice, {
            include: [
                {association: "productsconusers"},
                {association: "productsconcomentarios"}
            ],
            // order: [["productsconcomentarios","id","DESC"]]
        })
        .then(function(data){
            res.render("productos", {
                // userlogueado:false,
                producto:data
            })
        })
        .catch(function(err){

        })
    },
    products: function (req, res) {
        return res.render("productos",{
            // comentarioslista:comentarioslista,
            // productoslista:productoslista,
            // userlogueado:false
        } )
    //         for(let i = 0; i< productoslista.length; i++){
    //             if (productoslista[i].id == indice){
    //                 res.render("productos",{
    //                     detalleProducto: productoslista[i],
    //                     detalleComentarios: comentarioslista[i],
    //                     comentarioslista:comentarioslista,
    //                     productoslista:productoslista,
    //                     userlogueado:false
    //                 })
    //                 }

    // }
    
    },
    productsadd: function (req, res) {
        res.render('product-add',{
            // productoslista: productoslista,
            // comentarioslista:comentarioslista,
            // userlogueado:true
        })
    },

    searchresults: function (req, res){
        let busqueda = req.query.search
        db.Productos.findAll({
            where:{
                nombre:{
                    [Op.like]:`%{busqueda}%`
                }, 
                descripcion:{
                    [Op.like]:`%{busqueda}%`
                }, 
                order:[
                    ["nombre", "DESC"], 
                ]
            },
            raw:true,
        } )
        .then(function(data){

            let encontroresultados
            if (data.length > 0){
                encontroresultados=true
            } else{
                encontroresultados=false
            }
            res.render("search-results",{
                // userlogueado:false,
                search: busqueda,
                resultados: data,
                encontroresultados: encontroresultados
        })    
        })

    },
    editproduct: function (req, res){
        res.render("search-results",{
            // comentarioslista:comentarioslista,
            // productoslista:productoslista,
            // userlogueado:true
        })
    },
    crear: function (req, res){
        
        db.Productos.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            created_at: req.body.created_at
            //falta imagen
        })
        .then(function(data){
            res.redirect("/")   
            })
        
        .catch(function(err){
        })
    },
        delete: function(req,res){
        let id= req.params.id
        db.Productos.destroy({
            where:{
                id:id
            }
        })
        .then(function(res){
            res.redirect("/")
        })
        .catch(function(err){
            console.log(err)
        })
    },
    update: function (req,res){
        let {nombre, descripcion, imagen,id}= req.body
        db.Productos.update({
            imagen:imagen,
            nombre:nombre,
            descripcion:descripcion,
        }, 
            {
            where:{
                id:id
            }
        })
        .then(function(res){
            res.redirect("/")
        })
        .catch(function(err){
            console.log(err)
        })
        }
        
    }




module.exports= productoscontroller