import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

import './style.scss';



class Home extends Component{

    state = {
        imgs: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        imgHeight: 150
    }

    renderCarousel() {
        return (
            <WingBlank>
                <Carousel className="space-carousel"
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
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
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

    render() {
        return(
            <div className="home">
                {this.renderCarousel()}
            </div>
        )
    }
}

export default Home;