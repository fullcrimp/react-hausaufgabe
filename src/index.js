import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import App from './App';

const store = createStore(rootReducer, applyMiddleware())


render(
    <Provider store={store}>
        <App />
    </ Provider>,
    document.getElementById('root')
)


