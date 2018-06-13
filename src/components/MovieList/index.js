import React from 'react'
import PropTypes from 'prop-types'

import MovieItem from '../MovieItem'
import './style.css'

const MovieList = ({ movies, onSelectMovie }) => (
    <div className="movie-list">
        { movies.length === 0 && <div className="movie-list__empty">No films found</div> }
        { movies.map(movie => 
            <MovieItem key={ movie.id } { ...movie } onSelectMovie={ onSelectMovie } />
        ) }
    </div>
)

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSelectMovie: PropTypes.func.isRequired
}

export default MovieList
