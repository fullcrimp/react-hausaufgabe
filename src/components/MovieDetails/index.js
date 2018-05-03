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
        return (
            <div className="MovieDetails">
                <img src= { movie.poster_path } className="MovieDetails__Image"/>
                <div className="MovieDetails_desc">
                    <h2 className="MovieDetails__Title">{movie.title}</h2>
                    <div className="MovieDetails__Tagline">{movie.tagline}</div>
                    <p>{movie.overview}</p>
                    <p><b>{this.renderDate(movie.release_date)} {movie.runtime} min </b></p>
                </div>
            </div>
        );
    }
}

MovieDetails.propTypes = {
    movie: propTypes.object,
};

export default MovieDetails;