const express = require('express');

const router = express.Router();
const commons = require('../controllers/commons.controllers')
const movies = require('../controllers/movies.controllers')

// Routes here
router.get('/' , commons.home );
router.get('/movies', movies.list )
router.get('/movies/:movieId', movies.detail)

module.exports = router;
