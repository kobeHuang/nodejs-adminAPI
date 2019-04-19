import React, { Component } from 'react';

import { Carousel, WingBlank } from 'antd-mobile';

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
                <div style={styles["mImageItem-title"]}>
                    <div style={styles["mImageItem-title-con"]}>
                        <div style={styles["mImageItem-titel-line"]}></div>
                        <span style={styles["mImageItem-title-txt"]}>新生晚会表演</span>
                    </div>
                </div>
                <div style={styles["mImageItem-image"]}>
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
                                window.dispatchEvent(new Event('resize'));
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

const styles = {
    'mImageItem-title': {
        padding: '.24rem'
    },
    'mImageItem-title-con': {
        position: 'relative'
    },
    'mImageItem-titel-line': {
        position: 'absolute',
        left: 0,
        bottom: '.24rem',
        width: '100%',
        height: '1px',
        transform: 'scaleY(.5)',
        transformOrigin: '0 0',
        borderTop: '2px solid #0cb181'
    },
    'mImageItem-title-txt': {
        display: 'inline-block',
        position: 'relative',
        fontSize: '.32rem',
        padding: '0 .2rem',
        background: '#fff',
    },
    'mImageItem-image': {
        height: '4rem',
        margin: '.3rem .1rem',
        overflow: 'hidden'
    }
}

export default MImageItem;