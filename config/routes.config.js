const express = require('express');

const router = express.Router();

const common = require('../controllers/common.controller');
const movies = require('../controllers/movies.controller');

// Routes here

router.get('/', common.home);
router.get('/movies', movies.list);
router.get('/movies/detail/:id', movies.detail);



module.exports = router;
