import React from 'react';
import Switch from '../Switch';

import './style.css';

class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <div className="search__header">
                    netflixroulette
                </div>
                <div className="search__search-controls">
                    <input className="search_input" />
                    <Switch text="search by" params={ ["genre","title"] } />
                    <button className="search_button">search</button>
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