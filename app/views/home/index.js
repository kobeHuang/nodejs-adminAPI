import React, { Component } from 'react';

import './style.scss';
import Swiper from './swiper';



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
                <div className="home-menu">
                    <div className="home-menu-item">
                        <div className="home-menu-icon">
                            <img src="http://p.qpic.cn/smartcampus/0/25319021966887216/0" />
                        </div>
                        <span className="home-menu-name">学校简介</span>
                    </div>
                    <div className="home-menu-item"></div>
                </div>
            </div>
        )
    }
}

export default Home;