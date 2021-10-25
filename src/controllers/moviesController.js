const db = require ("../database/models")

const moviesController = {
    list: (req, res) => {
        db.Movies.findAll()  // Movies ---> Seria el Alias en /database/models/Movie
             .then(function(peliculas){
                 res.render ("moviesList", {movies:peliculas})
             })

    },
    detail: (req, res) => {
        db.Movies.findByPk(req.params.id)
              .then(function(pelicula){
                  res.render ("moviesDetail" , {movie:pelicula})
              })
              
    },
    new: (req, res) => {
        db.Movies.findAll({order: [["release_date", "DESC"]] })
              .then(function (peliculas){
                  res.render ("newestMovies", {movies : peliculas})
              })

    },
    recomended: (req, res) => {
        db.Movies.findAll({
            order: [["release_date" , "DESC"]],
            limit:5
        })
          .then(function(peliculas){
              res.render("recommendedMovies" , {movies : peliculas})
          })
    }
}

module.exports = moviesController ;