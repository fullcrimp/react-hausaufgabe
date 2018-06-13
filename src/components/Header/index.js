import React from 'react'
import PropTypes from 'prop-types'

import SearchBar from '../SearchBar'
import Sorting from '../Sorting'

const Header = ({
    count,
    onSearch,
    onSearchMoviesByGenre,
    onSearchMoviesByTitle,
    onSortMoviesByRating,
    onSortMoviesByRelaseDate,
    searchBy,
    sortBy
}) => (
    <header>
        <SearchBar
            onSearch={onSearch}
            onSearchMoviesByGenre={onSearchMoviesByGenre}
            onSearchMoviesByTitle={onSearchMoviesByTitle}
            searchBy={searchBy}
        />
        <Sorting
            count={count}
            onSortMoviesByRating={onSortMoviesByRating}
            onSortMoviesByRelaseDate={onSortMoviesByRelaseDate}
            sortBy={sortBy}
        />
    </header>
)

Header.propTypes = {
    count: PropTypes.number.isRequired,
    onSearch: PropTypes.func.isRequired,
    onSearchMoviesByGenre: PropTypes.func.isRequired,
    onSearchMoviesByTitle: PropTypes.func.isRequired,
    onSortMoviesByRating: PropTypes.func.isRequired,
    onSortMoviesByRelaseDate: PropTypes.func.isRequired,
    searchBy: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired
}

export default Header
