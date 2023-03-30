const { lista } = require("../db/index")

listaBandas = bandas.lista
const controlador = {
    index: function (req,res){
        // res.render("bandas", {
        //     listadosBandas:listaBandas
        // })
        res.send('Llegamos a bandas')
        console.log(req)
    },
    detalle:function (req,res){
        let indice = req.params.id 
        for (let i = 0; i<bandas.listaBandas.length; i++) {
            if ( listaBandas[i].id == indice) {
            res.render("detalle", {
                detalleBanda: listaBandas[i]
            })
        }
    }
    return res.send ("No existe la banda que pediste")

},
genero: function (req,res) {
    let genero = req.params.elGenero
    let results = []
    for (let i = 0; i<listaBandas.length;i++){
        if (listaBandas[i].genero== genero){
results.push(listaBandas[i])
        }
    }
    if (results.length>0){
        res.render ("genero", {porGenero:results})
    }
    else{
        res.send ("no tenemos ese genero")
    }
}
}



module.exports = controlador