import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';

import reducer from '../reducers';

// const loggerMiddleware = createLogger({ predicate: () => __DEV__ });

/**
 * Configures and creates a store with the given initial state.
 * @param {Object} onCompletion Callback to be called when store creation is complete.
 * @return {Object} The store.
 */
const configureStore = onCompletion => {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            // loggerMiddleware,
        ),
    );

    const store = createStore(reducer, enhancer);
    persistStore(store, onCompletion);

    return store;
};

export default configureStore;