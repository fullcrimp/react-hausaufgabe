import React from 'react';
import { connect } from 'react-redux'
import { fetchMoviesIfNeeded } from './actions'
import PropTypes from 'prop-types';


import MovieList from './components/MovieList';
// import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer';
import Search from './components/Search';

import './style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchMoviesIfNeeded(this.props))
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
            <div className="content-container">
                <Search />
                <MovieList movies={ this.props.movies } />
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    movies: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return { 
        movies: state.movies,
        isFetching: state.isFetching,
    }
}

export default connect(mapStateToProps)(App)