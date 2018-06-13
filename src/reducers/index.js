import { combineReducers } from 'redux'

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

import { SEARCH_BY, SORT_BY } from '../constants/global'

const initialState = {
    movies: [],
    fetching: false,
    sortBy: SORT_BY.releaseDate,
    searchBy: SEARCH_BY.title,
    selectedMovieId: null,
    errors: []
}

export const movies = (state = initialState.movies, action) => {
    switch (action.type) {
    case FETCH_RECEIVE:
        return action.payload
    default:
        return state
    }
}
  
export const fetching = (state = initialState.fetching, action) => {
    switch (action.type) {
    case FETCH_REQUEST:
        return true
    case FETCH_RECEIVE:
    case FETCH_FAIL:
        return false
    default:
        return state
    }
}
  
export const sortBy = (state = initialState.sortBy, action) => {
    switch (action.type) {
    case SORT_BY_RELEASE_DATE:
        return SORT_BY.releaseDate
    case SORT_BY_RATING:
        return SORT_BY.rating
    default:
        return state
    }
}
  
export const searchBy = (state = initialState.searchBy, action) => {
    switch (action.type) {
    case SEARCH_BY_TITLE:
        return SEARCH_BY.title
    case SEARCH_BY_GENRE:
        return SEARCH_BY.genre
    default:
        return state
    }
}
  
export const selectedMovieId = (state = initialState.selectedMovieId, action) => {
    switch (action.type) {
    case SELECT_MOVIE:
        return action.payload
    default:
        return state
    }
}
  
export const errors = (state = initialState.errors, action) => {
    switch (action.type) {
    case FETCH_FAIL:
        return [
            ...state,
            action.payload
        ]
    case FETCH_RECEIVE:
        return []
    default:
        return state
    }
}
  

export default combineReducers({
    movies,
    fetching,
    sortBy,
    searchBy,
    selectedMovieId,
    errors
})
  