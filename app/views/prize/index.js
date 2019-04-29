import React, { Component } from 'react';

import { Helmet } from "react-helmet";
import withStyles from '../../components/withStyles';

import s from './style.css';
import ImageItem from '../../components/sImageItem';

class Prize extends Component {

    state = {
        list: ['1','2','3']
    }

    render() {
        return(
            <>
                <Helmet>
                    <title>荣获奖项 - 我的校园</title>
                    <meta name="description" content="荣获奖项 - 我的校园" />
                </Helmet>
                <div className={s.prize}>
                    <div className={s['prize-header']}>
                        <div className={s['prize-header-con']}>
                            <div className={s['prize-header-line']}></div>
                            <span className={s['prize-header-msg']}>智慧校园学生获奖名册</span>
                        </div>
                    </div>
                    <div className={s['prize-intro']}>
                    2017年学校共有多名学生在舞蹈、音乐、书法、绘画的全国大赛中荣获一、二等奖，施展自身才华的同时也为学校争光
                    </div>
                    <div className={s['prize-list']}>
                        {
                            this.state.list.map(val => (
                                <ImageItem key={val} />
                            ))
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default withStyles(Prize, s);