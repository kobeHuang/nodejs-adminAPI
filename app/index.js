import React from 'react';
import {render,hydrate} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import { getClientStore } from './store';

import routes from './routes';

const store = getClientStore();

hydrate(
<Provider store={store}>
    <BrowserRouter basename="/app">
        {renderRoutes(routes)}
    </BrowserRouter>
</Provider>,
document.getElementById('app'));