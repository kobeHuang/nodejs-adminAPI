import React, { Component } from 'react';

import './style.css';

class Detail extends Component {
    render() {
        return(
            <div className="detail">
                <div className="detail-header">
                    <div className="detail-header-title">智慧校园的教室悄悄发生了变化</div>
                    <div className="detail-header-msg">2019-01-14</div>
                </div>
                <div className="detail-img">
                    <img className="detail-img-img" src="http://p.qpic.cn/smartcampus/0/25319021414858096/0" />
                </div>
                <div className="detail-con">
                    <div className="detail-con-txt">
                        <p className="detail-con-top">
                            <span className="detail-con-span detail-con-green"></span>
                            <span className="detail-con-span detail-con-black"></span>
                        </p>
                        <p>快来找找你的教室有什么不同</p>
                    </div>
                </div>
                <div className="detail-content">
                    <p>快来找找你的教室有什么不同</p>
                </div>
            </div>
        )
    }
}

export default Detail;