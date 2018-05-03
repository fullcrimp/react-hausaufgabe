import React from 'react';
import propTypes from 'prop-types';

import './style.css';

class MovieItem extends React.Component {
    renderDate(stringDate) {
        return (
            1900 + (new Date(stringDate)).getYear()
        )
    }

    render() {
        const { movie } = this.props;
        const {title, poster_path, release_date, genres} = movie;
        return (
            <div className="movie-item">
                <img src= { poster_path } className="movie-item__image"/>
                <h2 className="movie-item__title">{ title }</h2>
                <div className="movie-item__release-date">{ this.renderDate(release_date) }</div>
                <div className="movie-item__genres">{ genres[0] }</div>
            </div>
        )
    }
}

MovieItem.propTypes = {
    movie: propTypes.object,
};

export default MovieItem;