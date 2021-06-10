const express = require('express');
const common = require('../controllers/common.controller')
const movies = require('../controllers/movies.controller')

const router = express.Router();

// Routes here
router.get('/home', common.home);
router.get('/movies',movies.list);
router.get('/movies/:id',movies.detail);

module.exports = router;
