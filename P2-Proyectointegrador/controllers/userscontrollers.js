const objliteral= require("../db/index")
let usuarioslista= objliteral.usuario
let productoslista= objliteral.productos
let comentarioslista= objliteral.comentarios
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
        res.render("profile-edit", {
            userlogueado:true
        })
    },
    
    profile: function (req, res){
        return res.render('profile',{
            usuarioslista: usuarioslista,
            productoslista: productoslista,
            comentarioslista: comentarioslista,
            userlogueado:true
        })
    },
    create: function(req, res){
        // let name = req.body.name
        // let email = req.body.email
        // let password = req.body.password
        let {name, email, password} = req.body
        db.Users.create({
            name,
            email,
            password
        })
    }

}


module.exports = LoginController;