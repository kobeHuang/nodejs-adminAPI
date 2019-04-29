import React from 'react';
import {render,hydrate} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

hydrate(
<BrowserRouter basename="/app">
    <App />
</BrowserRouter>,
document.getElementById('app'));