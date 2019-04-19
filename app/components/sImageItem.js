import React, { Component } from 'react';

class SImageItem extends Component {
    render() {
        return(
            <div className="imageItem">
                <div style={styles["imageItem-title"]}>
                    <p style={styles["imageItem-title-txt"]}>舞蹈大赛荣获一等奖</p>
                </div>
                <div style={styles["imageItem-image"]}>
                    <img style={styles["imageItem-image-img"]} src="http://p.qpic.cn/smartcampus/0/44128296028675/0" />
                </div>
            </div>
        )
    }
}

const styles = {
    'imageItem-title': {
        padding: '.24rem',
        'font-size': '.32rem'
    },
    'imageItem-title-icon': {
        display: 'inline-block',
        height: '100%',
        width: '.3rem',
        background: 'rgb(12, 177, 129)'
    },
    'imageItem-title-txt': {
        display: 'inline-block',
        lineHeight: '.34rem',
        paddingLeft: '11px',
        borderLeft: '7px solid rgb(12, 177, 129)'
    },
    'imageItem-image': {
        margin: '.4rem 0'
    },
    'imageItem-image-img': {
        width: '100%'
    }
}

export default SImageItem;