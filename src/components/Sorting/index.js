import React from 'react'
import PropTypes from 'prop-types'

import { SORT_BY } from '../../constants/global'

import './style.css'

const Sorting = ({ count, onSortMoviesByRelaseDate, onSortMoviesByRating, sortBy }) => (
    <div className="sorting">
        {count > 0 && <div>{count} movies found</div>}
        {count > 0 &&
      <div>
          <span>Sort by </span>
          <button
              className={`sorting__button ${sortBy === SORT_BY.releaseDate && 'sorting__button--selected'}`}
              onClick={() => onSortMoviesByRelaseDate()}
          >
          Release date
          </button>
          <button
              className={`sorting__button ${sortBy === SORT_BY.rating && 'sorting__button--selected'}`}
              onClick={() => onSortMoviesByRating()}
          >
          Rating
          </button>
      </div>}
    </div>
)

Sorting.propTypes = {
    count: PropTypes.number.isRequired,
    onSortMoviesByRating: PropTypes.func.isRequired,
    onSortMoviesByRelaseDate: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired
}

export default Sorting
