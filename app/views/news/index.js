import React, { Component } from 'react';
import { 
    Route,
    Switch
} from 'react-router-dom';

import List from './list';
import Detail from './detail';

class News extends Component {
    render() {
        return(
            <div className="news">
                <Switch>
                    <Route path="/news" component={List} exact />
                    <Route path="/news/detail" component={Detail} />
                </Switch>
                <style jsx="true">{`
                    .news {
                        height: 100%;
                    }
                `}
                </style>
            </div>
        )
    }
}

export default News;