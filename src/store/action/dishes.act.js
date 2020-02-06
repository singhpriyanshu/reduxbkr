import {
    GET_DISHES_START,
    GET_DISHES_SUCCESS,
    GET_DISHES_FAIL
} from "./types/dishes"


export const getDishesStart = () =>{
    console.log('type',GET_DISHES_START);
    return{
        type:GET_DISHES_START
    }
}

export const getDishesSuccess = (data) =>{
    return{
        type:GET_DISHES_SUCCESS,
        data:data
    }
}

export const getDishesFail = (error) =>{
    return{
        type:GET_DISHES_FAIL,
        error:error
    }
}

export const getDishes = () =>{
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