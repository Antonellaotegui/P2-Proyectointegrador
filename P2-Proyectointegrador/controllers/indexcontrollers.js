const objliteral= require("../db/index")
// let usuarioslista= objliteral.usuario
// let productoslista= objliteral.productos
// let comentarioslista= objliteral.comentarios
const db = require("../database/models/index")
const op = db.Sequelize.Op

const index={
    index: function (req, res){
        db.Productos.findAll({  //estoy accediendo al modelo prdocuto.js el find all esta recibiendo una info en forma de proemsa y la esta logrando operar atrves de un console log'-m
           
            include: [
                {association: "productsconusers"},
                {association: "productsconcomentarios"}
            ]}
        )
            .then(function(data){
            // res.send(data)
            
                res.render('index',{
                // usuarioslista: usuarioslista,
                data : data,
                // productoslista: productoslista,
                // comentarioslista: comentarioslista,
                userlogueado:false
            })
        })
        .catch(function(err){console.log(err)})
    
        db.Comentarios.findAll({raw:true})
        .then(function(data){
          console.log(data)  
        })
        .catch(function(err){ //esrr se puede llamar de cualq manera
            console.log(err)
        })
        }, //data se puede llamar de cualq manera
    
    logout: function (req, res){
            // userlogueado:false (req.session.usuario)
            res.redirect ("/")
        }
    

}


module.exports = index;
