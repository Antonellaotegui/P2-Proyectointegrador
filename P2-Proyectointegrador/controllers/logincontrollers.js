const objliteral= require("../db/index")
usuarioslista= objliteral.usuario
productoslista= objliteral.productos
comentarioslista= objliteral.comentarios
const LoginController = {
    login: function (req, res) {
    return res.render('login')
    }
}

module.exports = LoginController;



//login va con registros
// detail products y categories van en products


