import React from 'react';
import ReactDom from 'react-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer';
import Search from './components/Search';

import movies from './fixtures'

import './style.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.log(error, info);
    }


    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return (
            <div className="ContentContainer">
                <Search />
                <MovieDetails movie={movies.data[0]} />
                <MovieList movies={movies.data} />
                <Footer />
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root'),
);
