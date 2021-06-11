const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title:  {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  stars: {
    type: [String],
    required: true
  },
  image:  {
    type: String,
    required: true
  },

  description:  {
    type: String,
    required: true
  },

  showtimes: {
    type: [String],
    required: true
  },
});

const Movie = mongoose.model('Movie', schema);


module.exports = Movie;