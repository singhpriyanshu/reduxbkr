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
      meal:null
    };
  };
  
  const getDishesSuccess = (state, action) => {
      //  console.log('red',action.data)
      // console.log(meals)
      // let dishes = [];
      // action.data.filter((item1)=>{
      //   if (dishes.includes(item1.name)===false)
      //   { dishes = [...dishes,item1.name]}
      // })
      //   console.log(dishes)
       
      //   let restaurants=[];
      //    action.data.filter((item1)=>{
      //      if(restaurants.includes(item1.restaurant)===false)
      //      {restaurants=[...restaurants,item1.restaurant]}
      //    })
      //         console.log(restaurants);

      let meals=[];
      action.data.filter((item1)=>{
      item1.availableMeals.filter((item2)=>{
        if(meals.includes(item2)===false)
          {meals=[...meals,item2]}
         })
      })
    console.log(meals);
    
    
      return {

       
        error: null,
        loading: true,
        meal:meals
      };
  
    }
 
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




 

