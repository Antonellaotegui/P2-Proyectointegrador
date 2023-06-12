const db= require("../database/models/index")
const bcrypt= require("bcryptjs")
const user = require("../database/models/user")
const LoginController = {
    login: function (req, res) {

        return res.render('login', {
            userlogueado:false
        })
    },
    register: function (req, res) {
        return res.render('registros',{
            userlogueado:false
        })
    },
    profileEdit: function (req,res){
        db.Users.findByPK(req.params.id)
        .then(function(usuario){
            res.render("profile-edit", {
            userlogueado:true,
            usuario:usuario
            })
        })
        .catch(function(err){
            console.log(err)
        })
        
    },
    
    profile: function (req, res){
        db.Users.findByPK(req.params.id)
        .then(function(usuario){
          return res.render('profile',{
            userlogueado:true,
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
        .catch(function(error){
        })
    },
    chequeo: function(req,res){
        let email= req.body.email
        let password= req.body.password

        db.Users.findOne({
            where:{
                email: email
            }
        })
        .then(function(usuario){
            let correctpass=bcrypt.compareSync(password,user.password)
            if(correctpass){
                res.redirect("/users/profile" + usuario.id)
            }
        })
        .catch(function(err){
            console.log(err)
        })
    },
    eliminar: function(req,res){
        let id= req.params.id
        db.Users.destroy({
            where:{
                id:id
            }
        })
        .then(function(resp){
            res.redirect("/")
        })
        .catch(function(err){
            console.log(err)
        })
    }
    

// agregar el rememberme ademas del email y password en checkUser tambien agregar lo de las cookies y el if de rememberme (todo en la primer clase de cookies)
}


module.exports = LoginController;