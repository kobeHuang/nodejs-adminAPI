import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';


// 这个函数，是生成高阶组件的函数
// 这个函数，返回一个组件
export default (DecoratedComponent, styles) => {
	// 返回的这个组件，叫做高阶组件
	return class NewComponent extends Component {

		render() {
			if(this.props.staticContext){
				return withStyles(styles)(DecoratedComponent);
			}
			return <DecoratedComponent {...this.props} />
		}

	}

}