const express = require('express');
const router = express.Router();
const MovieModel = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// GET Movies page
router.get('/movies', (req, res, next) => {
    MovieModel.find()
        .then((movies) => {
            res.render('movies', {movie: movies})
        })
        .catch(() => {
            next('Failed to fetch movies')
        })

})

router.get('/movie/:id', (req, res, next) => {
    let dynamicMovieId = req.params.id

    MovieModel.findById(dynamicMovieId)
        .then((movie) => {
            res.render('movie-detail.hbs', {movie})
        })
        .catch(() => {
            next('Failed to find movie details')
        })
})

module.exports = router;
