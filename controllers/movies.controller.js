const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

module.exports.list = (req, res, next) => {

    Movie.find()
    .then(movies => {
        res.render('movies/list', {movies, title: 'holaaa'})
    })
    .catch(next)
};

//module.exports.detail = (req, res, next) => {};