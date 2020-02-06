import * as actionTypes from "../action/types/dishes";

const initialState = {
    Json: [],
    error: null,
    loading: false,
    meal:[],
    restorents:[],
    dishes:[]
  };
  

const getDishesStart = (state, action) => {
    return {
      error: null,
      loading: true,
      applicants:null
    };
  };
  
  const getDishesSuccess = (state, action) => {
       console.log('red',action.data)
    return {
        error: null,
        loading: true,
        applicants:null
      };
  };
  
  const getDishesFail = (state, action) => {
    return {
        error: null,
        loading: true,
        applicants:null
      };
  };


export const getDishes = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DISHES_START:
      return getDishesStart(state, action);
    case actionTypes.GET_DISHES_SUCCESS:
      return getDishesSuccess(state, action);
    case actionTypes.GET_DISHES_FAIL:
      return getDishesFail(state, action);
    default:
      return state;
  }
};


