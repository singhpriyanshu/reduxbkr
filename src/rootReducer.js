import { combineReducers } from "redux";
import {getDishes} from "./store/fetch";
import Json from './store/reducer';
import meal from './store/reducer';



export default combineReducers({
    dishreducer:getDishes,
    Json,meal
});