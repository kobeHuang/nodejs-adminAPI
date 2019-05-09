import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withStyles from './withStyles';
import { renderTime } from '../assets/utils';

import styles from './newsItem.css';
import { Item } from 'antd-mobile/lib/tab-bar';

class NewsItem extends Component {

    setClass2Type(classify){
        switch(classify) {
            case '校园新闻':
                return 'news';
            default:
                return '';
        }
    }

    render() {
        const news = this.props.data;
        return(
            <div className={styles.newsItem}>
                <div className={styles["newsItem-left"]}>
                    <img className={styles["newsItem-left-img"]} src={news.img} />
                </div>
                <div className={styles["newsItem-right"]}>
                    <p className={styles["newsItem-right-title"]}>{news.title}</p>
                    <p className={styles["newsItem-right-msg"]}>
                        <span className={styles["newsItem-right-msg-time"]}>{renderTime(news.createdAt)}</span>
                        <Link to={`/article/${this.setClass2Type(news.classify)}/${news._id}`} className={styles["newsItem-right-msg-detail"]}>
                            查看详情
                        </Link>
                    </p>
                </div>
            </div>
        )
    }
}


export default withStyles(NewsItem, styles);