import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return(
            <div className="detail">
                <div className="detail-header">
                    <div className="detail-title">智慧校园的教室悄悄发生了变化</div>
                    <div className="detail-msg">2019-01-14</div>
                </div>
                <div className="detail-img">
                    <img src="http://p.qpic.cn/smartcampus/0/25319021414858096/0" />
                </div>
                <div className="detail-con">
                    <div className="detail-con-txt">快来找找你的教室有什么不同</div>
                </div>
                <style jsx="true">{`
                    .detail-header{
                        background: #fff;
                        padding-bottom: .3rem;
                    }
                    .detail-title{
                        padding: .4rem .3rem;
                        color: #000;
                        font-size: .44rem;
                    }
                    .detail-msg{
                        padding: 0 .3rem;
                        color: #a9b5c5;
                        font-size: .28rem;
                    }
                    .detail-img{
                        font-size: 0;
                    }
                    .detail-img img{
                        width: 100%;
                    }
                    .detail-con{
                        position: relative;
                        top: -.1rem;
                        padding: 0 .24rem;
                    }
                    .detail-con-txt{
                        background: #fff;
                        box-shadow: 0 0 0.6rem rgba(78,131,137,.15);
                        padding: .2rem .36rem .5rem;
                        color: #6e7d8f;
                    }
                `}
                </style>
            </div>
        )
    }
}

export default Detail;