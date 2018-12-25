import React, { Component } from 'react';
import { 
    Route,
    Switch
} from 'react-router-dom';

import Home from './views/home'

class App extends Component{
    render() {
        return(
            <div>
                <Switch>
                    <Route path="/" component={Home} exact  />
                </Switch>
                <style jsx="true">{`
                    *{
                        margin: 0;
                        padding: 0;
                    }
                    html,body{
                        height: 100%;
                    }
                    body{
                        width: 100%;
                        font-size: .14rem;
                        font-family: -apple-system-font,Helvetica Neue,sans-serif;
                        overflow-x: hidden;
                        color: #686868;
                        line-height: 1.6;
                    }
                `}</style>

            </div>
        )
    }
}

export default App;