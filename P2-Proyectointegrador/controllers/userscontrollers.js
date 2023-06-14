//const db= require("../database/models/index")
const bcrypt= require("bcryptjs")
const db= require("../database/models")
const Op= db.sequelize.Op

const LoginController = {
    login: function (req, res) {
        res.render('login', {
            // userlogueado:false
        })
    },
    register: function (req, res) {
         res.render('registros',{
            //  userlogueado:false
        })
    },
    profileEdit: function (req,res){
        id= req.session.user.id
        db.Users.findByPK(id)
        .then(function(usuario){
            res.render("profile-edit", {
            // userlogueado:true,
            // usuario:usuario
            })
        })
        .catch(function(err){
            console.log(err)
        })
        
    },
    
    profile: function (req, res){
        id=req.session.user.id
        db.Users.findByPK(id, {
            include:[
                {
                    association: "productosconusuarios",
                    association: "usuariosconcomentarios",
                    raw:true,
                    nest:true

                }
            ]
        }) 
        .then(function(usuario){
          res.render('profile',{
            // userlogueado:true,
            usuario:usuario
            })  
        })
        .catch(function(err){
            console.log(err)
        })
        
    },
    create: function(req, res){
        let nombre= req.body.nombre
        let email= req.body.email
        let password= req.body.password
        db.Users.findOne({
            where:{
                email:email
            }
        })
        if (email==""){
            let errors={};
            errors.message= "Debes ingresar un email"
            req.locals.errors= errors
            res.render ("register", );
        } else if (password==""){
            let errors={};
            errors.message= "Debes ingresar una contraseña"
            res.locals.errors =errors
            res.render("register");
        }else if(password.length<3){
            let errors={};
            errors.message= "La contraseña debe tener mas de tres digitos"
            res.locals.errors =errors
            res.render("register");
        }else{
            let passencriptada = bcrypt.hashSync(password, 12)
        db.Users.create(
            {
                nombre:nombre,
                email:email,
                password:passencriptada
            }
        )
        .then(function(resp){
            res.redirect("/users/profile")
        })
        .catch(function(err){
            console.log(err)
            if(err.name = "SequelizeUniqueConstraintError"){
                let errors={}
                errors.mensaje= "este mail ya esta ocupado por otro usuario"
                res.locals.errors=errors
                res.render("register")
            }
        })
        }
        
        let passencriptada = bcrypt.hashSync(password, 12)
        db.Users.create(
            {
                nombre:nombre,
                email:email,
                password:passencriptada
            }
        )
        .then(function(resp){
            res.redirect("/users/profile")
        })
        .catch(function(err){
            console.log(err)
            if(err.name = "SequelizeUniqueConstraintError"){
                let errors={}
                errors.mensaje= "este mail ya esta ocupado por otro usuario"
                res.locals.errors=errors
                res.render("register")
            }
        })
    },
    chequeo: function(req,res){
        let email= req.body.email
        let password= req.body.password
        let rememberme= req.body.rememberme

        db.Users.findOne({
            where:{
                email
            }
        })
        .then(function(usuario){
            let correctpass=bcrypt.compareSync(password,user.password)
            if(correctpass){
                res.session.user= {
                    id:usuario.id,
                    nombre: usuario.nombre,
                    email: usuario.email
                }
                if (rememberme === "on"){
                    res.cookie("rememberUser",{
                        id:usuario.id,
                        nombre: usuario.nombre,
                        email: usuario.email
                    },{
                        maxAge: 1000 * 15
                    }
                    
                    )
                }
                res.redirect("/users/profile" )
            }
        })
        .catch(function(err){
            console.log(err)
        })
    },
    // eliminar: function(req,res){
    //     let id= req.params.id
    //     db.Users.destroy({
    //         where:{
    //             id:id
    //         }
    //     })
    //     .then(function(response){
    //         res.redirect("/")
    //     })
    //     .catch(function(err){
    //         console.log(err)
    //     })
    // }
}

// agregar el rememberme ademas del email y password en checkUser tambien agregar lo de las cookies y el if de rememberme (todo en la primer clase de cookies)



module.exports = LoginController;