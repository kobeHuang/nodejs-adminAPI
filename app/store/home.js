import { HOME_CHANGE_LIST } from './constants';

const defaultState = {
	data: {}
}

export const actions = {
    getHomeData: () => {
        return( dispatch, getState, axiosInstance ) => {
            return axiosInstance.get('/app/getHomeData')
                .then( res => {
                    const data = res.data.data;
                    dispatch({
                        type: HOME_CHANGE_LIST,
                        data
                    })
                })
                .catch( e => {
                    console.log(`catch${JSON.stringify(e)}`);
                })
        }
    }
}


export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case HOME_CHANGE_LIST: 
            return { 
                ...state,
                data: action.data
            }
        default:
            return state;    
    }
}