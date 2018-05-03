import React from 'react';
import propTypes from 'prop-types';

import './style.css';

class MovieDetails extends React.Component {
    renderDate(stringDate) {
        return (
            1900 + (new Date(stringDate)).getYear()
        )
    }
    render() {
        const { movie } = this.props;
        const { title, poster_path, release_date, overview, tagline, runtime } = movie;
        return (
            <div className="movie-details">
                <img src= { poster_path } className="movie-details__image"/>
                <div className="movie-details_desc">
                    <h2 className="movie-details__title">{ title }</h2>
                    <div className="movie-details__tagline">{ tagline }</div>
                    <p>{ overview }</p>
                    <p><b>{ this.renderDate(release_date) } { runtime } min </b></p>
                </div>
            </div>
        );
    }
}

MovieDetails.propTypes = {
    movie: propTypes.object,
};

export default MovieDetails;