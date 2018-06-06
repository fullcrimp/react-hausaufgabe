import React from 'react';
import ReactDom from 'react-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer';
import Search from './components/Search';
import NoMatch from './components/NoMatch';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom'

import movies from './fixtures'
import './style.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
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
                
                
                <Router> 
                    <div>
                        <Search />
                        <ul>
                            <li><Link to='/'>home</Link></li>
                            <li><Link to='/search'>search</Link></li>
                            <li><Link to='/details'>details</Link></li>
                        </ul>
                        <Switch>
                            <Route path='/' exact render={ (props) => <MovieList {...props} movies={ movies.data } /> } />
                            <Route path='/search' exact render={ (props) => <MovieList {...props} movies={ movies.data } /> } />
                            <Route path='/search/:searchString' render={ (props) => <MovieList {...props} movies={ movies.data } /> } />
                            <Route path='/details/:id' render={ (props) => <MovieDetails {...props} movies={ movies.data }/> } />
                            <Route component={NoMatch}/>
                        </ Switch>
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root'),
);
