import { combineReducers } from "redux";
import dishes from "./store/Reducer";
import selectMeal from './store/Reducer'
import selectRestaurant from './store/Reducer'
import selectPeople from './store/Reducer'

export default combineReducers({
    dishes,
    selectMeal,
    selectRestaurant,
    selectPeople
});