const db = require ("../database/models");

const actorsController = {
    list: (req, res) => {
        db.Actors.findAll()
            .then(function (actores){
                res.render ('actorsList', {actores : actores})
            })
    },
    detail: (req,res) => {
        db.Actors.findByPk(req.params.id)
            .then(function(actor){
                res.render ('actorsDetail' , {actor : actor})
            })
    }
}

module.exports = actorsController;