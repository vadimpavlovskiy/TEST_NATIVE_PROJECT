import { combineReducers, legacy_createStore } from 'redux';

import TokenReducer from '../reducers/tokenReducer';

import { applyMiddleware } from 'redux';

import thunk, { ThunkMiddleware } from 'redux-thunk';

import logger from 'redux-logger';
import { compose } from 'redux';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middlewareList = [thunk, logger];

const enhancer = composeEnhancers(
    applyMiddleware(...middlewareList)
)

const rootReducer = combineReducers(
    { photos: TokenReducer }
)

const configureStore = () => {
    return legacy_createStore(rootReducer, enhancer);
}
export default configureStore;