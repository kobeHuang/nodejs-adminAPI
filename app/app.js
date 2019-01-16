import React, { Component } from 'react';
import { 
    Route,
    Switch
} from 'react-router-dom';

import './assets/css/common.scss';

import Home from './views/home';
import News from './views/news';
import NoMatch from './views/noMatch';

class App extends Component{
    render() {
        return(
            <div className="root">
                <Switch>
                    <Route path="/index" component={Home}  />
                    <Route path="/news" component={News}/>
                    <Route component={NoMatch} />
                </Switch>
                <style jsx="true">{`
                    *{
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
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
                    #app,.root{
                        height: 100%;
                    }
                `}</style>

            </div>
        )
    }
}

export default App;