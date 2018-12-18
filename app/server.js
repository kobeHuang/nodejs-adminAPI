import React, { Component } from 'react';
import { StaticRouter } from 'react-router';

class App extends Component{
    render() {
        return(
            <StaticRouter basename="/app" context={this.props.context} location={this.props.url}>
                <div>test test test...</div>
            </StaticRouter>
        )
    }
}

export default App;