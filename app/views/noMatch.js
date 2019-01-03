import React, { Component } from 'react';

class NoMatch extends Component{
    render() {
        return(
            <div className="noFound">
                <style jsx="true">{`
                    .noFound {
                        height: 100%;
                        background: url('../assets/404.png') center center no-repeat;
                        background-size: contain;
                    }
                `}</style>
            </div>
        )
    }
}

export default NoMatch;