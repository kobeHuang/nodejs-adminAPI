import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Helmet } from "react-helmet";
import NewsItem from '../../components/newsItem';
import { actions } from '../../store/news';

class News extends Component {

    componentDidMount() {
        const { list,  getNewsList} = this.props;
        if(!list.length){
            getNewsList();
        }
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
                        this.props.list.map(item => (
                            <NewsItem data={item} key={item._id}  />
                        ))
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    list : state.news.data
});

const mapDispatchToProps = dispatch => ({
    getNewsList() {
        dispatch(actions.getNewsList()) 
    }
});

const ExportNews = connect(mapStateToProps, mapDispatchToProps)(News);

ExportNews.loadData = (store) => {
    return store.dispatch(actions.getNewsList())
}

export default ExportNews;