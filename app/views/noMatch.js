import React, { Component } from 'react';

class NoMatch extends Component{
    render() {
        return(
            <div className="noFound" style={style}>
            </div>
        )
    }
}

const style = {
    height: '100%',
    background: `url(${require('../assets/404.png')}) center center no-repeat`,
    backgroundSize: 'contain',
}

export default NoMatch;