import {
    movies,
    fetching,
    sortBy,
    searchBy,
    selectedMovieId,
    errors
} from './index'
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

import dataMock from '../mocks'

describe('movies reducer', () => {
    const initialState = []

    it('should return the initial state', () => {
        expect(movies(undefined, {})).toEqual(initialState)
    })

    it('should handle FETCH_RECEIVE', () => {
        expect(movies(initialState, {
            type: FETCH_RECEIVE,
            payload: dataMock
        })).toEqual(dataMock)
    })
})

describe('fetching reducer', () => {
    const initialState = false

    it('should return the initial state', () => {
        expect(fetching(undefined, {})).toEqual(initialState)
    })

    it('should handle FETCH_REQUEST', () => {
        expect(fetching(initialState, { type: FETCH_REQUEST })).toEqual(true)
    })

    it('should handle FETCH_RECEIVE', () => {
        expect(fetching(initialState, { type: FETCH_RECEIVE })).toEqual(false)
    })

    it('should handle FETCH_FAIL', () => {
        expect(fetching(initialState, { type: FETCH_FAIL })).toEqual(false)
    })
})

describe('sortBy reducer', () => {
    const initialState = 'release_date'

    it('should return the initial state', () => {
        expect(sortBy(undefined, {})).toEqual(initialState)
    })

    it('should handle SORT_BY_RELEASE_DATE', () => {
        expect(sortBy(initialState, { type: SORT_BY_RELEASE_DATE })).toEqual('release_date')
    })

    it('should handle SORT_BY_RATING', () => {
        expect(sortBy(initialState, { type: SORT_BY_RATING })).toEqual('vote_average')
    })
})

describe('searchBy reducer', () => {
    const initialState = 'title'

    it('should return the initial state', () => {
        expect(searchBy(undefined, {})).toEqual(initialState)
    })

    it('should handle SORT_BY_RELEASE_DATE', () => {
        expect(searchBy(initialState, { type: SEARCH_BY_TITLE })).toEqual('title')
    })

    it('should handle SORT_BY_RATING', () => {
        expect(searchBy(initialState, { type: SEARCH_BY_GENRE })).toEqual('genres')
    })
})

describe('selectedMovie reducer', () => {
    const initialState = null

    it('should return the initial state', () => {
        expect(selectedMovieId(undefined, {})).toEqual(initialState)
    })

    it('should handle SELECT_MOVIE', () => {
        expect(selectedMovieId(initialState, {
            type: SELECT_MOVIE,
            payload: 1
        })).toEqual(1)
    })
})

describe('errors reducer', () => {
    const initialState = []
    const error = new Error('Some error')

    it('should return the initial state', () => {
        expect(errors(undefined, {})).toEqual(initialState)
    })

    it('should handle FETCH_FAIL', () => {
        expect(errors(initialState, {
            type: FETCH_FAIL,
            payload: error
        })).toEqual([error])
    })

    it('should handle FETCH_RECEIVE', () => {
        expect(errors([error], { type: FETCH_RECEIVE })).toEqual([])
    })
})
