import React from 'react';
import Switch from '../Switch';

import './style.css';

class Search extends React.Component {
    render() {
        return (
            <div className="Search">
                <div className="Search__header">
                    netflixroulette
                </div>
                <div className="Search__searchControls">
                    <input className="Search_input" />
                    <Switch text="Search by" params={["genre","title"]} />
                    <button className="Search_button">Search</button>
                </div>
                <div className="Search__result">
                    0 movies found 
                    <Switch text="Search by" params={["date","rating"]}/>
                </div>
            </div>
        );
    }
}

export default Search;