import { NEWS_GET_LIST } from './constants';

const defaultState = {
    data: []
}

export const actions = {
    getNewsList() {
        return ( dispatch, getState, axiosInstance ) => {
            return axiosInstance.get('/app/getNewsList',{
                params: {
                    pageNo: 1,
                    pageSize: 10
                }
            })
            .then(res => {
                const data = res.data.data;
                dispatch({
                    type: NEWS_GET_LIST,
                    data
                })
            })
        }
    }
}

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case NEWS_GET_LIST: 
            return { 
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}