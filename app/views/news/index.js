import React, { Component } from 'react';

import { Helmet } from "react-helmet";
import NewsItem from '../../components/newsItem';

class News extends Component {

    state ={
        data: ['1','2','3','4']
    }
    
    render() {
        return(
            <>
                <Helmet>
                    <title>新闻列表 - 我的校园</title>
                    <meta name="description" content="新闻列表 - 我的校园" />
                </Helmet>
                <div className="newsList" style={{height: '100%', background: '#fff'}}>
                    {
                        this.state.data.map(val => (
                            <NewsItem key={val} />
                        ))
                    }
                </div>
            </>
        )
    }
}

export default News;