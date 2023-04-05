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
<<<<<<< HEAD
    ProfileEdit: function (req,res){
        res.render("profileEdit")
    }
    
=======
    profile: function (req, res){
        return res.render('profile',{
            usersdata: usuarioslista,
            dataproductos: productoslista
        })
    }

>>>>>>> 3cffcbc6a6543b2901e509e43a1b6c960bd7bd8a
}


module.exports = LoginController;