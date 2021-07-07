import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' // keeps track of store of global state
import { createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk';

import reducers from './reducers'; // import reducers

import App from './App';

// Create store for global state
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Now that store is created,
// we can now wrap it around our app using Provider, which keeps track of the global state

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root')
);