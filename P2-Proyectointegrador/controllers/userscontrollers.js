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
    profile: function (req, res){
        return res.render('profile',{
            usersdata: usuarioslista,
            dataproductos: productoslista
        })
    }

}


module.exports = LoginController;