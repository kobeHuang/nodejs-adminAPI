import React, { Component } from 'react';

import { Carousel, WingBlank } from 'antd-mobile';
import withStyles from './withStyles';

import styles from './mImageItem.css';

class MImageItem extends Component{
    state = {
        data: ['1', '2', '3'],
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['562881461756053', '562881461755955', '562881461756013'],
          });
        }, 100);
    }

    render() {
        return(
            <div className="mImageItem">
                <div className={styles["mImageItem-title"]}>
                    <div className={styles["mImageItem-title-con"]}>
                        <div className={styles["mImageItem-titel-line"]}></div>
                        <span className={styles["mImageItem-title-txt"]}>新生晚会表演</span>
                    </div>
                </div>
                <div className={styles["mImageItem-image"]}>
                    <WingBlank>
                        <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {this.state.data.map(val => (
                            <a
                            key={val}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: '4rem' }}
                            >
                            <img
                                src={`http://p.qpic.cn/smartcampus/0/${val}/360`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                    if (typeof window !== 'undefined') {
                                        window.dispatchEvent(new Event('resize'));
                                    }  
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>
                    </WingBlank>
                </div>
            </div>
        )
    }
}

export default withStyles(MImageItem, styles);