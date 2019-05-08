import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import serverAxios from '../../app-server/request';
import clientAxios from '../request';
import { reducer as homeReaducer } from './home'; 

const reducers = combineReducers({
    home: homeReaducer
});

export const getStore = (req) => {
    return createStore(reducers, applyMiddleware(thunk.withExtraArgument(serverAxios(req))))
}

export const getClientStore = () => {
    const defaultState = window.context.state;
    return createStore(reducers, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}