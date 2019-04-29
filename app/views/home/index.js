import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import withStyles from '../../components/withStyles';

import s from './style.css';
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
export default withStyles(Home, s);