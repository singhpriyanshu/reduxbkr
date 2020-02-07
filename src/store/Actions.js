export const GET_DISHES_START =  "GET_DISHES_START";
export const GET_DISHES_SUCCESS =  "GET_DISHES_SUCCESS";
export const GET_DISHES_FAIL =  "GET_DISHES_FAIL";

export const getDishesStart = () => ({
    type: GET_DISHES_START
  });
  
  export const getDishesSuccess = Json => ({
    type: GET_DISHES_SUCCESS,
    payload: { Json }
  });
  
  export const getDishesFail = error => ({
    type: GET_DISHES_FAIL,
    payload: { error }
  });