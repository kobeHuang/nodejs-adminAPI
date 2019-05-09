import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import withStyles from '../../components/withStyles';

import s from './style.css';
import Swiper from './swiper';
import Menu from './menu';
import NewsItem from '../../components/newsItem';
import { actions } from '../../store/home';

class Home extends Component{

    render() {
        const {
            banners = [],
            menus = [],
            news = []
        } = this.props.data;
        return(
            <>
                <Helmet>
                    <title>首页 - 我的校园</title>
                    <meta name="description" content="首页 - 我的校园" />
                </Helmet>
                <div className={s['home']}>
                    <Swiper banners={banners} />
                    <div className={s['home-welcome']}>
                        <div style={{position: 'relative', width: '100%'}}>
                            <div className={s['home-welcome-line']}></div>
                            <span className={s['home-welcome-font']}>欢迎来到智慧学校</span>
                        </div>
                    </div>
                    <div className={s['home-cutoff']}></div>
                    <Menu data={menus} />
                    <div className={s['home-cutoff']}></div>
                    <div className={s['home-news']}>
                        <p className={s['home-news-title']}>校园新闻</p>
                        <div>
                            {
                                news.map(item => (
                                    <NewsItem  data={item} key={item._id} />
                                ))
                            }
                        </div>
                        <Link to="news" className={s['home-news-more']}>更多新闻 >></Link>
                    </div>

                </div>
            </>
        )
    }

    componentDidMount() {
        const { data,  getHomeData} = this.props;
        if(!Object.keys(data).length){
            getHomeData();
        }
    }
}

const mapStateToProps = state => ({
    data: state.home.data
})

const mapDispatchToProps = dispatch => ({
    getHomeData() {
        dispatch(actions.getHomeData())
    }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyles(Home, s));

ExportHome.loadData = (store) => {
    return store.dispatch(actions.getHomeData())
}

export default ExportHome;