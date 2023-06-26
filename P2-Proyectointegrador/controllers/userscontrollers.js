const db = require("../database/models/index");
const Op = db.sequelize.Op;
const bcrypt = require("bcryptjs");

const LoginController = {
  login: function (req, res) {
    res.render("login", {
      userlogueado: false,
    });
  },
  register: function (req, res) {
    res.render("registros", {
      userlogueado: false,
    });
  },
  profileEdit: function (req, res) {
    let id = req.session.user.id;
    db.Users.findByPk(id)
      .then(function (usuario) {
        res.render("profile-edit", {
          userlogueado: true,
          usuario: usuario,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  profile: function (req, res){
    // let idcomentario;
    // let userlog;
    // if(req.params.id){
    //     idcomentario = req.params.id;
    //     userlog = false;
    // } else {
    //     idcomentario = req.session.user.id;
    //     userlog = true;
    // } 
    let idcomentario = req.session.user.id;
    db.Users.findByPk(idcomentario, {
        include: [
            {association: "userconproductos"}, 
            {association: "userconcomentarios"}
        ],
        nest: true,
        order: [["userconproductos", "createdAt", "DESC"]],
    }) 
    .then(function(data){
        res.render('profile', {
            usuario: data,
            userlog: userlog
        });
    })
    .catch(function(err){
        console.log(err);
    });
  },
  create: function (req, res) {
    let nombre = req.body.nombre;
    let email = req.body.email;
    let password = req.body.password;
    let fotodeperfil = req.body.fotodeperfil;
    let dni = req.body.dni;
    let fecha_de_nacimiento = req.body.fecha_de_nacimiento;

    if (email == "") {
      let errors = {};
      errors.message = "Debes ingresar un email";
      res.locals.errors = errors;
      return res.render("registros");
    } else if (password == "") {
      let errors = {};
      errors.message = "Debes ingresar una contraseña";
      res.locals.errors = errors;
      return res.render("registros");
    } else if (password.length < 3) {
      let errors = {};
      errors.message = "La contraseña debe tener más de tres dígitos";
      res.locals.errors = errors;
      return res.render("registros");
    }

    db.Users.findOne({
      where: {
        email: email,
      },
    })
      .then(function (repetido) {
        if (repetido != undefined) {
          let errors = {};
          errors.message = "Ya existe un usuario con este email";
          res.locals.errors = errors;
          return res.render("registros");
        } else {
          let passencriptada = bcrypt.hashSync(password, 12);
          db.Users.create({
            nombre: nombre,
            email: email,
            password: passencriptada,
            foto_de_perfil: fotodeperfil,
            fecha_de_nacimiento: fecha_de_nacimiento,
            dni: dni,
          })
            .then(function (data) {
              res.redirect("/users/login");
              console.log(data);
            })
            .catch(function (err) {
              console.log(err);
              // if (err.name === "SequelizeUniqueConstraintError") {
              //   let errors = {};
              //   errors.message = "Este correo ya está ocupado por otro usuario";
              //   res.locals.errors = errors;
              //   return res.render("registros");
              // }
            });
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  chequeo: function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let rememberMe = req.body.rememberMe;

    if (email === '') {
      let errors = {}
      errors.message = 'Debes ingresar un email' ;
      res.locals.errors = errors;
      return res.redirect('/users/login');
    }

    if (password === '') {
      let errors = {}
      errors.message = 'Debes ingresar una contraseña' ;
      res.locals.errors = errors;
      return res.redirect('/users/login');
    }

    db.Users.findOne({
      where: {
        email: email,
      },
    })
      .then(function (usuario) {
        if (usuario != null) {
          let correctpass = bcrypt.compareSync(password, usuario.password);
          if (correctpass) {
            req.session.user = {
              id: usuario.id,
              nombre: usuario.nombre,
              email: usuario.email,
            };
            if (rememberMe === 'on') {
              res.cookie(
                'rememberUser',
                {
                  id: usuario.id,
                  nombre: usuario.nombre,
                  email: usuario.email,
                },
                {
                  maxAge: 1000 * 15,
                }
              );
            }
            return res.redirect('/users/profile');
          } else {
            let errors = {}
            errors.message = 'Contraseña incorrecta';
            res.locals.message = errors;
            return res.redirect('/users/login');
          }
        } else {
          let errors = {}
          errors.message = 'No existe un usuario con este email' ;
          res.locals.errors = errors;
          return res.redirect('/users/registro');
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};

module.exports = LoginController;