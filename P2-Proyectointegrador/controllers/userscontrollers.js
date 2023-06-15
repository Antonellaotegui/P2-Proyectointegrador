//const db= require("../database/models/index")
const bcrypt= require("bcryptjs")
const db= require("../database/models")
const { comentarios } = require("../db")
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
            usuario:usuario
            })
        })
        .catch(function(err){
            console.log(err)
        })
        
    },
    
    profile: function (req, res){
        let id=req.session.user.id
        db.Users.findByPk(id, {
            nest:true,
            include:[
                {
                    association: "productosconusuarios",
                    association: "userconcomentarios",
                    
                }
            ]
        }) 
        .then(function(usuario){
          res.render('profile',{
            usuarioinfo:usuario
            // userlogueado:true,
            // usuario:usuario
            })  
        })
        .catch(function(err){
            console.log(err)
        })
        
    },
    create: function(req, res){
        // res.send(req.body)
        let nombre= req.body.nombre
        let email= req.body.email
        let password= req.body.password
        let fotodeperfil= req.body.fotodeperfil
        let dni=req.body.dni
        let fecha_de_nacimiento= req.body.fecha_de_nacimiento
        
        db.Users.findOne({
            where:{
                email:email
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
    createcomment: function(req,res){
        let users_id=req.session.user.id
        let product_id=req.params.id
        let {comment}= req.body
        db.Comentarios.create({
            comment:comment,
            users_id:users_id,
            product_id:product_id
        })
        .then(function(data){
            res.redirect("/products/detalle" + product_id)
        })
        .catch(function(err){
            console.log(err)
        })
    }
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