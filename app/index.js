import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers/index';
import { AppRegistry } from 'react-native';
import AppContainer from './containers/App';

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

const App = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);

// Register the app.
AppRegistry.registerComponent('PodcastAggregator', () => App);