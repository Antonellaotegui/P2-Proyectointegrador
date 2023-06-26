let db = require ("../database/models")
let Op = db.Sequelize.Op

const productoscontroller={
    detalle: function (req, res){
        let indice=req.params.id
        db.Productos.findByPk(indice, {
            include: [
                    {association: 'productsconcomentarios',
                    include: [{association: 'comentsconusers'}]
                },
                {association: "productsconusers"},
            ],
            order: [["productsconcomentarios","id","DESC"]]
        })
        .then(function(data){
            let logeadoproducto
            if (req.session.user !== undefined){
                if(req.session.user.id !== data.users_id){
                    logeadoproducto = false
                }else {
                    logeadoproducto = true
                }
             } else {
                logeadoproducto = false
             }

            res.render("productos", {
                comentario:data.productsconcomentarios,
                producto:data,
                logeadoproducto,
                
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

    
    },
    productsadd: function (req, res) {
        res.render('product-add',{
        })
    },

    searchresults: function (req, res){
        let busqueda = req.query.search
        db.Productos.findAll({
            where:{
                [Op.or]:[
                {nombre:{
                    [Op.like]:`%${busqueda}%`
                }}, 
                {descripcion:{
                    [Op.like]:`%${busqueda}%`
                }}, 
                
            ]},
            order:[
                    ["created_at", "DESC"], 
                ],
            include:  {association:"productsconusers"},
            
        } )
        .then(function(data){

            let hayresultados
            if (data.length == 0){
                hayresultados = false
            } else{
                hayresultados = true
            }

            res.render("search-results",{
                // userlogueado:false,
                busqueda: busqueda,
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
        db.Productos.create(
            {
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            users_id: req.session.user.id
            
            }
        )
        .then(function(data){
            res.redirect("/users/profile")
            })
        
        .catch(function(err){
            console.log(err)
        })
    },
    update: function (req,res){
        let id= req.body.id
        console.log(id)
        db.Productos.update({
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
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
    createcomment: function(req,res){
            let users_id=req.session.user.id
            let producto_id=req.params.id
            let comentario= req.body.comentario
            db.Comentarios.create({
                comentario:comentario,
                users_id:users_id,
                producto_id:producto_id
            })
            .then(function(data){
                res.redirect(`/products/detalle/`+ producto_id)
            })
            .catch(function(err){
                console.log(err)
            })
        },
        delete: function(req, res){
            let {id} = req.body
            db.Productos.destroy({
                where: {id:id}
            })
            .then(function(resp){
                    res.redirect('/users/profile')
                    })
                .catch(function(err){
                    console.log(err)
                    })
        }

        
    }

module.exports= productoscontroller