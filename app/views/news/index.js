import React, { Component } from 'react';

import NewsItem from '../../components/newsItem';

class News extends Component {

    state ={
        data: ['1','2','3','4']
    }
    
    render() {
        return(
            <div className="newsList" style={{height: '100%', background: '#fff'}}>
                {
                    this.state.data.map(val => (
                        <NewsItem key={val} />
                    ))
                }
            </div>
        )
    }
}

export default News;