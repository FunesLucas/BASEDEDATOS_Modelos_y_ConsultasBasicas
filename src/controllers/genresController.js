const db = require ("../database/models");

const genresController = {
    list: (req, res) => {
        db.Generos.findAll()
            .then(function (generos){
                res.render ('genresList', {genres : generos})
            })
    },
    detail: (req,res) => {
        db.Generos.findByPk(req.params.id)
            .then(function(genero){
                res.render ('genresDetail' , {genre : genero})
            })
    }
}

module.exports = genresController;