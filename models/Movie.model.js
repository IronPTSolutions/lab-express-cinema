const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        title : {type: String},
        director : String,
        stars: [String],
        image : String,
        description : String,
        showtimes: [String],
    },
);

const Movie = mongoose.model('Movie', schema);

module.exports = Movie;