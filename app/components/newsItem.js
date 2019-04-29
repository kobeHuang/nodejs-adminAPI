import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';
import withStyles from './withStyles';

import styles from './newsItem.css';

class NewsItem extends Component {
    render() {
        return(
            <div className={styles.newsItem}>
                <div className={styles["newsItem-left"]}>
                    <img className={styles["newsItem-left-img"]} src="http://p.qpic.cn/smartcampus/0/25319021414858096/0" />
                </div>
                <div className={styles["newsItem-right"]}>
                    <p className={styles["newsItem-right-title"]}>智慧校园的教室悄悄发生了变化</p>
                    <p className={styles["newsItem-right-msg"]}>
                        <span className={styles["newsItem-right-msg-time"]}>2019-01-14</span>
                        <Link to="/article/news/2" className={styles["newsItem-right-msg-detail"]}>
                            查看详情
                        </Link>
                    </p>
                </div>
            </div>
        )
    }
}


export default withStyles(NewsItem, styles);