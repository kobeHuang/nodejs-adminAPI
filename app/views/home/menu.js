import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class Menu extends Component {
    render() {
        return(
            <div className="home-menu">
                <div className="home-menu-item">
                    <div className="home-menu-icon">
                        <img src="http://p.qpic.cn/smartcampus/0/25319021966887216/0" />
                    </div>
                    <Link to="/my-campus" className="home-menu-name">学校简介</Link>
                </div>
                <div className="home-menu-item">
                    <div className="home-menu-icon">
                        <img src="http://p.qpic.cn/smartcampus/0/25319021795367092/0" />
                    </div>
                    <Link to="/news" className="home-menu-name">校园新闻</Link>
                </div>
                <div className="home-menu-item">
                    <div className="home-menu-icon home-menu-hg">
                        <img src="http://p.qpic.cn/smartcampus/0/25319023539621628/0" />
                    </div>
                    <Link to="/prize" className="home-menu-name">荣获奖项</Link>
                </div>
                <div className="home-menu-item">
                    <div className="home-menu-icon">
                        <img src="http://p.qpic.cn/smartcampus/0/25319022825701726/0" />
                    </div>
                    <span className="home-menu-name">师生作品</span>
                </div>
                <div className="home-menu-item">
                    <div className="home-menu-icon">
                        <img src="http://p.qpic.cn/smartcampus/0/25319021886291474/0" />
                    </div>
                    <Link to="/life" className="home-menu-name">校园生活</Link>
                </div>
                <div className="home-menu-item">
                    <div className="home-menu-icon home-menu-hg">
                        <img src="http://p.qpic.cn/smartcampus/0/25319021366965580/0" />
                    </div>
                    <span className="home-menu-name">校园街景</span>
                </div>
            </div>
        )
    }
}

export default Menu;