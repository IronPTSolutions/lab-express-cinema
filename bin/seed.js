const mongoose = require('mongoose');
const movies = require('../data/movies.json');
const Movie = require('../models/Movie.model');
require('../config/db.config');
mongoose.connection.once('open', () => {
    console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);
    mongoose.connection.db
        .dropDatabase()
        .then(() => console.log(`- Database dropped`))
        .then(() => {
            return Movie.create(movies)
        })
        .then(() => console.info(`All data created!`))
        .catch((error) => console.error(error))
        .then(() => process.exit(0))
});