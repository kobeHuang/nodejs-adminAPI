import React, { Component } from 'react';

import { Helmet } from "react-helmet";
import withStyles from '../../components/withStyles';

import s from './style.css';
import ImageItem from '../../components/mImageItem';

class Life extends Component{
    state = {
        list: ['1','2','3']
    }
    render() {
        return(
            <>
                <Helmet>
                    <title>校园生活 - 我的校园</title>
                    <meta name="description" content="校园生活 - 我的校园" />
                </Helmet>
                <div className={s.life}>
                    <div className={s['life-header']}>
                        <img className={s['life-header-img']} src="http://p.qpic.cn/smartcampus/0/441281377990953/0" />
                        <p>我的智慧校园</p>
                    </div>
                    <div className={s['life-list']}>
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

export default withStyles(Life, s);