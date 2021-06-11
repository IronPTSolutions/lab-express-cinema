const express = require('express');
const router = express.Router();
const common = require('../controllers/common.controllers')
const movies = require('../controllers/movies.controllers')

// Routes here
router.get('/home', common.index)
router.get('/movies', movies.list)
router.get('/movies/:movieId', movies.detail)
module.exports = router;
