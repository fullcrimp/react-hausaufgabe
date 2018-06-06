import React from 'react';
import Switch from '../Switch';
import { Link } from 'react-router-dom'

import './style.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
        };
    }

    updateSearchString(e) {
        this.setState({
            searchString: e.target.value
        });
    }

    render() {
        return (
            <div className="search">
                <div className="search__header">
                    netflixroulette
                </div>
                <div className="search__search-controls">
                    <input className="search_input" value={this.state.searchString} onChange={e => this.updateSearchString(e)} />
                    <Switch text="search by" params={ ["genre","title"] } />
                    <button className="search_button">
                        <Link to={{ pathname: `/search/${this.state.searchString}` }}>
                            search
                        </Link>
                    </button>
                </div>
                <div className="search__result">
                    0 movies found 
                    <Switch text="search by" params={ ["date","rating"] }/>
                </div>
            </div>
        );
    }
}

export default Search;