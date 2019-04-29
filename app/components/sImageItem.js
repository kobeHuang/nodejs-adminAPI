import React, { Component } from 'react';

import withStyles from './withStyles';

import styles from './sImageItem.css';

class SImageItem extends Component {
    render() {
        return(
            <div className="imageItem">
                <div className={styles["imageItem-title"]}>
                    <p className={styles["imageItem-title-txt"]}>舞蹈大赛荣获一等奖</p>
                </div>
                <div className={styles["imageItem-image"]}>
                    <img className={styles["imageItem-image-img"]} src="http://p.qpic.cn/smartcampus/0/44128296028675/0" />
                </div>
            </div>
        )
    }
}


export default withStyles(SImageItem, styles);