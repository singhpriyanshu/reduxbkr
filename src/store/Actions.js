import * as ActionTypes from './ActionTypes';


export const getDishesStart = () => ({
    type:ActionTypes.GET_DISHES_START
    
  });
  
  export const getDishesSuccess = (Json) => ({
    type: ActionTypes.GET_DISHES_SUCCESS,
    payload: { Json }
   
  });
  
  export const getDishesFail = (error) => ({
    type: ActionTypes.GET_DISHES_FAIL,
    payload: { error }
  });

  export function getDishes () {
    return dispatch =>{
       dispatch(getDishesStart());
       fetch('../../data.json')
       .then(res => res.json())
       .then((data) => {
          dispatch(getDishesSuccess(data.dishes))
       })
       .catch((err)=>{
            dispatch(getDishesFail(err))
       })
    };
}