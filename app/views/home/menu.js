import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import withStyles from '../../components/withStyles';

import s from './style.css';


class Menu extends Component {

    state = {
        link: {
            'type-1': '/my-campus',
            'type-2': '/news',
            'type-3': '/prize',
            'type-4': '/works',
            'type-5': '/life'
        }
    }

    render() {
        return(
            <div className={s['home-menu']}>
                {
                    this.props.data.map( (item, idx) => (
                        <div key={item._id} className={s['home-menu-item']}>
                            <div className={(idx+1) % 3==0 ? s['home-menu-hg'] : s['home-menu-icon']}>
                                <img src={item.icon} />
                            </div>
                            <Link to={this.state.link[`type-${item.type}`]} className={s['home-menu-name']}>{item.name}</Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default withStyles(Menu, s);