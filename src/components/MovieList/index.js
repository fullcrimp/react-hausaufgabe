import React from 'react';
import propTypes from 'prop-types';

import MovieItem from '../MovieItem';
import './style.css';

class MovieList extends React.Component {
    render() {
        const { movies } = this.props;
        return (
            <div className="movie-list">
                { movies.map(movie =>
                    <MovieItem key = { movie.id } movie = { movie }/>
                ) }
            </div>
        )
    }
}

MovieList.propTypes = {
    movies: propTypes.array,
};

export default MovieList;