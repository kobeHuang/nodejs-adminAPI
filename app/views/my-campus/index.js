import React, { Component } from 'react';

import { Helmet } from "react-helmet";
import withStyles from '../../components/withStyles';

import s from './style.css';

class MyCampus extends Component {
    render(){
        return (
            <>
                <Helmet>
                    <title>校园简介 - 我的校园</title>
                    <meta name="description" content="校园简介 - 我的校园" />
                </Helmet>
                <div className={s.intro}>
                    <div className={s['intro-header']}>
                        <img className={s['intro-header-img']} src="http://p.qpic.cn/smartcampus/0/441281377990953/0" />
                        <p>我的智慧校园</p>
                    </div>
                    <div className={s['intro-content']}>
                    “腾讯智慧校园”是腾讯公司在“互联网+”的战略背景下，结合自身产品与平台优势，面向各类学校研发的移动端校园智慧生态圈解决方案。所谓智慧教育，就是用最简单的方式，让工作、学习、生活更方便、更轻松、更省事！提升工作效率、降低管理成本、解放师生家长、打造智慧学校。所谓“大数据”就是通过点滴数据聚集，对教育的管理、教学、学习、家校、宣传和评价各个方面进行多维度数据的动态研究和分析。
                    </div>
                </div>
            </>
        )
    }
}

export default withStyles(MyCampus, s);