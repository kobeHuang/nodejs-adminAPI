import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';

class NewsItem extends Component {
    render() {
        return(
            <div style={styles.newsItem}>
                <div style={styles["newsItem-left"]}>
                    <img style={styles["newsItem-left-img"]} src="http://p.qpic.cn/smartcampus/0/25319021414858096/0" />
                </div>
                <div style={styles["newsItem-right"]}>
                    <p style={styles["newsItem-right-title"]}>智慧校园的教室悄悄发生了变化</p>
                    <p className="clearfix" style={styles["newsItem-right-msg"]}>
                        <span style={styles["newsItem-right-msg-time"]}>2019-01-14</span>
                        <Link to="/article/news/2" style={styles["newsItem-right-msg-detail"]}>
                            查看详情<Icon type="right" />
                        </Link>
                    </p>
                </div>
            </div>
        )
    }
}

const styles = {
    newsItem: {
        display: 'flex',
        padding: '.3rem',
        borderBottom: '1px solid #ececec'
    },
    'newsItem-left': {
        width: '1.96rem',
        height: '1.16rem',
        overflow: 'hidden'
    },
    'newsItem-left-img': {
        height: '100%'
    },
    'newsItem-right': {
        flex: 1,
        paddingLeft: '.2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    'newsItem-right-title': {
        fontSize: '.32rem',
        lineHeight: 1.2,
        display: '-webkit-box',
        wordBreak: 'break-all',
        overflow: 'hidden',
        WebkitLineClamp: 2
    },
    'newsItem-right-msg': {
        fontSize: '.28rem',
        color: '#a3b2c9'
    },
    'newsItem-right-msg-time': {
        float: 'left'
    },
    'newsItem-right-msg-detail': {
        float: 'right',
        color: '#a3b2c9'
    }
}



export default NewsItem;