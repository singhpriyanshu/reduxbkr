import * as ActionsTypes from './ActionsTypes'
import  { newdata } from '../data'


export const setLoading = (payload) => ({
    type: ActionsTypes.DISH_LOADING,
    payload
})

export const dishes = (payload) => ({
    type: ActionsTypes.LOAD_DISH_SUCESS,
    payload
})

 export const selectmeal=(payload)=>({
     type:ActionsTypes.SELECT_MEAL,
     payload
 })

 export const selectRestaurant=(payload)=>({
  type: ActionsTypes.SELECT_RESTAURANT,
  payload

 })
 
export const setError = (payload) => ({
    type: ActionsTypes.LOAD_DISH_FAIL,
    payload
})



export const loadDish = (payload) => ({
    type: ActionsTypes.LOAD_DISH,
    payload
})
export const selectPeople=(payload)=>({
    type:ActionsTypes.SELECT_PEOPLE,
    payload
})
export const getDish = () => {
    return dispatch => {
        dispatch(setLoading(false));
        // dispatch(selectmeal(newdata));
        // dispatch(selectRestaurant(newdata.dishes))
        // dispatch(dishes(newdata.dishes))
            // let data=[],
            // data.dishes.filter((item1,index)=>{
            // if(data1.includes(item1,name)==false){
            //     data1=[...data,item1.name]}})
    
        
        fetch('../data')
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    dispatch(dishes());
                    dispatch(loadDish(newdata));
                    
    
                }
            })
            // .catch(e => {
            //     ('Something went wrong');
            //     dispatch(setLoading(false));
            //     dispatch(setError(e));
            // });
    
}}