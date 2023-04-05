
const LoginController = {
    login: function (req, res) {
    return res.render('login')
    },
    register: function (req, res) {
        return res.render('register')
    },
    ProfileEdit: function (req,res){
        res.render("profileEdit")
    }
    
}


module.exports = LoginController;