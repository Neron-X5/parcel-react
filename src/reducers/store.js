import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import rootReducer from './root-reducer';

const configureStore = (initialState = {}) => {
    // return createStore(rootReducer, initialState);
    // or
    /* const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
    return createStoreWithMiddleware(rootReducer); */
    // or
    // return createStore(rootReducer, initialState, compose(applyMiddleware(ReduxPromise)));
    // or for use with Redux Dev Tool add-on
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(ReduxPromise)));
};

const store = configureStore();

export default store;
