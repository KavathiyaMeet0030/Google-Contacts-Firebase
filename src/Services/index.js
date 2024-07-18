import { combineReducers } from "redux";
import contactReducers from "./Reducers/ContactReducers";
import ThunkReducers from './Reducers/ThunkReducers'


 export const MainReducer = combineReducers({contactReducers,ThunkReducers});