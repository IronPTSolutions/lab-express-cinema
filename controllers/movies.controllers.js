const movies = require('../data/movies.json');
const Movie = require('../models/Movie.model')
const mongoose = require('mongoose');

module.exports.list = (req, res) => {
    Movie.find()
        .then(movies => {
            res.render('movies/list', {
                movies
            })
        })
}

module.exports.detail = (req, res) => {
    Movie.findById(req.params.movieId)
    .then((movie) => {
        if(movie) {
            res.render('movies/movies', {movie})
        } else {
            res.redirect('common/index')
        }
    })
}