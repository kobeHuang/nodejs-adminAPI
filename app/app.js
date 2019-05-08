import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

const App = (props) => {
    return(
        <div style={{height: '100%'}}>
            {renderRoutes(props.route.routes)}
        </div>
    )
}

export default App;