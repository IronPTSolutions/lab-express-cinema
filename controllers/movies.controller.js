const mongoose = require('mongoose')
const Movie = require('../models/movie.model')

module.exports.list = (req, res, next) => {
    Movie.find()
        .then((movies) => {
            res.render('movies/list', {
                movies,
                title: 'IronCinema'
            })
        })
        .catch()
}


module.exports.detail = (req, res, next) => {
    const idMovie = req.params.idMovie
    Movie.findById(idMovie)
        .then(movie => res.render('movies/detail', {movie}))
        .catch(next)

}