import { combineReducers } from "redux";
import {getDishes} from "./store/reducer/dishes.red";


export default combineReducers({
    dishesReducer:getDishes
});