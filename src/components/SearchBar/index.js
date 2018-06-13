import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css'
import { SEARCH_BY, GENRES } from '../../constants/global'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    render() {
        const {
            onSearch,
            onSearchMoviesByGenre,
            onSearchMoviesByTitle,
            searchBy
        } = this.props

        return (
            <div className="search-bar">
                <p className="search-bar__title">Find your movie</p>
                <input
                    className="search-bar__input"
                    type="text"
                    ref={this.inputRef}
                    onKeyPress={event => event.key === 'Enter' && onSearch(event.target.value, searchBy)}
                    list="genres"
                />
                {searchBy === SEARCH_BY.genre &&
                <datalist id="genres">
                    {GENRES.map(genre => <option key={genre} value={genre} />)}
                </datalist>
                }
                <div className="search-bar__footer">
                    <div className="search-bar__by">Search by </div>
                    <div className="search-bar__btns">
                        <button
                            className={`search-bar__btn-title ${searchBy === SEARCH_BY.title && 'search-bar__btn--selected'}`}
                            onClick={onSearchMoviesByTitle}
                        >Title</button>
                        <button
                            className={`search-bar__btn-genre ${searchBy === SEARCH_BY.genre && 'search-bar__btn--selected'}`}
                            onClick={onSearchMoviesByGenre}
                        >Genre</button>
                    </div>
                    <button
                        className="search-bar__btn"
                        onClick={() => onSearch(this.inputRef.current.value, searchBy)}
                    >Search</button>
                </div>
            </div>
        )
    }
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onSearchMoviesByGenre: PropTypes.func.isRequired,
    onSearchMoviesByTitle: PropTypes.func.isRequired,
    searchBy: PropTypes.string.isRequired
}

export default SearchBar
