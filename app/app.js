import React, { Component } from 'react';

import { 
    Route,
    Switch
} from 'react-router-dom';

import Home from './views/home';
import News from './views/news';
import Prizes from './views/prize';
import MyCampus from './views/my-campus';
import Life from './views/life';
import Detail from './views/detail';
import NoMatch from './views/noMatch';

class App extends Component{
    render() {
        return(
            <div style={{height: '100%'}}>
                <Switch>
                    <Route path="/index" component={Home} exact  />
                    <Route path="/my-campus" component={MyCampus} />
                    <Route path="/news" component={News} />
                    <Route path="/prize" component={Prizes} />
                    <Route path="/life" component={Life} />
                    <Route path="/article/:type/:id" component={Detail} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}

export default App;