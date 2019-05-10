import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Helmet } from "react-helmet";
import withStyles from '../../components/withStyles';
import { actions } from '../../store/detail';
import { renderTime } from '../../assets/utils';

import s from './style.css';

class Detail extends Component {
    createMarkup(code) {
        return {__html: code};
    }
    render() {
        const detail = this.props.detail;
        return(
            <>
                <Helmet>
                    <title>详情 - 我的校园</title>
                    <meta name="description" content={`${detail.title} - 我的校园`} />
                </Helmet>
                <div className={s.detail}>
                    <div className={s['detail-header']}>
                        <div className={s['detail-header-title']}>{detail.title}</div>
                        <div className={s['detail-header-msg']}>{renderTime(detail.createdAt)}</div>
                    </div>
                    <div className={s['detail-img']}>
                        <img className={s['detail-img-img']} src={detail.img} />
                    </div>
                    <div style={{display: 'none'}} className={s['detail-con']}>
                        <div className={s['detail-con-txt']}>
                            <p className={s['detail-con-top']}>
                                <span className={{'detail-con-span': s['detail-con-span'], 'detail-con-green': s['detail-con-green']}}></span>
                                <span className={{'detail-con-span': s['detail-con-span'], 'detail-con-green': s['detail-con-black']}}></span>
                            </p>
                            <p>快来找找你的教室有什么不同</p>
                        </div>
                    </div>
                    <div className={s['detail-content']} dangerouslySetInnerHTML={this.createMarkup(detail.content)}>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount() {
        const { detail, getDetail } = this.props;
        if(!Object.keys(detail).length){
            const { type, id } = this.props.match.params;
            getDetail({ classify: type, _id: id });
        }
    }
}

const mapStateToProps = state => ({
    detail: state.detail.data
});

const mapDispatchToProps = dispatch => ({
    getDetail({ classify, _id }) {
        switch(classify){
            case 'news':
                dispatch(actions.getInfoData(_id)) 
                break;
            default:
                return;
        }
    }
})

const ExportDetail = connect(mapStateToProps, mapDispatchToProps)(withStyles(Detail, s));

ExportDetail.loadData = (store, url) => {
    const sArray = url.split('/');
    const _id = sArray.pop();
    const classify = sArray.pop();
    switch(classify){
        case 'news':
            return store.dispatch(actions.getInfoData(_id)) 
        default:
            return new Promise();
    }
}

export default ExportDetail;