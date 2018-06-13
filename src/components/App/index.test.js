import React from 'react'
import renderer from 'react-test-renderer'

import App from './index'
import dataMock from '../../mocks'

jest.mock('../MovieDetails', () => 'Details')
jest.mock('../Footer', () => 'Footer')
jest.mock('../Search', () => 'Search')
jest.mock('../ErrorBoundary', () => 'ErrorBoundary')

describe('App', () => {
    const props = {
        fetching: false,
        movies: [],
        onSearch: jest.fn(),
        onSearchMoviesByGenre: jest.fn(),
        onSearchMoviesByTitle: jest.fn(),
        onSelectMovie: jest.fn(),
        onSortMoviesByRating: jest.fn(),
        onSortMoviesByRelaseDate: jest.fn(),
        searchBy: 'title',
        selectedMovie: null,
        sortBy: 'release_date'
    }

    it('renders correctly', () => {
        const component = renderer.create(<App {...props} />)
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
    })

    it('renders correctly with movies', () => {
        const component = renderer.create(
            <App
                {...props}
                movies={dataMock}
            />
        )
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
    })

    it('renders correctly with selectedMovie', () => {
        const component = renderer.create(
            <App
                {...props}
                movies={dataMock}
                selectedMovieId={dataMock[0].id}
            />
        )
        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
    })
})
