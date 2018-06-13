import React from 'react'
import PropTypes from 'prop-types'

import MovieDesc from '../MovieDesc'
import './style.css'

const MovieDetails = ({ selectedMovie }) => (
    <div className="movie-details">
        <div className="movie-details__logo">
            netflixroulette
        </div>
        <MovieDesc {...selectedMovie} />
    </div>
)

MovieDetails.propTypes = {
    selectedMovie: PropTypes.shape({
        overview: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        release_date: PropTypes.string.isRequired,
        runtime: PropTypes.number.isRequired,
        tagline: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired
    }).isRequired
}

export default MovieDetails
