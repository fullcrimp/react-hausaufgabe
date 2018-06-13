import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const MovieItem = ({
    genres,
    id,
    onSelectMovie,
    poster_path: posterPath,
    release_date: releaseDate,
    title
}) => (
    <div className="movie-item" onClick={() => onSelectMovie(id)}>
        <img className="movie-item__image" src={posterPath} alt={title} />
        <div className="movie-item__release-date">{new Date(releaseDate).getFullYear()}</div>
        <div className="movie-item__title">{title}</div>
        <div className="movie-item__genres">{genres.join(', ')}</div>
    </div>
)

MovieItem.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired,
    onSelectMovie: PropTypes.func.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default MovieItem
