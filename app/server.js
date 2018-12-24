import React, { Component } from 'react';
import { StaticRouter } from 'react-router';

import App from './app';

class ServeDOM extends Component{
    render() {
        return(
            <StaticRouter basename="/app" context={this.props.context} location={this.props.url}>
                <App />
            </StaticRouter>
        )
    }
}

export default ServeDOM;