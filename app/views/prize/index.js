import React, { Component } from 'react';

import './style.scss';
import ImageItem from '../../components/sImageItem';

class Prize extends Component {

    state = {
        list: ['1','2','3']
    }

    render() {
        return(
            <div className="prize">
                <div className="prize-header">
                    <div className="prize-header-con">
                        <div className="prize-header-line"></div>
                        <span className="prize-header-msg">智慧校园学生获奖名册</span>
                    </div>
                </div>
                <div className="prize-intro">
                2017年学校共有多名学生在舞蹈、音乐、书法、绘画的全国大赛中荣获一、二等奖，施展自身才华的同时也为学校争光
                </div>
                <div className="prize-list">
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

export default Prize;