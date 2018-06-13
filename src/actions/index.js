import {
    FETCH_REQUEST,
    FETCH_RECEIVE,
    FETCH_FAIL,
    SORT_BY_RELEASE_DATE,
    SORT_BY_RATING,
    SEARCH_BY_TITLE,
    SEARCH_BY_GENRE,
    SELECT_MOVIE
} from '../constants/actionTypes'
import { API_URL } from '../constants/global'


/***************************** SORT *****************************/

export const sortMoviesByRelaseDate = () => ({ type: SORT_BY_RELEASE_DATE })
export const sortMoviesByRating = () => ({ type: SORT_BY_RATING })
export const searchMoviesByTitle = () => ({ type: SEARCH_BY_TITLE })
export const searchMoviesByGenre = () => ({ type: SEARCH_BY_GENRE })

export const selectMovie = id => ({
    type: SELECT_MOVIE,
    payload: id
})


/***************************** FETCH *****************************/

export const fetchMoviesRequest = () => ({ type: FETCH_REQUEST })
  
export const fetchMoviesReceive = movies => ({
    type: FETCH_RECEIVE,
    payload: movies
})
  
export const fetchMoviesFail = error => ({
    type: FETCH_FAIL,
    payload: error
})

export const fetchMovies = url => (dispatch) => {
    dispatch(fetchMoviesRequest())
    return fetch(url)
        .then(response => response.json())
        .then(movies => dispatch(fetchMoviesReceive(movies.data)))
        .catch(error => dispatch(fetchMoviesFail(error)))
}
 

/***************************** SORT *****************************/

export const sortMovies = sortBy => dispatch =>
    dispatch(fetchMovies(`${API_URL}?sortBy=${sortBy}&sortOrder=desc`))
  
export const searchMovies = ({ text, searchBy }) => dispatch =>
    dispatch(fetchMovies(`${API_URL}?search=${text}&searchBy=${searchBy}`))
