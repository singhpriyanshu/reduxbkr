import {getDishesStart,getDishesSuccess,getDishesFail} from './Actions'

export function getDishes () {
    return dispatch =>{
       dispatch(getDishesStart());
       fetch('../../data.json')
       .then(res => res.json())
       .then((data) => {
          dispatch(getDishesSuccess(data.dishes))
          console.log(data.dishes.meals)
       })
       .catch((err)=>{
            dispatch(getDishesFail(err))
       })
    };
}