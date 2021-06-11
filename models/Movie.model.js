const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: {
        type: [String],
        default: []
    },
    image: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    showtimes: {
        type: [String],
        default: []
    }
})

const Movie = mongoose.model('Movie', schema);
module.exports = Movie;