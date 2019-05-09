import { DETAIL_GET_DATA } from './constants';

const defaultState = {
	data: {}
}

export const actions = {
    getInfoData(_id) {
        return( dispatch, getState, axiosInstance ) => {
            return axiosInstance.get('/app/getInfoDetail', {
                params: {
                    _id
                }
            })
                .then(res => {
                    const data = res.data.data;
                    dispatch({
                        type: DETAIL_GET_DATA,
                        data
                    })
                })
        }
    }
}


export const reducer = ( state = defaultState, action ) => {
    switch(action.type) {
        case DETAIL_GET_DATA: 
            return { 
                ...state,
                data: action.data
            }
        default:
            return state;    
    }
}