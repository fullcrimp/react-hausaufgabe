import React from 'react';
import propTypes from 'prop-types';

import MovieItem from '../MovieItem';
import './style.css';

class MovieList extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { movies } = this.props;
        const movieElements = movies.map(movie =>
            <MovieItem key = {movie.id} movie = {movie}/>
        )

        return (
            <div className="MovieList">
                {movieElements}
            </div>
        )
    }
}

MovieList.propTypes = {
    movies: propTypes.array,
};

export default MovieList