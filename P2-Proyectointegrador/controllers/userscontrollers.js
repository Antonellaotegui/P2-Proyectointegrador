const objliteral= require("../db/index")
let usuarioslista= objliteral.usuario
let productoslista= objliteral.productos
let comentarioslista= objliteral.comentarios
const LoginController = {
    login: function (req, res) {
        return res.render('login')
    },
    register: function (req, res) {
        return res.render('register')
    },
    profileEdit: function (req,res){
        res.render("profileEdit")
    },
    
    profile: function (req, res){
        return res.render('profile',{
            usuarioslista: usuarioslista,
            productoslista: productoslista,
            comentarioslista: comentarioslista
        })
    }

}


module.exports = LoginController;