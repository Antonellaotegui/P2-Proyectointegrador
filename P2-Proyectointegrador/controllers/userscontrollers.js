const db= require("../database/models/index")
const Op= db.sequelize.Op
const bcrypt= require("bcryptjs")
// const { comentarios } = require("../db")


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
       let  id= req.session.user.id
        db.Users.findByPK(id)
        .then(function(usuario){
            res.render("profile-edit", {
            // userlogueado:true,
            usuario:usuario
            })
        })
        .catch(function(err){
            console.log(err)
        })
        
    },
    // profile: function(req, res) {
    //     let idPerfil
    //     let perfil_logueado
    //     if(req.params.id){
    //       idPerfil = req.params.id
    //       perfil_logueado = false
    //     } else {
    //       idPerfil = req.session.user.id
    //       perfil_logueado = true
  
    //     }
    //     //let idLogueado = req.session.user.id
    //     db.usuarios.findByPk(idPerfil, {
    //       order: [["usuarios_productos",'createdAt', 'DESC']],
    //       include: [{association:"usuarios_productos"}, {association:"usuarios_comentarios"}]
    //     })
    //     .then(function(data){
    //       res.render('profile',{
    //           usuario : data,
    //           perfil_logueado
    //       })
    //       })
    //       .catch(function(error){
    //         console.log(error)
    //       })
    //     },

    profile: function (req, res){
        let idcomentario
        let userlog
        if(req.params.id){
            idcomentario = req.params.id
            userlog = false
        } else {
            idcomentario = req.session.user.id
            userlog = true
        } 
        // let idLog = req.session.user.id

        db.Users.findByPk(idcomentario, {
            include: [
                {association:"userconproductos"}, 
                {association:"userconcomentarios"}],
            nest:true,
            order: [["userconproductos",'createdAt', 'DESC']],

        }) 
        .then(function(data){
            res.render('profile',{
                user: data,
                userlog
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
        let fotodeperfil= req.body.fotodeperfil
        let dni=req.body.dni
        let fecha_de_nacimiento= req.body.fecha_de_nacimiento
        // res.send(req.body)
       
        db.Users.findOne({
            where:{
                email:email
            }
            
        })
        .then(function (repetido) {
            if (repetido != undefined) {
                let errors = {}
                errors.message = 'Ya existe un usuario con este email'
                res.locals.errors = errors
                res.render('register');
            }
        })
        if (email==""){
            let errors={};
            errors.message= "Debes ingresar un email"
            req.locals.errors= errors
            res.render ("registros", );
        } else if (password==""){
            let errors={};
            errors.message= "Debes ingresar una contraseña"
            res.locals.errors =errors
            res.render("registros");
        }else if(password.length<3){
            let errors={};
            errors.message= "La contraseña debe tener mas de tres digitos"
            res.locals.errors =errors
            res.render("registros");
        }else{
            let passencriptada = bcrypt.hashSync(password, 12)
        db.Users.create(
            {
                nombre:nombre,
                email:email,
                password:passencriptada,
                foto_de_perfil:fotodeperfil,
                fecha_de_nacimiento: fecha_de_nacimiento,
                dni:dni
            }
        )
        .then(function(data){
            res.redirect("/users/login")
            console.log(data)
        })
        .catch(function(err){
            console.log(err)
            if(err.name = "SequelizeUniqueConstraintError"){
                let errors={}
                errors.mensaje= "este mail ya esta ocupado por otro usuario"
                res.locals.errors=errors
                res.render("registros")
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
                res.render("registros")
            }
        })
    },
    chequeo: function(req,res){
        let email= req.body.email
        let password= req.body.password
        let rememberMe= req.body.rememberMe

        db.Users.findOne({
            where:{
                email
            }
        })
        .then(function(usuario){
            let correctpass=bcrypt.compareSync(password,usuario.password)
            if(correctpass){
                req.session.user= {
                    id:usuario.id,
                    nombre: usuario.nombre,
                    email: usuario.email
                }
                if (rememberMe === "on"){
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
    // createcomment: 

    //     function(req,res){
    
    //         if(req.session.user){
    //         db.comentarios.create({
    //             product_id: req.params.id,
    //             users_id: req.session.user.id,
    //             comentario: req.body.comentario
    //         })
    //             res.redirect(`/products/detalle/${req.params.id}`)
    //           }
    //         else{
    //             res.redirect('/users/login')
    //         }
           
    //     }

    // }
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


//let mail_repetido= {where:[{email: {[op.like]:req.body.mail}}]}


//OTRA MANERA DE HACERLO SI NO FUNCIONA LO DE ARRIBA:

// db.User.findOne(mail_repetido)
// .then(function(mail_repetido){
//     if (mail_repetido != undefined){
//         errors.message = "El email ingresado ya esta registrado";
//         res.locals.errors = errors
//         return res.render('register')}
    
//     else{
        
//         if (req.body.mail == '' && req.body.contra == '' ){
//             errors.message = "Los campos de Email y contraseña estan vacios, completelos";
//             res.locals.errors = errors
//             return res.render('register')
//         }
//         else if (req.body.mail == ''){
//             errors.message = "El campo de Email esta vacio, completelo";
//             res.locals.errors = errors
//             return res.render('register')
//         }  
//         else if (req.body.contra == ''){
//             errors.message = "El campo de Password esta vacio, completelo";
//             res.locals.errors = errors
//             return res.render('register')
//         } 
//         else if(req.body.contra.length <3){
//             errors.message = "La contraseña debería tener al menos 3 caracteres";
//             res.locals.errors = errors;
//             return res.render('/register')
//         }
        
//         else{
//             db.User.create(user)
//             .then(function(usuariocreado) {
//                 return res.redirect('/')
//             })
//             .catch(function(e){
//                 console.log(e);
//             })
//         }

//     }
// })
// .catch(function(e){
// console.log(e);
// })




// }
// }
module.exports = LoginController;