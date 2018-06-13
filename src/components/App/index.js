import React from 'react'
import PropTypes from 'prop-types'

import MovieDetails from '../MovieDetails'
import Footer from '../Footer'
import Search from '../Search'
import ErrorBoundary from '../ErrorBoundary'

import './style.css'

const App = (props) => {
    const {
        fetching,
        movies,
        onSearch,
        onSearchMoviesByGenre,
        onSearchMoviesByTitle,
        onSelectMovie,
        onSortMoviesByRating,
        onSortMoviesByRelaseDate,
        searchBy,
        selectedMovieId,
        sortBy
    } = props
    const selectedMovie = movies.find(m => m.id === selectedMovieId)

    return (
        <div className="content-container">
            <ErrorBoundary>
                {!selectedMovieId && <Search
                    fetching={fetching}
                    movies={movies}
                    onSearch={onSearch}
                    searchBy={searchBy}
                    onSelectMovie={onSelectMovie}
                    sortBy={sortBy}
                    onSortMoviesByRelaseDate={onSortMoviesByRelaseDate}
                    onSortMoviesByRating={onSortMoviesByRating}
                    onSearchMoviesByTitle={onSearchMoviesByTitle}
                    onSearchMoviesByGenre={onSearchMoviesByGenre}
                />}
            </ErrorBoundary>
            <ErrorBoundary>
                {selectedMovieId && <MovieDetails
                    selectedMovie={selectedMovie}
                />}
            </ErrorBoundary>
            <ErrorBoundary>
                <Footer />
            </ErrorBoundary>
        </div>
    )
}

App.propTypes = {
    fetching: PropTypes.bool.isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSearch: PropTypes.func.isRequired,
    onSearchMoviesByGenre: PropTypes.func.isRequired,
    onSearchMoviesByTitle: PropTypes.func.isRequired,
    onSelectMovie: PropTypes.func.isRequired,
    onSortMoviesByRating: PropTypes.func.isRequired,
    onSortMoviesByRelaseDate: PropTypes.func.isRequired,
    searchBy: PropTypes.string.isRequired,
    selectedMovieId: PropTypes.number,
    sortBy: PropTypes.string.isRequired
}

App.defaultProps = { selectedMovieId: null }

export default App
