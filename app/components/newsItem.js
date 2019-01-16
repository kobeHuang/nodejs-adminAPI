import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';

class NewsItem extends Component {
    render() {
        return(
            <div className="newsItem">
                <div className="newsItem-left">
                    <img src="http://p.qpic.cn/smartcampus/0/25319021414858096/0" />
                </div>
                <div className="newsItem-right">
                    <p className="newsItem-right-title">智慧校园的教室悄悄发生了变化</p>
                    <p className="newsItem-right-msg clearfix">
                        <span className="time">2019-01-14</span>
                        <Link to="/news/detail" className="detail">
                            查看详情<Icon type="right" />
                        </Link>
                    </p>
                </div>
                <style jsx="true">{`
                    .newsItem{
                        display: flex;
                        padding: .3rem;
                        border-bottom: 1px solid #ececec;
                    }
                    .newsItem-left{
                        width: 1.96rem;
                        height: 1.16rem;
                        overflow: hidden;
                    }
                    .newsItem-left img{
                        height: 100%;
                    }
                    .newsItem-right{
                        flex: 1;
                        padding-left: .2rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    .newsItem-right-title{
                        font-size: .32rem;
                        line-height: 1.2;
                        display: -webkit-box;
                        word-break: break-all;
                        overflow: hidden;
                        -webkit-line-clamp: 2;
                    }
                    .newsItem-right-msg{
                        font-size: .28rem;
                        color: #a3b2c9;
                    }
                    .newsItem-right-msg .time{
                        float: left;
                    }
                    .newsItem-right-msg .detail{
                        float: right;
                        color: #a3b2c9;
                    }
                `}
                </style>
            </div>
        )
    }
}



export default NewsItem;