import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './style.scss';
import Swiper from './swiper';
import Menu from './menu';
import NewsItem from '../../components/newsItem';



class Home extends Component{

    render() {
        return(
            <div className="home">
                <Swiper />
                <div className="home-welcome">
                    <div style={{position: 'relative', width: '100%'}}>
                        <div className="home-welcome-line"></div>
                        <span className="home-welcome-font">欢迎来到智慧学校</span>
                    </div>
                </div>
                <div className="home-cutoff"></div>
                <Menu />
                <div className="home-cutoff"></div>
                <div className="home-news">
                    <p className="home-news-title">校园新闻</p>
                    <div>
                        <NewsItem />
                        <NewsItem />
                    </div>
                    <Link to="news" className="home-news-more">更多新闻 >></Link>
                </div>

            </div>
        )
    }
}

export default Home;