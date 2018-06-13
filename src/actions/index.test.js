import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

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
import {
    fetchMoviesRequest,
    fetchMoviesFail,
    fetchMoviesReceive,
    fetchMovies,
    sortMoviesByRelaseDate,
    sortMoviesByRating,
    sortMovies,
    searchMovies,
    searchMoviesByTitle,
    searchMoviesByGenre,
    selectMovie
} from './index'

import dataMock from '../mocks'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const error = new Error('Some error')

describe('actions', () => {
    it('should create an action to start fetch movies', () => {
        const expectedAction = { type: FETCH_REQUEST }

        expect(fetchMoviesRequest()).toEqual(expectedAction)
    })

    it('should create an action to success fetch movies', () => {
        const expectedAction = {
            type: FETCH_RECEIVE,
            payload: dataMock
        }

        expect(fetchMoviesReceive(dataMock)).toEqual(expectedAction)
    })

    it('should create an action to fail fetch movies', () => {
        const expectedAction = {
            type: FETCH_FAIL,
            payload: error
        }

        expect(fetchMoviesFail(error)).toEqual(expectedAction)
    })

    it('should create an action to sort movies by relase date', () => {
        const expectedAction = { type: SORT_BY_RELEASE_DATE }

        expect(sortMoviesByRelaseDate()).toEqual(expectedAction)
    })

    it('should create an action to sort movies by rating', () => {
        const expectedAction = { type: SORT_BY_RATING }

        expect(sortMoviesByRating()).toEqual(expectedAction)
    })

    it('should create an action to search movies by title', () => {
        const expectedAction = { type: SEARCH_BY_TITLE }

        expect(searchMoviesByTitle()).toEqual(expectedAction)
    })

    it('should create an action to search movies by genre', () => {
        const expectedAction = { type: SEARCH_BY_GENRE }

        expect(searchMoviesByGenre()).toEqual(expectedAction)
    })

    it('should create an action to select movie', () => {
        const expectedAction = {
            type: SELECT_MOVIE,
            payload: 1
        }

        expect(selectMovie(1)).toEqual(expectedAction)
    })
})

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates FETCH_RECEIVE when fetching movies has been done', () => {
        fetchMock
            .getOnce('http://react-cdp-api.herokuapp.com/movies', {
                body: { data: dataMock },
                headers: { 'content-type': 'application/json' }
            })

        const expectedActions = [
            { type: FETCH_REQUEST },
            {
                type: FETCH_RECEIVE,
                payload: dataMock
            }
        ]
        const store = mockStore({ movies: [] })

        return store.dispatch(fetchMovies('http://react-cdp-api.herokuapp.com/movies')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates FETCH_FAIL when fetching movies throws an error', () => {
        fetchMock
            .getOnce('http://react-cdp-api.herokuapp.com/movies', () => {
                throw error
            })

        const expectedActions = [
            { type: FETCH_REQUEST },
            {
                type: FETCH_FAIL,
                payload: error
            }
        ]
        const store = mockStore({ movies: [] })

        return store.dispatch(fetchMovies('http://react-cdp-api.herokuapp.com/movies'))
            .then(() => expect(store.getActions()).toEqual(expectedActions))
    })

    it('creates FETCH_RECEIVE when sorting movies has been done', () => {
        fetchMock
            .getOnce('http://react-cdp-api.herokuapp.com/movies?sortBy=rating&sortOrder=desc', {
                body: { data: dataMock },
                headers: { 'content-type': 'application/json' }
            })

        const expectedActions = [
            { type: FETCH_REQUEST },
            {
                type: FETCH_RECEIVE,
                payload: dataMock
            }
        ]
        const store = mockStore({ movies: [] })

        return store.dispatch(sortMovies('rating')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates FETCH_RECEIVE when searching movies has been done', () => {
        fetchMock
            .getOnce('http://react-cdp-api.herokuapp.com/movies?search=text&searchBy=title', {
                body: { data: dataMock },
                headers: { 'content-type': 'application/json' }
            })

        const expectedActions = [
            { type: FETCH_REQUEST },
            {
                type: FETCH_RECEIVE,
                payload: dataMock
            }
        ]
        const store = mockStore({ movies: [] })

        return store.dispatch(searchMovies({
            text: 'text',
            searchBy: 'title'
        })).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
