import { combineReducers } from "@reduxjs/toolkit";
import cardsReducer from "./usersSlice"


export const rootReducer = combineReducers({
 usersCards: cardsReducer,
})
