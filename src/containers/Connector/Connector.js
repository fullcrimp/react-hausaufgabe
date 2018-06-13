import { connect } from 'react-redux'

import {
    fetchMovies,
    searchMovies,
    searchMoviesByGenre,
    searchMoviesByTitle,
    selectMovie,
    sortMovies,
    sortMoviesByRating,
    sortMoviesByRelaseDate
} from '../../actions'
import App from '../../components/App'
import { SORT_BY } from '../../constants/global'

const mapStateToProps = state => ({
    fetching: state.fetching,
    movies: state.movies,
    searchBy: state.searchBy,
    selectedMovieId: state.selectedMovieId,
    sortBy: state.sortBy
})

const mapDispatchToProps = dispatch => ({
    onFetchMovies() {
        dispatch(fetchMovies())
    },
    onSearch(text, searchBy) {
        dispatch(searchMovies({ text, searchBy }))
    },
    onSearchMoviesByGenre() {
        dispatch(searchMoviesByGenre())
    },
    onSearchMoviesByTitle() {
        dispatch(searchMoviesByTitle())
    },
    onSelectMovie(id) {
        dispatch(selectMovie(id))
    },
    onSortMoviesByRating() {
        dispatch(sortMoviesByRating())
        dispatch(sortMovies(SORT_BY.rating))
    },
    onSortMoviesByRelaseDate() {
        dispatch(sortMoviesByRelaseDate())
        dispatch(sortMovies(SORT_BY.releaseDate))
    }
})

const Connector = connect(mapStateToProps, mapDispatchToProps)(App)

export default Connector