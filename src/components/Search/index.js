import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import MovieList from '../MovieList'

import './style.css'

const Home = ({
    fetching,
    movies,
    onSearch,
    onSearchMoviesByGenre,
    onSearchMoviesByTitle,
    onSelectMovie,
    onSortMoviesByRating,
    onSortMoviesByRelaseDate,
    searchBy,
    sortBy
}) => (
    <div className="search">
        <div className="search__logo">
            netflixroulette
        </div>
        <Header
            count={movies.length}
            onSearch={onSearch}
            onSearchMoviesByGenre={onSearchMoviesByGenre}
            onSearchMoviesByTitle={onSearchMoviesByTitle}
            onSortMoviesByRating={onSortMoviesByRating}
            onSortMoviesByRelaseDate={onSortMoviesByRelaseDate}
            searchBy={searchBy}
            sortBy={sortBy}
        />
        {fetching
            ? ''
            : <MovieList movies={movies} onSelectMovie={onSelectMovie} />
        }
    </div>
)

Home.propTypes = {
    fetching: PropTypes.bool.isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSearch: PropTypes.func.isRequired,
    onSearchMoviesByGenre: PropTypes.func.isRequired,
    onSearchMoviesByTitle: PropTypes.func.isRequired,
    onSelectMovie: PropTypes.func.isRequired,
    onSortMoviesByRating: PropTypes.func.isRequired,
    onSortMoviesByRelaseDate: PropTypes.func.isRequired,
    searchBy: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired
}

export default Home
