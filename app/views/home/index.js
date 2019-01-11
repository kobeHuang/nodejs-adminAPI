import React, { Component } from 'react';

import './style.scss';
import Swiper from './swiper';
import Menu from './menu';



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
            </div>
        )
    }
}

export default Home;