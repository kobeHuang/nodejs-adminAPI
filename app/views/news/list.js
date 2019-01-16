import React, { Component } from 'react';

import NewsItem from '../../components/newsItem';

class List extends Component {

    state ={
        data: ['1','2','3','4']
    }
    
    render() {
        return(
            <div className="newsList">
                {
                    this.state.data.map(val => (
                        <NewsItem key={val} />
                    ))
                }
                <style jsx="true">{`
                    .newsList {
                        height: 100%;
                        background: #fff;
                    }
                `}
                </style>
            </div>
        )
    }
}

export default List;