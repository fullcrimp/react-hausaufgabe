export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'


export const requestMovies = () => ({
    type: REQUEST_MOVIES
})

export const receiveMovies = (json) => ({
    type: RECEIVE_MOVIES,
    movies: json.data,
    receivedAt: Date.now()
})


const fetchMovies = () => dispatch => {
    dispatch(requestMovies())
    return fetch('http://react-cdp-api.herokuapp.com/movies')
        .then(response => response.json())
        .then(json => dispatch(receiveMovies(json)))
}


const shouldFetchMovies = (state) => {
    const movies = state.movies

    if (!movies.length) {
        return true
    }

    if (state.isFetching) {
        return false
    }
}

export const fetchMoviesIfNeeded = (dispatch, state) => {
    if (shouldFetchMovies(state)) {
        return dispatch(fetchMovies())
    }
} 