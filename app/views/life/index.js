import React, { Component } from 'react';

import './style.scss';
import ImageItem from '../../components/mImageItem';

class Life extends Component{
    state = {
        list: ['1','2','3']
    }
    render() {
        return(
            <div className="life">
                <div className="life-header">
                    <img className="life-header-img" src="http://p.qpic.cn/smartcampus/0/441281377990953/0" />
                    <p>我的智慧校园</p>
                </div>
                <div className="life-list">
                    {
                        this.state.list.map(val => (
                            <ImageItem key={val} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Life;