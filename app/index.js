import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers/index';
import { AppRegistry } from 'react-native';
import App from './App';

const loggerMiddleware = createLogger({ predicate: () => __DEV__ });

/**
 * Configures and creates a store with the given initial state.
 * @param {Object} initialState Store initial state.
 * @return {Object} The store.
 */
function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        ),
    );

    return createStore(reducer, initialState, enhancer);
}

// Create the store.
const store = configureStore({});

const Main = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

// Register the app.
AppRegistry.registerComponent('PodcastAggregator', () => Main);