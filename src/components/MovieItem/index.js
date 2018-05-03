import React from 'react';
import propTypes from 'prop-types';

import './style.css';

class MovieItem extends React.Component {
    constructor() {
        super()
    }

    renderDate(stringDate) {
        return (
            1900 + (new Date(stringDate)).getYear()
        )
    }

    render() {
        const { movie } = this.props;
        return (
            <div className="MovieItem">
                <img src= { movie.poster_path } className="MovieItem__Image"/>
                <h2 className="MovieItem__Title">{movie.title}</h2>
                <div className="MovieItem__ReleaseDate">{this.renderDate(movie.release_date)}</div>
                <div className="MovieItem__Genres">{movie.genres[0]}</div>
            </div>
        )
    }
}

MovieItem.propTypes = {
    movie: propTypes.object,
};

export default MovieItem;