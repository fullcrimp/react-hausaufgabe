import { combineReducers } from 'redux'
import {
    REQUEST_MOVIES,
    RECEIVE_MOVIES
} from '../actions'


const movies = (state = {
    isFetching: false,
    movies: []
}, action) => {
    switch (action.type) {
    case REQUEST_MOVIES:
        return Object.assign({}, state, {
            isFetching: true,
        })
    case RECEIVE_MOVIES:
        return Object.assign({}, state, {
            isFetching: false,
            movies: action.movies
        })
    default:
        return state
    }
}

const rootReducer = combineReducers({
    movies,
})

export default rootReducer
  