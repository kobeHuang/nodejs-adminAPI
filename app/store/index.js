import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import serverAxios from '../../app-server/request';
import clientAxios from '../request';
import { reducer as homeReducer } from './home';
import { reducer as detailReducer } from './detail';

const reducers = combineReducers({
    home: homeReducer,
    detail: detailReducer
});

export const getStore = (req) => {
    return createStore(reducers, applyMiddleware(thunk.withExtraArgument(serverAxios(req))))
}

export const getClientStore = () => {
    const defaultState = window.context.state;
    return createStore(reducers, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}