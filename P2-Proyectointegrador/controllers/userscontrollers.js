const objliteral= require("../db/index")
usuarioslista= objliteral.usuario
productoslista= objliteral.productos
comentarioslista= objliteral.comentarios
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
            usersdata: usuarioslista,
            dataproductos: productoslista,
            datacomentarios: comentarioslista
        })
    }

}


module.exports = LoginController;