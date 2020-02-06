import * as ActionTypes from './ActionsTypes';
import { newdata } from '../data';
const initialState = {
    dishes: [],
    //  dishes:[{
    //      dishes:"",
    //        servings:""
    //      }],
    selectMeal:"",
    selectRestaurant:"",
    selectPeople:"",
    loading: false,
    loaded: false,
    //  error: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {



    case ActionTypes.LOAD_DISH_SUCESS:
        return { ...state, loaded: true, payload}
    
    // case ActionTypes.LOAD_DISH_FAIL:
    //     return { ...state, error: payload }

    //  case ActionTypes.DISH_LOADING:
    //      return { ...state, loading: false, payload}

    // case ActionTypes.LOAD_DISH:
    //         return { ...state, dishes: payload } 
            
            
    // case ActionTypes.SELECT_MEAL:
    //      return {...state,selectmeal:payload}
            

    // case ActionTypes.SELECT_RESTAURANT:
    //      return {...state,selectRestaurant:payload}

    // case ActionTypes.SELECT_PEOPLE:
    //         return {...state,selectPeople:payload}

    
    
        return { ...state  }
    
    default:
        return state;
    
    }}