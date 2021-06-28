const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String, 
    description: String, 
    showtimes: [String]
})

const MovieModel = mongoose.model('movie', MovieSchema)

module.exports = MovieModel