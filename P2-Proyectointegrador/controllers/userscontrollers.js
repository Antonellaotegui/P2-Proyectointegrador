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
        return res.render('register',{
            userlogueado:false
        })
    },
    profileEdit: function (req,res){
        res.render("profileEdit", {
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
    }

}


module.exports = LoginController;