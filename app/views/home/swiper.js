/*
 * 首页焦点图
 */


import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

class Swiper extends Component {
    state = {
        imgs: [],
        imgHeight: 150
    }

    componentDidMount() {
        this.setState({
            imgs: this.props.banners
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            imgs: nextProps.banners
        })
    }

    render() {
        return(
            <WingBlank>
                <Carousel className="home-space-carousel"
                frameOverflow="visible"
                cellSpacing={10}
                slideWidth={0.8}
                autoplay
                infinite
                afterChange={index => this.setState({ slideIndex: index })}
                >
                    {
                        this.state.imgs.map((val, idx) => (
                            <a
                                key={val}
                                href="#"
                                style={{
                                    display: 'block',
                                    position: 'relative',
                                    top: this.state.slideIndex === idx ? -10 : 0,
                                    height: this.state.imgHeight,
                                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                }}
                            >
                            <img
                                src={val.url}
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    if (typeof window !== 'undefined') {
                                        window.dispatchEvent(new Event('resize'));
                                    }
                                    this.setState({ imgHeight: 'auto' });
                                }}
                             />
                             </a>
                        ))
                    }
                </Carousel>
            </WingBlank>
        )
    }
}

export default Swiper;
