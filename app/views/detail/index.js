import React, { Component } from 'react';

import { Helmet } from "react-helmet";
import withStyles from '../../components/withStyles';

import s from './style.css';

class Detail extends Component {
    render() {
        return(
            <>
                <Helmet>
                    <title>详情 - 我的校园</title>
                    <meta name="description" content="详情 - 我的校园" />
                </Helmet>
                <div className={s.detail}>
                    <div className={s['detail-header']}>
                        <div className={s['detail-header-title']}>智慧校园的教室悄悄发生了变化</div>
                        <div className={s['detail-header-msg']}>2019-01-14</div>
                    </div>
                    <div className={s['detail-img']}>
                        <img className={s['detail-img-img']} src="http://p.qpic.cn/smartcampus/0/25319021414858096/0" />
                    </div>
                    <div className={s['detail-con']}>
                        <div className={s['detail-con-txt']}>
                            <p className={s['detail-con-top']}>
                                <span className={{'detail-con-span': s['detail-con-span'], 'detail-con-green': s['detail-con-green']}}></span>
                                <span className={{'detail-con-span': s['detail-con-span'], 'detail-con-green': s['detail-con-black']}}></span>
                            </p>
                            <p>快来找找你的教室有什么不同</p>
                        </div>
                    </div>
                    <div className={s['detail-content']}>
                        <p>快来找找你的教室有什么不同</p>
                    </div>
                </div>
            </>
        )
    }
}

export default withStyles(Detail, s);