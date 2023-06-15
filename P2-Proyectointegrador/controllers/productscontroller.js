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
                {association:"productsconcomentarios",
                association: "productsconusers"}
            ],
            // order: [["productsconcomentarios","id","DESC"]]
        })
        .then(function(data){
            let logeadoproducto
            if(req.session.user != undefined){
                if(req.session.user !== data.users_id){
                    logeadoproducto= false
                }else{
                    logeadoproducto= true
                }  
            }else{
                logeadoproducto= false
            }
            res.render("productos", {
                comments:data.productsconcomentarios,
                producto:data,
                logeadoproducto
                
            })
        })
        .catch(function(err){
            console.log(err)
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
                [Op.or]:[
                {nombre:{
                    [Op.like]:`%{busqueda}%`
                }}, 
                {descripcion:{
                    [Op.like]:`%{busqueda}%`
                }}, 
                
            ]},
            order:[
                    ["created_at", "DESC"], 
                ],
            include:  {association:"productsconusers"},
            raw:true,
        } )
        .then(function(data){

            let hayresultados
            if (data.length > 0){
                hayresultados=true
            } else{
                hayresultados=false
            }
            res.render("search-results",{
                // userlogueado:false,
                search: busqueda,
                resultados: data,
                hayresultados: hayresultados
        }) 
        })
        .catch(function(err){
            console.log(err)
        })

    },
    editproduct: function (req, res){
        let indice=req.params.id
        db.Productos.findByPk(indice, {
            nest: true,
            include:{association:"productsconusers"}
        })
        .then(function(data){
            res.render("edit_product", {
                producto:data,
            })
        })
        .catch(function(err){
            console.log(err)
        })

    },
    crear: function (req, res){
        let id= req.session.user.id
        let nombre= req.body.nombre
        let descripcion= req.body.descripcion
        let imagen= req.body.imagen
        
        db.Productos.create(
            {
            users_id:id,
            nombre: nombre,
            descripcion: descripcion,
            imagen:imagen,
            }
        )
        .then(function(data){
            res.redirect("/users/profile")
            })
        
        .catch(function(err){
            console.log(err)
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
        let id = req.params.id
        let {nombre, descripcion, imagen, created_at }= req.body
        db.Productos.update({
            imagen:imagen,
            nombre:nombre,
            descripcion:descripcion,
            created_at:created_at
        }, 
            {
            where:{
                id:id
            }
        })
        .then(function(res){
            res.redirect("/products/detalle/${id}")
        })
        .catch(function(err){
            console.log(err)
        })
        },
    // delete: function(req,res){
    //     res.send(req.params)
    //     let id= req.params.id
    //     db.Productos.destroy({
    //         where:{
    //             id:id
    //         }
    //     })
    //     .then(function(resp){
    //         res.redirect("/")
    //     })
    //     .catch(function(err){
    //         console.log(err)
    //     })
    // },

        
    }




module.exports= productoscontroller