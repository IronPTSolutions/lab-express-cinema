const mongoose = require('mongoose');
const Movie = require('../models/movie.model');


module.exports.list = (req, res, next) => {

    Movie.find()
    .then(movies => {
        
          res.render('movies/list', {
              movies,
            title: 'Ironhack cinema'})
    })
    .catch(next)

}

module.exports.detail = (req, res, next) => {
  const movieId = req.params.movieId
  Movie.findById(movieId)
  .then(movie => {
    res.render('movies/detail',
    {movie,
    title: movie.title})
  }
  )
  .catch(next)
}
