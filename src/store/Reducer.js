import * as ActionTypes from './ActionsTypes';
const initialState = {
    data: [],
    
    loading: false,
    loaded: false,
    error: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ActionTypes.LOAD_DISH:
        return { ...state, data: payload }

    case ActionTypes.LOAD_DISH_SUCESS:
        return { ...state, loaded: true }
    
    case ActionTypes.LOAD_DISH_FAIL:
        return { ...state, error: payload }
    
    case ActionTypes.DISH_LOADING:
        return { ...state, loading: payload }
    
    
        // return { ...state  }
    
    default:
        return state;
    
    }}