import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import { Link } from 'react-router-dom';

import s from './style.scss';
import Swiper from './swiper';
import Menu from './menu';
import NewsItem from '../../components/newsItem';



class Home extends Component{

    render() {
        return(
            <div className={s['home']}>
                <Swiper />
                <div className={s['home-welcome']}>
                    <div style={{position: 'relative', width: '100%'}}>
                        <div className={s['home-welcome-line']}></div>
                        <span className={s['home-welcome-font']}>欢迎来到智慧学校</span>
                    </div>
                </div>
                <div className={s['home-cutoff']}></div>
                <Menu />
                <div className={s['home-cutoff']}></div>
                <div className={s['home-news']}>
                    <p className={s['home-news-title']}>校园新闻</p>
                    <div>
                        <NewsItem />
                        <NewsItem />
                    </div>
                    <Link to="news" className={s['home-news-more']}>更多新闻 >></Link>
                </div>

            </div>
        )
    }
}

console.log(`styles=${JSON.stringify(s)}`);

export default withStyles(s)(Home);