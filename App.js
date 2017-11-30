import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './app/reducers/index';
import AppContainer from './app/containers/App';

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

export default App;