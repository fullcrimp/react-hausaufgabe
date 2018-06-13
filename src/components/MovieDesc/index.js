import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const MovieDesc = ({
    overview,
    poster_path: posterPath,
    release_date: releaseDate,
    runtime,
    tagline,
    title,
    vote_average: vote
}) => (
    <div className="movie-desc">
        <img src= { posterPath } className="movie-desc__image"/>
        <div className="movie-desc__desc">
            <h2 className="movie-desc__title">{ title }</h2>
            <span className="movie-desc__vote">{vote}</span>
            <div className="movie-desc__tagline">{ tagline }</div>
            <p>{ overview }</p>
            <p><b>{ new Date(releaseDate).getFullYear() } { runtime } min </b></p>
        </div>
    </div>
)

MovieDesc.propTypes = {
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    runtime: PropTypes.number,
    tagline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired
}

export default MovieDesc
